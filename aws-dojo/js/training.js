'use strict';

/* ═══════════════════════════════════════════════════
   BANCA DOMANDE: utilità comuni
═══════════════════════════════════════════════════ */
const BANK       = typeof QUIZ_BANK !== 'undefined' ? QUIZ_BANK : [];
const BANK_BY_ID = new Map(BANK.map(q => [q.id, q]));
const BANK_TAGS  = [...new Set(BANK.flatMap(q => q.tags))].sort((a, b) => a.localeCompare(b));

const MASTERY_STREAK = 2;   // risposte giuste di fila per togliere una domanda dagli errori
const XP_PRACTICE    = 2;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

const LETTERS = 'ABCDEFGH';

// Una domanda "preparata": id + ordine (mescolato) delle opzioni.
// È serializzabile, così l'esame in corso si può salvare e riprendere.
function prepQuestion(q) {
  const idxs  = q.opts.map((_, i) => i);
  return { id: q.id, order: q.keepOrder ? idxs : shuffle(idxs) };
}

function viewOf(p) {
  const q = BANK_BY_ID.get(p.id);
  if (!q) return null;
  return {
    q,
    opts:    p.order.map(i => q.opts[i]),
    correct: q.correct.map(c => p.order.indexOf(c)).sort((a, b) => a - b),
  };
}

function sameSet(a, b) {
  if (a.length !== b.length) return false;
  const s = new Set(a);
  return b.every(x => s.has(x));
}

// Statistiche per domanda + elenco errori attivi
function recordAnswer(id, ok) {
  const s = state.qs[id] || { n: 0, ok: 0, ko: 0, st: 0 };
  s.n++;
  s.t = Date.now();
  if (ok) {
    s.ok++;
    s.st++;
    if (state.err[id] && s.st >= MASTERY_STREAK) delete state.err[id];
  } else {
    s.ko++;
    s.st = 0;
    state.err[id] = Date.now();
  }
  state.qs[id] = s;
}

function errorIds() {
  return Object.keys(state.err).filter(id => BANK_BY_ID.has(id));
}

// Sceglie n domande; con preferUnseen prima quelle mai viste, poi le meno viste
function pickQuestions(pool, n, preferUnseen) {
  let list = shuffle(pool);
  if (preferUnseen) {
    const seen = q => (state.qs[q.id] || {}).n || 0;
    list = list.map((q, i) => [seen(q), i, q]).sort((a, b) => a[0] - b[0] || a[1] - b[1]).map(x => x[2]);
  }
  return list.slice(0, n);
}

function trainingStats() {
  const ids  = Object.keys(state.qs).filter(id => BANK_BY_ID.has(id));
  let ok = 0, tot = 0;
  ids.forEach(id => { ok += state.qs[id].ok; tot += state.qs[id].n; });
  return {
    seen:   ids.length,
    total:  BANK.length,
    acc:    tot ? Math.round(ok / tot * 100) : null,
    errors: errorIds().length,
    best:   state.exam?.bestScore || null,
  };
}

function renderTrainingHome() {
  const st = trainingStats();
  const eb = $('errors-badge');
  if (eb) {
    eb.textContent = st.errors;
    eb.classList.toggle('zero', st.errors === 0);
  }
  const es = $('errors-sub');
  if (es) es.textContent = st.errors ? `${st.errors} da ripassare` : 'Nessun errore 🎉';

  const exSub = $('exam-sub');
  if (exSub) exSub.textContent = state.examSession
    ? '⏸️ Esame in corso: tocca per riprendere'
    : '65 domande · 90 minuti · soglia 700/1000';

  const row = $('stats-row');
  if (row) row.innerHTML = `
    <div class="stat-pill"><b>${st.seen}</b>/${st.total}<span>domande viste</span></div>
    <div class="stat-pill"><b>${st.acc === null ? '–' : st.acc + '%'}</b><span>precisione</span></div>
    <div class="stat-pill"><b>${st.best || '–'}</b><span>miglior esame</span></div>
  `;
}

/* ═══════════════════════════════════════════════════
   RENDER DI UNA DOMANDA (pratica ed esame)
═══════════════════════════════════════════════════ */
function optionsHtml(view, chosen, onclick) {
  return view.opts.map((opt, i) => `
    <button class="exam-opt ${chosen.includes(i) ? 'selected' : ''}" data-i="${i}" onclick="${onclick}(${i})">
      <span class="opt-letter">${LETTERS[i]}</span><span>${esc(opt)}</span>
    </button>`).join('');
}

function markOptions(container, view, chosen) {
  container.querySelectorAll('.exam-opt').forEach((b, i) => {
    b.disabled = true;
    b.classList.remove('selected');
    if (view.correct.includes(i))  b.classList.add('rev-correct');
    else if (chosen.includes(i))   b.classList.add('rev-wrong');
    else                           b.classList.add('rev-dimmed');
  });
}

function explainHtml(view, ok) {
  const right = view.correct.map(i => LETTERS[i]).join(', ');
  return `
    <div class="quiz-feedback show ${ok ? 'ok' : 'ko'}">
      <div class="quiz-feedback-title">${ok ? '✅ Corretto!' : `❌ Sbagliato · risposta giusta: ${right}`}</div>
      <div class="quiz-feedback-body">${view.q.explain ? esc(view.q.explain) : 'Spiegazione non disponibile per questa domanda.'}</div>
    </div>`;
}

function tagsHtml(q) {
  return `<div class="q-tags">${q.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>`;
}

/* ═══════════════════════════════════════════════════
   PRATICA: RIPASSO ERRORI E ALLENAMENTO RAPIDO
═══════════════════════════════════════════════════ */
let practice = null;   // { mode, items, idx, ok, ko, chosen, answered, requeued:Set }

function openPractice(title) {
  $('practice-title').textContent = title;
  $('practice-prog').textContent = '';
  $('practice-progress-fill').style.width = '0%';
  showScreen('practice-screen');
}

function startErrorsSetup() {
  updateStreak();
  practice = null;
  openPractice('🔁 Ripasso errori');
  const n  = errorIds().length;
  const vp = $('practice-viewport');
  if (!n) {
    vp.innerHTML = `
      <div class="exam-intro">
        <div class="exam-intro-title">🎉 Nessun errore da ripassare</div>
        <p class="setup-text">Qui finiscono le domande che sbagli nei moduli, nell'allenamento rapido e nel simulatore.
        Una domanda esce dal ripasso quando rispondi giusto <b>${MASTERY_STREAK} volte di fila</b>.</p>
        <button class="exam-start-btn" onclick="startQuickSetup()">Fai un allenamento rapido →</button>
      </div>`;
    return;
  }
  vp.innerHTML = `
    <div class="exam-intro">
      <div class="exam-intro-title">🔁 Ripasso errori</div>
      <p class="setup-text">Hai <b>${n}</b> ${n === 1 ? 'domanda' : 'domande'} da ripassare.
      Domande e risposte sono in ordine casuale. Se sbagli, la domanda torna alla fine della sessione;
      esce dal ripasso dopo <b>${MASTERY_STREAK} risposte giuste di fila</b>.</p>
      <div class="setup-label">Quante domande?</div>
      <div class="chip-row" id="err-len">
        ${[10, 20].filter(x => x < n).map(x => `<button class="chip" data-v="${x}">${x}</button>`).join('')}
        <button class="chip active" data-v="${n}">Tutte (${n})</button>
      </div>
      <button class="exam-start-btn" onclick="beginErrors()">Inizia il ripasso →</button>
    </div>`;
  bindChips('err-len', false);
}

function beginErrors() {
  const len  = Number(chipValue('err-len')) || errorIds().length;
  // Prima gli errori più recenti
  const ids  = errorIds().sort((a, b) => state.err[b] - state.err[a]);
  const pool = shuffle(ids.slice(0, len)).map(id => BANK_BY_ID.get(id));
  beginPractice('errors', pool);
}

function startQuickSetup() {
  updateStreak();
  practice = null;
  openPractice('⚡ Allenamento rapido');
  const counts = {};
  BANK.forEach(q => q.tags.forEach(t => { counts[t] = (counts[t] || 0) + 1; }));
  $('practice-viewport').innerHTML = `
    <div class="exam-intro">
      <div class="exam-intro-title">⚡ Allenamento rapido</div>
      <p class="setup-text">Risposta e spiegazione subito dopo ogni domanda. Domande e opzioni sono mescolate.</p>
      <div class="setup-label">Argomenti</div>
      <div class="chip-row" id="quick-tags">
        <button class="chip active" data-v="">Tutti (${BANK.length})</button>
        ${BANK_TAGS.map(t => `<button class="chip" data-v="${esc(t)}">${esc(t)} (${counts[t]})</button>`).join('')}
      </div>
      <div class="setup-label">Quante domande?</div>
      <div class="chip-row" id="quick-len">
        <button class="chip" data-v="10">10</button>
        <button class="chip active" data-v="20">20</button>
        <button class="chip" data-v="40">40</button>
      </div>
      <label class="setup-check"><input type="checkbox" id="quick-unseen" checked>
        <span>Prima le domande che non ho mai visto</span></label>
      <label class="setup-check"><input type="checkbox" id="quick-new">
        <span>Solo le domande aggiunte sugli argomenti scoperti <em>(${BANK.filter(q => q.domain).length})</em></span></label>
      <button class="exam-start-btn" onclick="beginQuick()">Inizia →</button>
    </div>`;
  bindChips('quick-tags', true);
  bindChips('quick-len', false);
}

function bindChips(id, multi) {
  const row = $(id);
  row.querySelectorAll('.chip').forEach(ch => ch.addEventListener('click', () => {
    if (!multi) {
      row.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      ch.classList.add('active');
      return;
    }
    // multi-selezione; "Tutti" (valore vuoto) esclude gli altri
    if (ch.dataset.v === '') {
      row.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === ch));
    } else {
      ch.classList.toggle('active');
      const any = row.querySelectorAll('.chip.active:not([data-v=""])').length > 0;
      row.querySelector('.chip[data-v=""]').classList.toggle('active', !any);
    }
  }));
}

function chipValue(id) {
  const a = $(id).querySelector('.chip.active');
  return a ? a.dataset.v : null;
}

function beginQuick() {
  const tags = [...$('quick-tags').querySelectorAll('.chip.active')].map(c => c.dataset.v).filter(Boolean);
  const len  = Number(chipValue('quick-len')) || 20;
  let pool   = tags.length ? BANK.filter(q => q.tags.some(t => tags.includes(t))) : BANK;
  if ($('quick-new').checked) pool = pool.filter(q => q.domain);
  if (!pool.length) return showToast('Nessuna domanda con questi filtri');
  beginPractice('quick', pickQuestions(pool, len, $('quick-unseen').checked));
}

function beginPractice(mode, questions) {
  practice = {
    mode,
    items: questions.map(prepQuestion),
    idx: 0, ok: 0, ko: 0,
    chosen: [], answered: false,
    requeued: new Set(),
    firstTry: {},   // id -> esito al primo tentativo (per il riepilogo)
  };
  renderPracticeQuestion();
}

function renderPracticeQuestion() {
  const p  = practice;
  const vp = $('practice-viewport');
  if (p.idx >= p.items.length) return finishPractice();

  const view = viewOf(p.items[p.idx]);
  p.chosen = [];
  p.answered = false;
  const multi = view.correct.length > 1;
  const st    = state.qs[view.q.id];

  $('practice-prog').textContent = `${p.idx + 1} / ${p.items.length}`;
  $('practice-progress-fill').style.width = Math.round(p.idx / p.items.length * 100) + '%';

  vp.innerHTML = `
    <div class="exam-q-card">
      <div class="exam-q-num">Domanda ${p.idx + 1} di ${p.items.length}
        ${st && st.ko ? `<span class="q-history">sbagliata ${st.ko} ${st.ko === 1 ? 'volta' : 'volte'}</span>` : ''}</div>
      ${tagsHtml(view.q)}
      ${multi ? `<div class="exam-q-multi">⚠️ Seleziona ${view.correct.length} risposte</div>` : ''}
      <div class="exam-q-text">${esc(view.q.q)}</div>
      <div class="exam-opts" id="practice-opts">${optionsHtml(view, [], 'practiceSelect')}</div>
      <div id="practice-feedback"></div>
      <div class="exam-nav">
        ${multi ? `<button class="exam-btn exam-btn-primary" id="practice-confirm" disabled onclick="practiceConfirm()">Conferma</button>` : ''}
        <button class="exam-btn exam-btn-primary" id="practice-next" style="display:none" onclick="practiceNext()">
          ${p.idx < p.items.length - 1 ? 'Avanti →' : 'Vedi il riepilogo'}</button>
      </div>
    </div>`;
  vp.scrollTop = 0;
}

function practiceSelect(i) {
  const p = practice;
  if (p.answered) return;
  const view = viewOf(p.items[p.idx]);
  if (view.correct.length === 1) {
    p.chosen = [i];
    return practiceConfirm();
  }
  p.chosen = p.chosen.includes(i) ? p.chosen.filter(x => x !== i) : [...p.chosen, i];
  $('practice-opts').querySelectorAll('.exam-opt').forEach((b, k) => b.classList.toggle('selected', p.chosen.includes(k)));
  $('practice-confirm').disabled = p.chosen.length !== view.correct.length;
}

function practiceConfirm() {
  const p = practice;
  if (p.answered) return;
  p.answered = true;
  const item = p.items[p.idx];
  const view = viewOf(item);
  const ok   = sameSet(p.chosen, view.correct);

  markOptions($('practice-opts'), view, p.chosen);
  $('practice-feedback').innerHTML = explainHtml(view, ok);
  const conf = $('practice-confirm');
  if (conf) conf.style.display = 'none';
  $('practice-next').style.display = 'block';

  if (!(item.id in p.firstTry)) {
    p.firstTry[item.id] = ok;
    if (ok) p.ok++; else p.ko++;
  }
  recordAnswer(item.id, ok);
  if (ok) awardXP(XP_PRACTICE, '');

  // Nel ripasso errori la domanda sbagliata torna una volta in fondo, con le opzioni rimescolate
  if (!ok && p.mode === 'errors' && !p.requeued.has(item.id)) {
    p.requeued.add(item.id);
    p.items.push(prepQuestion(view.q));
  }
  saveState();
  $('practice-next').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function practiceNext() {
  practice.idx++;
  renderPracticeQuestion();
}

function finishPractice() {
  const p     = practice;
  const tot   = p.ok + p.ko;
  const pct   = tot ? Math.round(p.ok / tot * 100) : 0;
  const left  = errorIds().length;
  const wrong = Object.keys(p.firstTry).filter(id => !p.firstTry[id]).length;
  const halfway = errorIds().filter(id => (state.qs[id] || {}).st > 0).length;
  $('practice-prog').textContent = '';
  $('practice-progress-fill').style.width = '100%';
  if (pct >= 80 && tot >= 5) confetti();

  $('practice-viewport').innerHTML = `
    <div class="exam-score-card">
      <div class="exam-score-emoji">${pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '💪'}</div>
      <div class="exam-score-num ${pct >= 70 ? 'pass' : 'fail'}">${pct}%</div>
      <div class="exam-score-label">${p.ok} giuste su ${tot} al primo tentativo</div>
    </div>
    <div class="exam-stats">
      <div class="exam-stat"><div class="exam-stat-num" style="color:var(--green)">${p.ok}</div><div class="exam-stat-label">Giuste</div></div>
      <div class="exam-stat"><div class="exam-stat-num" style="color:var(--danger)">${wrong}</div><div class="exam-stat-label">Sbagliate</div></div>
      <div class="exam-stat"><div class="exam-stat-num">${left}</div><div class="exam-stat-label">Errori da ripassare</div></div>
    </div>
    ${p.mode === 'errors' && halfway ? `<p class="setup-text summary-note">✳️ ${halfway} ${halfway === 1 ? 'domanda ha' : 'domande hanno'} già 1 risposta giusta: ancora una giusta di fila e ${halfway === 1 ? 'esce' : 'escono'} dal ripasso.</p>` : ''}
    ${left ? `<button class="exam-review-btn" onclick="startErrorsSetup()">🔁 Ripassa gli errori (${left})</button>` : ''}
    <button class="exam-review-btn" onclick="${p.mode === 'errors' ? 'startErrorsSetup' : 'startQuickSetup'}()">↻ Nuova sessione</button>
    <button class="exam-home-btn" onclick="goHome()">← Torna alla home</button>`;
  practice = null;
}

function goHome() {
  showScreen('home-screen');
  renderHome();
}

function exitPractice() {
  if (practice && practice.idx < practice.items.length && (practice.ok + practice.ko) > 0
      && !confirm('Vuoi interrompere la sessione? Le risposte date restano salvate.')) return;
  practice = null;
  goHome();
}

/* ═══════════════════════════════════════════════════
   SIMULATORE ESAME CLF-C02
═══════════════════════════════════════════════════ */
const EXAM_QUESTIONS = 65;
const EXAM_MINUTES   = 90;
const EXAM_PASS      = 700;

let examTimerID = null;
let examView    = null;   // { idx, grid } stato della UI
let lastExam    = null;   // risultati dell'ultimo esame, per la revisione

function exam() { return state.examSession; }

function startExamIntro() {
  updateStreak();
  const s = exam();
  if (s && Date.now() >= s.deadline) return finishExam(true);
  if (s) return resumeExam();

  const hist = (state.exam?.history || []).slice(-5).reverse();
  const unseen = BANK.filter(q => !state.qs[q.id]).length;
  $('exam-timer').textContent = `${EXAM_MINUTES}:00`;
  $('exam-timer').classList.remove('warning');
  $('exam-progress-fill').style.width = '0%';
  $('exam-viewport').innerHTML = `
    <div class="exam-intro">
      <div class="exam-intro-title">🎯 Simulatore CLF-C02</div>
      <ul class="exam-intro-list">
        <li>📋 <strong>${EXAM_QUESTIONS} domande</strong> dalla banca (${BANK.length} domande uniche)</li>
        <li>🔀 Domande <strong>e risposte</strong> in ordine casuale a ogni esame</li>
        <li>⏱️ <strong>${EXAM_MINUTES} minuti</strong>: il timer continua anche se esci</li>
        <li>🚩 Puoi segnare le domande e rivederle dal riepilogo</li>
        <li>✅ Soglia: <strong>${EXAM_PASS}/1000</strong> (circa 67% di risposte giuste)</li>
        <li>🇬🇧 Domande in inglese, spiegazioni in italiano alla fine</li>
      </ul>
      <label class="setup-check"><input type="checkbox" id="exam-unseen" ${unseen ? 'checked' : ''}>
        <span>Prima le domande che non ho mai visto <em>(${unseen} rimaste)</em></span></label>
      <button class="exam-start-btn" onclick="beginExam()">Inizia il simulatore →</button>
      ${hist.length ? `
        <div class="setup-label">Ultimi esami</div>
        <div class="exam-history">${hist.map(h => `
          <div class="exam-history-row"><span>${h.d}</span><b class="${h.score >= EXAM_PASS ? 'pass' : 'fail'}">${h.score}</b><span>${h.ok}/${h.tot}</span></div>`).join('')}
        </div>` : ''}
    </div>`;
  showScreen('exam-screen');
}

function beginExam() {
  const preferUnseen = $('exam-unseen')?.checked;
  state.examSession = {
    items:    pickQuestions(BANK, EXAM_QUESTIONS, preferUnseen).map(prepQuestion),
    answers:  {},
    flags:    {},
    deadline: Date.now() + EXAM_MINUTES * 60 * 1000,
    idx:      0,
  };
  saveState();
  resumeExam();
}

function resumeExam() {
  examView = { grid: false };
  showScreen('exam-screen');
  renderExamQuestion(exam().idx || 0);
  startExamTimer();
}

function examAnsweredCount() {
  const s = exam();
  return s.items.filter((_, i) => (s.answers[i] || []).length > 0).length;
}

function renderExamQuestion(idx) {
  const s  = exam();
  if (!s) return;
  idx = Math.max(0, Math.min(idx, s.items.length - 1));
  s.idx = idx;
  examView.grid = false;
  saveState();

  const view   = viewOf(s.items[idx]);
  const chosen = s.answers[idx] || [];
  const multi  = view.correct.length > 1;
  const last   = idx === s.items.length - 1;

  $('exam-progress-fill').style.width = Math.round(examAnsweredCount() / s.items.length * 100) + '%';
  $('exam-viewport').innerHTML = `
    <div class="exam-q-card">
      <div class="exam-q-head">
        <div class="exam-q-num">Domanda ${idx + 1} di ${s.items.length}</div>
        <button class="flag-btn ${s.flags[idx] ? 'on' : ''}" onclick="toggleFlag(${idx})">🚩 ${s.flags[idx] ? 'Segnata' : 'Segna'}</button>
      </div>
      ${multi ? `<div class="exam-q-multi">⚠️ Seleziona ${view.correct.length} risposte</div>` : ''}
      <div class="exam-q-text">${esc(view.q.q)}</div>
      <div class="exam-opts" id="exam-opts">${optionsHtml(view, chosen, 'examSelect')}</div>
      <div class="exam-nav">
        ${idx > 0 ? `<button class="exam-btn exam-btn-ghost" onclick="renderExamQuestion(${idx - 1})">← Indietro</button>` : ''}
        <button class="exam-btn exam-btn-primary" onclick="${last ? 'showExamGrid()' : `renderExamQuestion(${idx + 1})`}">${last ? 'Riepilogo' : 'Avanti →'}</button>
      </div>
      <button class="exam-grid-link" onclick="showExamGrid()">▦ Riepilogo · ${examAnsweredCount()}/${s.items.length} risposte</button>
    </div>`;
  $('exam-viewport').scrollTop = 0;
}

function examSelect(i) {
  const s    = exam();
  const idx  = s.idx;
  const need = viewOf(s.items[idx]).correct.length;
  let chosen = s.answers[idx] || [];
  if (need === 1) chosen = [i];
  else if (chosen.includes(i)) chosen = chosen.filter(x => x !== i);
  else if (chosen.length < need) chosen = [...chosen, i];
  else chosen = [...chosen.slice(1), i];   // già al massimo: sostituisce la più vecchia
  s.answers[idx] = chosen;
  saveState();
  $('exam-opts').querySelectorAll('.exam-opt').forEach((b, k) => b.classList.toggle('selected', chosen.includes(k)));
  $('exam-progress-fill').style.width = Math.round(examAnsweredCount() / s.items.length * 100) + '%';
  const link = document.querySelector('.exam-grid-link');
  if (link) link.textContent = `▦ Riepilogo · ${examAnsweredCount()}/${s.items.length} risposte`;
}

function toggleFlag(idx) {
  const s = exam();
  if (s.flags[idx]) delete s.flags[idx]; else s.flags[idx] = true;
  saveState();
  if (examView.grid) showExamGrid(); else renderExamQuestion(idx);
}

function showExamGrid() {
  const s = exam();
  examView.grid = true;
  const answered = examAnsweredCount();
  const flagged  = Object.keys(s.flags).length;
  const missing  = s.items.length - answered;
  $('exam-viewport').innerHTML = `
    <div class="exam-q-card">
      <div class="exam-intro-title">▦ Riepilogo</div>
      <div class="grid-legend">
        <span><i class="dot ans"></i>Risposte ${answered}</span>
        <span><i class="dot"></i>Senza risposta ${missing}</span>
        <span><i class="dot flag"></i>Segnate ${flagged}</span>
      </div>
      <div class="exam-grid">
        ${s.items.map((_, i) => {
          const cls = ((s.answers[i] || []).length ? 'ans' : '') + (s.flags[i] ? ' flag' : '') + (i === s.idx ? ' cur' : '');
          return `<button class="grid-cell ${cls}" onclick="renderExamQuestion(${i})">${i + 1}</button>`;
        }).join('')}
      </div>
      <div class="exam-nav">
        <button class="exam-btn exam-btn-ghost" onclick="renderExamQuestion(${s.idx})">← Torna alla domanda</button>
        <button class="exam-btn exam-btn-primary" onclick="confirmFinishExam()">Termina esame</button>
      </div>
    </div>`;
  $('exam-viewport').scrollTop = 0;
}

function confirmFinishExam() {
  const s       = exam();
  const missing = s.items.length - examAnsweredCount();
  const flagged = Object.keys(s.flags).length;
  const notes   = [];
  if (missing) notes.push(`${missing} ${missing === 1 ? 'domanda è' : 'domande sono'} senza risposta`);
  if (flagged) notes.push(`${flagged} ${flagged === 1 ? 'domanda è segnata' : 'domande sono segnate'}`);
  if (notes.length && !confirm(`Attenzione: ${notes.join(' e ')}. Terminare l'esame?`)) return;
  if (!notes.length && !confirm('Terminare l\'esame e vedere il punteggio?')) return;
  finishExam(false);
}

function startExamTimer() {
  clearInterval(examTimerID);
  updateTimerDisplay();
  examTimerID = setInterval(updateTimerDisplay, 1000);
}

// Il tempo si calcola dalla scadenza: resta corretto anche se la scheda va in background
function updateTimerDisplay() {
  const s  = exam();
  const el = $('exam-timer');
  if (!s) return clearInterval(examTimerID);
  const left = Math.max(0, Math.ceil((s.deadline - Date.now()) / 1000));
  if (el) {
    el.textContent = `${String(Math.floor(left / 60)).padStart(2, '0')}:${String(left % 60).padStart(2, '0')}`;
    el.classList.toggle('warning', left <= 300);
  }
  if (left <= 0) finishExam(true);
}

function confirmExitExam() {
  if (!exam()) return goHome();
  if (!confirm('Uscire dall\'esame? Le risposte restano salvate e puoi riprenderlo dalla home, ma il timer continua a scorrere.')) return;
  clearInterval(examTimerID);
  goHome();
}

function calcScore(correct, total) {
  return Math.round(100 + (correct / total) * 900);
}

function finishExam(timeUp = false) {
  clearInterval(examTimerID);
  const s = exam();
  if (!s) return goHome();

  let correct = 0, skipped = 0;
  const results = s.items.map((item, i) => {
    const view   = viewOf(item);
    const chosen = s.answers[i] || [];
    const ok     = chosen.length > 0 && sameSet(chosen, view.correct);
    if (!chosen.length) skipped++;
    else recordAnswer(item.id, ok);
    if (ok) correct++;
    return { view, chosen, ok, flagged: !!s.flags[i] };
  });

  const total  = s.items.length;
  const wrong  = total - correct - skipped;
  const score  = calcScore(correct, total);
  const passed = score >= EXAM_PASS;
  const pct    = Math.round((score - 100) / 900 * 100);

  state.exam = state.exam || {};
  state.exam.lastScore = score;
  state.exam.lastDate  = new Date().toISOString().slice(0, 10);
  state.exam.bestScore = Math.max(score, state.exam.bestScore || 0);
  state.exam.history   = [...(state.exam.history || []), { d: state.exam.lastDate, score, ok: correct, tot: total }].slice(-30);
  state.examSession    = null;
  saveState();
  lastExam = results;
  if (passed) confetti();

  const newErrors = wrong;
  $('exam-results-body').innerHTML = `
    <div class="exam-score-card">
      <div class="exam-score-emoji">${passed ? '🏆' : '💪'}</div>
      <div class="exam-score-num ${passed ? 'pass' : 'fail'}">${score}</div>
      <div class="exam-score-label">${passed ? '✅ SUPERATO' : '❌ Non superato'} · soglia ${EXAM_PASS}/1000</div>
      <div class="exam-score-bar">
        <div class="exam-score-fill ${passed ? 'pass' : 'fail'}" style="width:0%" id="score-fill-anim"></div>
      </div>
      <div class="exam-threshold">${EXAM_PASS} ──────────────── 1000</div>
      ${timeUp ? '<div class="time-up">⏱️ Tempo scaduto</div>' : ''}
    </div>

    <div class="exam-stats">
      <div class="exam-stat"><div class="exam-stat-num" style="color:var(--green)">${correct}</div><div class="exam-stat-label">Corrette</div></div>
      <div class="exam-stat"><div class="exam-stat-num" style="color:var(--danger)">${wrong}</div><div class="exam-stat-label">Sbagliate</div></div>
      <div class="exam-stat"><div class="exam-stat-num" style="color:var(--muted)">${skipped}</div><div class="exam-stat-label">Saltate</div></div>
    </div>

    ${newErrors ? `<button class="exam-review-btn" onclick="startErrorsSetup()">🔁 Ripassa gli errori (${errorIds().length})</button>` : ''}
    <div class="chip-row review-filter" id="review-filter">
      <button class="chip active" data-v="wrong">Sbagliate e saltate (${wrong + skipped})</button>
      <button class="chip" data-v="flag">Segnate (${results.filter(r => r.flagged).length})</button>
      <button class="chip" data-v="all">Tutte (${total})</button>
    </div>
    <div id="exam-review-list" class="exam-review-list"></div>
    <button class="exam-home-btn" onclick="goHome()">← Torna alla home</button>
  `;
  bindChips('review-filter', false);
  $('review-filter').querySelectorAll('.chip').forEach(ch => ch.addEventListener('click', () => renderExamReview(ch.dataset.v)));
  renderExamReview('wrong');
  showScreen('exam-results-screen');
  $('exam-results-body').scrollTop = 0;
  setTimeout(() => { const bar = $('score-fill-anim'); if (bar) bar.style.width = pct + '%'; }, 100);
}

function renderExamReview(filter) {
  const list = $('exam-review-list');
  if (!list || !lastExam) return;
  const rows = lastExam
    .map((r, i) => ({ ...r, n: i + 1 }))
    .filter(r => filter === 'all' || (filter === 'flag' ? r.flagged : !r.ok));
  if (!rows.length) {
    list.innerHTML = `<div class="review-empty">${filter === 'flag' ? 'Nessuna domanda segnata.' : 'Nessun errore: ottimo lavoro! 🎉'}</div>`;
    return;
  }
  list.innerHTML = rows.map(r => {
    const opts = r.view.opts.map((opt, i) => {
      const cls = r.view.correct.includes(i) ? 'rev-correct' : r.chosen.includes(i) ? 'rev-wrong' : 'rev-dimmed';
      return `<div class="exam-opt ${cls}"><span class="opt-letter">${LETTERS[i]}</span><span>${esc(opt)}</span></div>`;
    }).join('');
    const status = r.ok ? '✅' : r.chosen.length ? '❌' : '⏭️';
    return `
      <div class="exam-q-card">
        <div class="exam-q-num">${status} Domanda ${r.n}${r.flagged ? ' · 🚩' : ''}</div>
        ${tagsHtml(r.view.q)}
        <div class="exam-q-text">${esc(r.view.q.q)}</div>
        <div class="exam-opts">${opts}</div>
        ${r.view.q.explain ? `<div class="review-explain">💡 ${esc(r.view.q.explain)}</div>` : ''}
      </div>`;
  }).join('');
}
