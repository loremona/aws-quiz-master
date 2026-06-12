'use strict';

/* ═══════════════════════════════════════════════════
   STATO PERSISTENTE
═══════════════════════════════════════════════════ */
const STORE_KEY = 'aws-dojo-v1';

const defaultState = () => ({
  xp: 0, streak: 0, lastDay: null,
  modules: {},  // id -> { card: N, done: bool, quizOk: N, quizTot: N }
  seen: {},     // "modId:cardIdx" -> true
  wrong: {},    // "modId:cardIdx" -> true
});

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return defaultState();
    return Object.assign(defaultState(), JSON.parse(raw));
  } catch { return defaultState(); }
}

function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch {}
}

let state = loadState();

/* ═══════════════════════════════════════════════════
   LIVELLI
═══════════════════════════════════════════════════ */
const LEVELS = [
  { xp: 0,    emoji: '☁️',  name: 'Cloud Curious' },
  { xp: 100,  emoji: '🌤️',  name: 'AWS Rookie' },
  { xp: 250,  emoji: '⛅',  name: 'Solutions Finder' },
  { xp: 500,  emoji: '🌩️',  name: 'Cloud Architect' },
  { xp: 800,  emoji: '🚀',  name: 'Senior Engineer' },
  { xp: 1200, emoji: '🏗️',  name: 'Solutions Architect' },
  { xp: 1700, emoji: '🔱',  name: 'AWS Hero' },
  { xp: 2300, emoji: '👑',  name: 'Cloud Master' },
  { xp: 3000, emoji: '🌟',  name: 'CLF-C02 Champion' },
];

function currentLevel(xp) {
  let lv = LEVELS[0];
  for (const l of LEVELS) { if (xp >= l.xp) lv = l; else break; }
  return lv;
}

function nextLevel(xp) {
  return LEVELS.find(l => l.xp > xp) || null;
}

/* ═══════════════════════════════════════════════════
   XP
═══════════════════════════════════════════════════ */
const XP_LESSON = 5;
const XP_QUIZ   = 25;
const XP_MODULE = 100;

function awardXP(amount, label) {
  const oldLv = currentLevel(state.xp);
  state.xp += amount;
  const newLv = currentLevel(state.xp);
  saveState();
  showToast(`+${amount} XP${label ? ' · ' + label : ''}`);
  updateHomeXP();
  if (newLv.xp > oldLv.xp) setTimeout(() => showLevelUp(newLv), 600);
}

/* ═══════════════════════════════════════════════════
   STREAK
═══════════════════════════════════════════════════ */
function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastDay === today) return;
  const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  state.streak = (state.lastDay === yesterday) ? state.streak + 1 : 1;
  state.lastDay = today;
  saveState();
}

/* ═══════════════════════════════════════════════════
   BUILD FEED
═══════════════════════════════════════════════════ */
function buildModuleCards(mod) {
  const bankCards = (typeof QUIZ_BANK !== 'undefined' ? QUIZ_BANK : [])
    .filter(q => q.tags.some(t => mod.tags.includes(t)))
    .slice(0, 25)
    .map(q => ({ type: 'quiz_bank', ...q }));
  return [...mod.cards, ...bankCards];
}

/* ═══════════════════════════════════════════════════
   DOM HELPERS
═══════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

/* ═══════════════════════════════════════════════════
   HOME
═══════════════════════════════════════════════════ */
function renderHome() {
  updateHomeXP();
  const grid = $('modules-grid');
  grid.innerHTML = '';

  MODULES.forEach(mod => {
    const ms    = state.modules[mod.id] || {};
    const cards = buildModuleCards(mod);
    const total = cards.length;
    const done  = ms.card || 0;
    const pct   = total > 0 ? Math.min(100, Math.round((done / total) * 100)) : 0;
    const isNew = total > 0;
    const isDone = ms.done || false;

    const el = document.createElement('div');
    el.className = 'module-card' + (!isNew ? ' locked' : '') + (isDone ? ' done' : '');
    el.innerHTML = `
      ${!isNew ? '<span class="lock-icon">🔒</span>' : ''}
      <div>
        <div class="module-icon">${mod.icon}</div>
        <div class="module-title">${mod.title}</div>
      </div>
      <div>
        <div class="module-meta">${isNew ? (isDone ? '✅ Completato' : (done > 0 ? `${done}/${total} card` : `${total} card`)) : 'In arrivo'}</div>
        ${isNew ? `<div class="module-progress"><div class="module-progress-fill" style="width:${pct}%"></div></div>` : ''}
      </div>
    `;
    if (isNew) el.addEventListener('click', () => openModule(mod));
    grid.appendChild(el);
  });
}

function updateHomeXP() {
  const lv   = currentLevel(state.xp);
  const next = nextLevel(state.xp);
  const pct  = next
    ? Math.min(100, Math.round(((state.xp - lv.xp) / (next.xp - lv.xp)) * 100))
    : 100;

  const el = $('level-emoji');
  if (el) el.textContent = lv.emoji;
  const ln = $('level-name');
  if (ln) ln.textContent = lv.name;
  const lx = $('level-xp');
  if (lx) lx.textContent = next ? `${state.xp} / ${next.xp} XP` : `${state.xp} XP — MAX`;
  const xf = $('xp-fill');
  if (xf) xf.style.width = pct + '%';
  const sb = $('streak-badge');
  if (sb) sb.textContent = `🔥 ${state.streak} giorni`;
}

/* ═══════════════════════════════════════════════════
   FEED
═══════════════════════════════════════════════════ */
let currentMod   = null;
let currentCards = [];
let currentIdx   = 0;

function openModule(mod) {
  updateStreak();
  currentMod   = mod;
  currentCards = buildModuleCards(mod);
  currentIdx   = state.modules[mod.id]?.card || 0;
  if (currentIdx >= currentCards.length) currentIdx = 0;

  $('feed-title').textContent = mod.icon + ' ' + mod.title;
  showScreen('feed-screen');
  renderFeed();
}

function renderFeed() {
  const viewport = $('feed-viewport');
  viewport.innerHTML = '';

  if (currentCards.length === 0) {
    viewport.innerHTML = `
      <div class="feed-empty">
        <div class="feed-empty-emoji">🔒</div>
        <div class="feed-empty-title">In arrivo</div>
        <div class="feed-empty-text">Le lezioni per questo modulo<br>saranno disponibili presto.</div>
      </div>`;
    $('feed-prog').textContent = '';
    $('feed-progress-fill').style.width = '0%';
    return;
  }

  currentCards.forEach((card, idx) => {
    const el = buildCard(card, idx);
    viewport.appendChild(el);
  });

  // completion card
  const endCard = document.createElement('div');
  endCard.className = 'card card-complete';
  endCard.innerHTML = `
    <div class="complete-emoji">🏆</div>
    <div class="complete-title">Modulo completato!</div>
    <div class="complete-sub">${currentMod.title}</div>
    <div class="complete-xp">+${XP_MODULE} XP bonus</div>
    <button class="card-next-btn" onclick="finishModule()">← Torna ai moduli</button>
  `;
  viewport.appendChild(endCard);

  updateFeedProgress();

  // scroll to current position
  if (currentIdx > 0) {
    const cards = viewport.querySelectorAll('.card');
    if (cards[currentIdx]) {
      requestAnimationFrame(() => cards[currentIdx].scrollIntoView({ behavior: 'instant' }));
    }
  }

  // track scroll position
  viewport.addEventListener('scroll', onFeedScroll, { passive: true });
}

function onFeedScroll() {
  const viewport = $('feed-viewport');
  const cards    = viewport.querySelectorAll('.card');
  const scrollTop = viewport.scrollTop;
  const vpH = viewport.clientHeight;
  let idx = Math.round(scrollTop / vpH);
  idx = Math.max(0, Math.min(idx, currentCards.length - 1));

  if (idx !== currentIdx) {
    currentIdx = idx;
    onCardEnter(idx);
  }
  updateFeedProgress();
}

function onCardEnter(idx) {
  if (idx >= currentCards.length) return;
  const card  = currentCards[idx];
  const key   = currentMod.id + ':' + idx;
  const ms    = state.modules[currentMod.id] || { card: 0, done: false, quizOk: 0, quizTot: 0 };

  if (card.type === 'lesson' || card.type === 'fact') {
    if (!state.seen[key]) {
      state.seen[key] = true;
      awardXP(XP_LESSON, '');
    }
  }

  ms.card = Math.max(ms.card || 0, idx + 1);
  state.modules[currentMod.id] = ms;
  saveState();
}

function updateFeedProgress() {
  const total = currentCards.length;
  const prog  = $('feed-prog');
  const fill  = $('feed-progress-fill');
  if (!total) return;
  const pct = Math.min(100, Math.round(((currentIdx + 1) / total) * 100));
  if (prog) prog.textContent = `${currentIdx + 1} / ${total}`;
  if (fill) fill.style.width = pct + '%';
}

function finishModule() {
  const ms = state.modules[currentMod.id] || { card: 0, done: false, quizOk: 0, quizTot: 0 };
  if (!ms.done) {
    ms.done = true;
    state.modules[currentMod.id] = ms;
    awardXP(XP_MODULE, 'Modulo completato!');
    saveState();
    confetti();
  }
  showScreen('home-screen');
  renderHome();
}

/* ═══════════════════════════════════════════════════
   CARD BUILDERS
═══════════════════════════════════════════════════ */
function buildCard(card, idx) {
  switch (card.type) {
    case 'lesson':   return buildLessonCard(card, idx);
    case 'fact':     return buildFactCard(card, idx);
    case 'quiz':     return buildQuizCard(card, idx, false);
    case 'quiz_bank':return buildQuizCard(card, idx, true);
    default:         return buildLessonCard(card, idx);
  }
}

function buildLessonCard(card, idx) {
  const el = document.createElement('div');
  el.className = 'card card-lesson';
  el.dataset.idx = idx;
  el.innerHTML = `
    <div class="card-badge">📖 Lezione</div>
    <div class="card-emoji">${card.emoji || '📌'}</div>
    <div class="card-title">${card.title || ''}</div>
    <div class="card-text">${card.text || ''}</div>
    ${card.analogy ? `<div class="card-analogy">${card.analogy}</div>` : ''}
    <button class="card-next-btn" onclick="scrollNext(${idx})">Avanti →</button>
  `;
  return el;
}

function buildFactCard(card, idx) {
  const el = document.createElement('div');
  el.className = 'card card-fact';
  el.dataset.idx = idx;
  el.innerHTML = `
    <div class="card-badge">⚡ Fun Fact</div>
    <div class="card-emoji">${card.emoji || '💡'}</div>
    <div class="card-title">${card.title || ''}</div>
    <div class="card-text">${card.text || ''}</div>
    <button class="card-next-btn" onclick="scrollNext(${idx})">Avanti →</button>
  `;
  return el;
}

function buildQuizCard(card, idx, fromBank) {
  const el = document.createElement('div');
  el.className = 'card card-quiz';
  el.dataset.idx = idx;

  const opts = card.opts || card.options || [];
  const optHtml = opts.map((opt, i) => {
    const text = typeof opt === 'string' ? opt : opt.text;
    return `<button class="quiz-opt" data-i="${i}" onclick="answerQuiz(this, ${idx}, ${i})">${text}</button>`;
  }).join('');

  const badge = fromBank ? '🌍 Quiz Esame (EN)' : '🧠 Quiz';

  el.innerHTML = `
    <div class="card-badge">${badge}</div>
    <div class="quiz-question">${card.q || card.question || ''}</div>
    <div class="quiz-opts">${optHtml}</div>
    <div class="quiz-feedback" id="qfb-${idx}">
      <div class="quiz-feedback-title"></div>
      <div class="quiz-feedback-body"></div>
    </div>
    <button class="card-next-btn" id="qnext-${idx}" style="display:none" onclick="scrollNext(${idx})">Avanti →</button>
  `;
  return el;
}

function answerQuiz(btn, cardIdx, chosen) {
  const card   = currentCards[cardIdx];
  const opts   = btn.closest('.quiz-opts').querySelectorAll('.quiz-opt');
  const fb     = $(`qfb-${cardIdx}`);
  const nextBtn= $(`qnext-${cardIdx}`);
  if (!fb || btn.disabled) return;

  // disable all
  opts.forEach(o => { o.disabled = true; });

  // determine correct
  let correctIdx;
  if (Array.isArray(card.correct) && card.correct.length > 0) {
    correctIdx = card.correct[0];
  } else if (typeof card.a === 'number') {
    correctIdx = card.a;
  } else {
    correctIdx = 0;
  }

  const isOk = chosen === correctIdx;
  const key  = currentMod.id + ':' + cardIdx;

  // style options
  opts.forEach((o, i) => {
    if (i === correctIdx) o.classList.add('correct');
    else if (i === chosen && !isOk) o.classList.add('wrong');
    else o.classList.add('dimmed');
  });

  // feedback
  fb.classList.add('show', isOk ? 'ok' : 'ko');
  fb.querySelector('.quiz-feedback-title').textContent = isOk ? '✅ Corretto!' : '❌ Sbagliato';
  fb.querySelector('.quiz-feedback-body').textContent  = card.explain || '';

  if (isOk) {
    if (!state.seen[key + ':quiz']) {
      state.seen[key + ':quiz'] = true;
      awardXP(XP_QUIZ, '');
    }
    const ms = state.modules[currentMod.id] || { card: 0, done: false, quizOk: 0, quizTot: 0 };
    ms.quizOk  = (ms.quizOk  || 0) + 1;
    ms.quizTot = (ms.quizTot || 0) + 1;
    state.modules[currentMod.id] = ms;
  } else {
    state.wrong[key] = true;
    const ms = state.modules[currentMod.id] || { card: 0, done: false, quizOk: 0, quizTot: 0 };
    ms.quizTot = (ms.quizTot || 0) + 1;
    state.modules[currentMod.id] = ms;
  }
  saveState();

  if (nextBtn) nextBtn.style.display = 'block';
}

function scrollNext(idx) {
  const viewport = $('feed-viewport');
  const cards    = viewport.querySelectorAll('.card');
  const next     = cards[idx + 1];
  if (next) next.scrollIntoView({ behavior: 'smooth' });
}

/* ═══════════════════════════════════════════════════
   TOAST
═══════════════════════════════════════════════════ */
let toastTimer = null;
function showToast(msg) {
  const el = $('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

/* ═══════════════════════════════════════════════════
   LEVEL-UP OVERLAY
═══════════════════════════════════════════════════ */
function showLevelUp(lv) {
  const ov = $('levelup-overlay');
  if (!ov) return;
  ov.querySelector('.levelup-emoji').textContent = lv.emoji;
  ov.querySelector('.levelup-title').textContent = 'Nuovo livello!';
  ov.querySelector('.levelup-name').textContent  = lv.name;
  ov.classList.add('show');
  confetti();
}

function closeLevelUp() {
  const ov = $('levelup-overlay');
  if (ov) ov.classList.remove('show');
}

/* ═══════════════════════════════════════════════════
   CONFETTI
═══════════════════════════════════════════════════ */
function confetti() {
  const canvas = $('confetti-canvas');
  if (!canvas) return;
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#ff9900','#f0c040','#ff4d6d','#22c55e','#60a5fa','#a78bfa'];
  const pieces = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.width,
    y: -10 - Math.random() * 200,
    w: 7 + Math.random() * 8,
    h: 4 + Math.random() * 6,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * Math.PI * 2,
    vx: (Math.random() - 0.5) * 4,
    vy: 3 + Math.random() * 5,
    vr: (Math.random() - 0.5) * 0.2,
  }));

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    pieces.forEach(p => {
      p.x  += p.vx;
      p.y  += p.vy;
      p.rot += p.vr;
      p.vy  += 0.12;
      if (p.y < canvas.height + 20) alive = true;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (alive && frame++ < 200) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

/* ═══════════════════════════════════════════════════
   SIMULATORE ESAME CLF-C02
═══════════════════════════════════════════════════ */
const EXAM_QUESTIONS = 65;
const EXAM_MINUTES   = 90;
const EXAM_PASS      = 700;

let examQuestions = [];
let examAnswers   = {};   // idx -> chosen index or array
let examTimerID   = null;
let examSecondsLeft = 0;
let examStartTime = null;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startExamIntro() {
  const vp = $('exam-viewport');
  vp.innerHTML = '';
  examAnswers = {};

  const intro = document.createElement('div');
  intro.className = 'exam-intro';
  intro.innerHTML = `
    <div class="exam-intro-title">🎯 Simulatore CLF-C02</div>
    <ul class="exam-intro-list">
      <li>📋 <strong>${EXAM_QUESTIONS} domande</strong> random dalla banca esame</li>
      <li>⏱️ <strong>${EXAM_MINUTES} minuti</strong> di tempo</li>
      <li>🎯 Punteggio in scala <strong>100–1000</strong></li>
      <li>✅ Soglia di superamento: <strong>${EXAM_PASS}/1000</strong> (~67% correct)</li>
      <li>🇬🇧 Domande in inglese come il vero esame</li>
      <li>⚠️ Non uscire: il timer continua in background</li>
    </ul>
    <button class="exam-start-btn" onclick="beginExam()">Inizia il simulatore →</button>
  `;
  vp.appendChild(intro);
  showScreen('exam-screen');
}

function beginExam() {
  const bank = typeof QUIZ_BANK !== 'undefined' ? QUIZ_BANK : [];
  examQuestions = shuffle(bank).slice(0, EXAM_QUESTIONS);
  examAnswers   = {};
  examSecondsLeft = EXAM_MINUTES * 60;
  examStartTime = Date.now();

  renderExamQuestion(0);
  startExamTimer();
}

function renderExamQuestion(idx) {
  const vp = $('exam-viewport');
  vp.innerHTML = '';

  const fill = $('exam-progress-fill');
  if (fill) fill.style.width = Math.round((idx / EXAM_QUESTIONS) * 100) + '%';

  if (idx >= examQuestions.length) {
    finishExam();
    return;
  }

  const q    = examQuestions[idx];
  const opts = q.opts || [];
  const isMulti = q.multi && (q.correct || []).length > 1;
  const chosen  = examAnswers[idx];

  const optsHtml = opts.map((opt, i) => {
    const sel = isMulti
      ? (Array.isArray(chosen) && chosen.includes(i) ? 'selected' : '')
      : (chosen === i ? 'selected' : '');
    return `<button class="exam-opt ${sel}" data-i="${i}" onclick="examSelectOpt(this,${idx},${i},${isMulti})">${opt}</button>`;
  }).join('');

  const card = document.createElement('div');
  card.className = 'exam-q-card';
  card.innerHTML = `
    <div class="exam-q-num">Domanda ${idx + 1} di ${EXAM_QUESTIONS}</div>
    ${isMulti ? `<div class="exam-q-multi">⚠️ Seleziona ${(q.correct||[]).length} risposte</div>` : ''}
    <div class="exam-q-text">${q.q}</div>
    <div class="exam-opts">${optsHtml}</div>
    <div class="exam-nav">
      ${idx > 0 ? `<button class="exam-btn exam-btn-ghost" onclick="renderExamQuestion(${idx-1})">← Indietro</button>` : ''}
      <button class="exam-btn exam-btn-primary" onclick="examNext(${idx})">${idx < EXAM_QUESTIONS - 1 ? 'Avanti →' : 'Termina esame'}</button>
    </div>
  `;
  vp.appendChild(card);
  vp.scrollTop = 0;
}

function examSelectOpt(btn, qIdx, optIdx, isMulti) {
  const container = btn.closest('.exam-opts');
  if (isMulti) {
    let chosen = Array.isArray(examAnswers[qIdx]) ? [...examAnswers[qIdx]] : [];
    if (chosen.includes(optIdx)) {
      chosen = chosen.filter(i => i !== optIdx);
    } else {
      chosen.push(optIdx);
    }
    examAnswers[qIdx] = chosen;
    container.querySelectorAll('.exam-opt').forEach((b, i) => {
      b.classList.toggle('selected', chosen.includes(i));
    });
  } else {
    examAnswers[qIdx] = optIdx;
    container.querySelectorAll('.exam-opt').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  }
}

function examNext(idx) {
  renderExamQuestion(idx + 1);
}

function startExamTimer() {
  clearInterval(examTimerID);
  updateTimerDisplay();
  examTimerID = setInterval(() => {
    examSecondsLeft--;
    updateTimerDisplay();
    if (examSecondsLeft <= 0) {
      clearInterval(examTimerID);
      finishExam(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = $('exam-timer');
  if (!el) return;
  const m = Math.floor(examSecondsLeft / 60);
  const s = examSecondsLeft % 60;
  el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  el.classList.toggle('warning', examSecondsLeft <= 300);
}

function confirmExitExam() {
  if (examTimerID && confirm('Vuoi uscire? Il progresso dell\'esame andrà perso.')) {
    clearInterval(examTimerID);
    examTimerID = null;
    showScreen('home-screen');
    renderHome();
  } else if (!examTimerID) {
    showScreen('home-screen');
    renderHome();
  }
}

function calcScore(correct, total) {
  const raw = correct / total;
  return Math.round(100 + raw * 900);
}

function finishExam(timeUp = false) {
  clearInterval(examTimerID);
  examTimerID = null;

  const fill = $('exam-progress-fill');
  if (fill) fill.style.width = '100%';

  let correct = 0;
  let skipped = 0;

  examQuestions.forEach((q, idx) => {
    const ans = examAnswers[idx];
    const correctArr = Array.isArray(q.correct) ? q.correct : [q.a];
    if (ans === undefined || ans === null || (Array.isArray(ans) && ans.length === 0)) {
      skipped++;
    } else {
      const chosenArr = Array.isArray(ans) ? ans.sort() : [ans];
      const expected  = [...correctArr].sort();
      if (JSON.stringify(chosenArr) === JSON.stringify(expected)) correct++;
    }
  });

  const wrong  = EXAM_QUESTIONS - correct - skipped;
  const score  = calcScore(correct, EXAM_QUESTIONS);
  const passed = score >= EXAM_PASS;
  const pct    = Math.round((score - 100) / 900 * 100);

  if (passed) confetti();

  // Salva in state
  state.exam = state.exam || {};
  state.exam.lastScore = score;
  state.exam.lastDate  = new Date().toISOString().slice(0,10);
  state.exam.bestScore = Math.max(score, state.exam.bestScore || 0);
  saveState();

  // Build results screen
  const body = $('exam-results-body');
  body.innerHTML = `
    <div class="exam-score-card">
      <div class="exam-score-emoji">${passed ? '🏆' : '💪'}</div>
      <div class="exam-score-num ${passed ? 'pass' : 'fail'}">${score}</div>
      <div class="exam-score-label">${passed ? '✅ SUPERATO' : '❌ Non superato'} · soglia ${EXAM_PASS}/1000</div>
      <div class="exam-score-bar">
        <div class="exam-score-fill ${passed ? 'pass' : 'fail'}" style="width:0%" id="score-fill-anim"></div>
      </div>
      <div class="exam-threshold">700 ──────────────────────── 1000</div>
      ${timeUp ? '<div style="color:var(--danger);font-size:0.8rem;margin-top:8px">⏱️ Tempo scaduto</div>' : ''}
    </div>

    <div class="exam-stats">
      <div class="exam-stat">
        <div class="exam-stat-num" style="color:var(--green)">${correct}</div>
        <div class="exam-stat-label">Corrette</div>
      </div>
      <div class="exam-stat">
        <div class="exam-stat-num" style="color:var(--danger)">${wrong}</div>
        <div class="exam-stat-label">Sbagliate</div>
      </div>
      <div class="exam-stat">
        <div class="exam-stat-num" style="color:var(--muted)">${skipped}</div>
        <div class="exam-stat-label">Saltate</div>
      </div>
    </div>

    <button class="exam-review-btn" onclick="showExamReview()">📋 Rivedi le risposte</button>
    <button class="exam-home-btn" onclick="showScreen('home-screen'); renderHome()">← Torna ai moduli</button>
    <div id="exam-review-list" class="exam-review-list"></div>
  `;

  showScreen('exam-results-screen');

  // Animate score bar
  setTimeout(() => {
    const bar = $('score-fill-anim');
    if (bar) bar.style.width = pct + '%';
  }, 100);
}

function showExamReview() {
  const list = $('exam-review-list');
  if (!list || list.children.length > 0) return;

  examQuestions.forEach((q, idx) => {
    const ans        = examAnswers[idx];
    const correctArr = Array.isArray(q.correct) ? q.correct : [q.a];
    const chosenArr  = ans === undefined ? [] : (Array.isArray(ans) ? ans : [ans]);
    const isOk       = JSON.stringify([...chosenArr].sort()) === JSON.stringify([...correctArr].sort());

    const card = document.createElement('div');
    card.className = 'exam-q-card';

    const optsHtml = (q.opts || []).map((opt, i) => {
      let cls = '';
      if (correctArr.includes(i))       cls = 'rev-correct';
      else if (chosenArr.includes(i))   cls = 'rev-wrong';
      else                               cls = 'rev-dimmed';
      return `<div class="exam-opt ${cls}">${opt}</div>`;
    }).join('');

    card.innerHTML = `
      <div class="exam-q-num">${isOk ? '✅' : '❌'} Domanda ${idx + 1}</div>
      <div class="exam-q-text">${q.q}</div>
      <div class="exam-opts">${optsHtml}</div>
    `;
    list.appendChild(card);
  });
}

/* ═══════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  updateStreak();
  renderHome();
  showScreen('home-screen');
});
