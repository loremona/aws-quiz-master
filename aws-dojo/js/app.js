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
  qs: {},       // id domanda della banca -> { n, ok, ko, st (giuste di fila), t }
  err: {},      // id domanda della banca -> timestamp dell'ultimo errore (ripasso errori)
  examSession: null,  // esame in corso, per poterlo riprendere
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
    .slice(mod.bankSkip || 0, (mod.bankSkip || 0) + 25)
    .map(q => ({ type: 'quiz_bank', ...q, _p: prepQuestion(q) }));
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
  renderTrainingHome();
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

// Domanda di un modulo o della banca, con le opzioni nell'ordine in cui si mostrano
function cardView(card) {
  if (card.type === 'quiz_bank') return viewOf(card._p);
  return { q: card, opts: card.opts || [], correct: [card.a] };
}

function buildQuizCard(card, idx, fromBank) {
  const el = document.createElement('div');
  el.className = 'card card-quiz';
  el.dataset.idx = idx;

  const view  = cardView(card);
  const multi = view.correct.length > 1;
  const text  = t => fromBank ? esc(t) : t;
  const optHtml = view.opts.map((opt, i) =>
    `<button class="quiz-opt" data-i="${i}" onclick="pickQuizOpt(${idx}, ${i})">${text(opt)}</button>`
  ).join('');

  const badge = fromBank ? '🌍 Quiz Esame (EN)' : '🧠 Quiz';

  el.innerHTML = `
    <div class="card-badge">${badge}</div>
    <div class="quiz-question">${text(card.q || card.question || '')}</div>
    ${multi ? `<div class="exam-q-multi">⚠️ Seleziona ${view.correct.length} risposte</div>` : ''}
    <div class="quiz-opts">${optHtml}</div>
    ${multi ? `<button class="card-next-btn" id="qconfirm-${idx}" disabled onclick="answerQuiz(${idx})">Conferma</button>` : ''}
    <div class="quiz-feedback" id="qfb-${idx}">
      <div class="quiz-feedback-title"></div>
      <div class="quiz-feedback-body"></div>
    </div>
    <button class="card-next-btn" id="qnext-${idx}" style="display:none" onclick="scrollNext(${idx})">Avanti →</button>
  `;
  return el;
}

const quizPicks = {};   // cardIdx -> opzioni selezionate (domande a risposta multipla)

function pickQuizOpt(cardIdx, i) {
  const view = cardView(currentCards[cardIdx]);
  if (view.correct.length === 1) return answerQuiz(cardIdx, [i]);
  let sel = quizPicks[cardIdx] || [];
  sel = sel.includes(i) ? sel.filter(x => x !== i) : [...sel, i];
  quizPicks[cardIdx] = sel;
  const card = document.querySelector(`.card[data-idx="${cardIdx}"]`);
  card.querySelectorAll('.quiz-opt').forEach((o, k) => o.classList.toggle('selected', sel.includes(k)));
  $(`qconfirm-${cardIdx}`).disabled = sel.length !== view.correct.length;
}

function answerQuiz(cardIdx, chosen) {
  const card    = currentCards[cardIdx];
  const view    = cardView(card);
  const el      = document.querySelector(`.card[data-idx="${cardIdx}"]`);
  const opts    = el.querySelectorAll('.quiz-opt');
  const fb      = $(`qfb-${cardIdx}`);
  const nextBtn = $(`qnext-${cardIdx}`);
  if (!fb || fb.classList.contains('show')) return;

  chosen = chosen || quizPicks[cardIdx] || [];
  delete quizPicks[cardIdx];
  const isOk = sameSet(chosen, view.correct);
  const key  = currentMod.id + ':' + cardIdx;

  opts.forEach((o, i) => {
    o.disabled = true;
    o.classList.remove('selected');
    if (view.correct.includes(i)) o.classList.add('correct');
    else if (chosen.includes(i))  o.classList.add('wrong');
    else                          o.classList.add('dimmed');
  });
  const conf = $(`qconfirm-${cardIdx}`);
  if (conf) conf.style.display = 'none';

  const right = view.correct.map(i => LETTERS[i]).join(', ');
  fb.classList.add('show', isOk ? 'ok' : 'ko');
  fb.querySelector('.quiz-feedback-title').textContent = isOk
    ? '✅ Corretto!'
    : (card.type === 'quiz_bank' ? `❌ Sbagliato · risposta giusta: ${right}` : '❌ Sbagliato');
  fb.querySelector('.quiz-feedback-body').textContent  = card.explain || '';

  if (card.type === 'quiz_bank') recordAnswer(card.id, isOk);

  const ms = state.modules[currentMod.id] || { card: 0, done: false, quizOk: 0, quizTot: 0 };
  ms.quizTot = (ms.quizTot || 0) + 1;
  if (isOk) {
    ms.quizOk = (ms.quizOk || 0) + 1;
    if (!state.seen[key + ':quiz']) {
      state.seen[key + ':quiz'] = true;
      awardXP(XP_QUIZ, '');
    }
  } else {
    state.wrong[key] = true;
  }
  state.modules[currentMod.id] = ms;
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
   INIT
═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  updateStreak();
  renderHome();
  showScreen('home-screen');
});
