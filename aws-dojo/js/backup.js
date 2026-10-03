'use strict';

/* ═══════════════════════════════════════════════════
   BACKUP: esporta / importa i progressi in un file JSON
═══════════════════════════════════════════════════ */
const BACKUP_APP     = 'aws-dojo';
const BACKUP_VERSION = 1;

function renderBackupInfo() {
  const el = $('backup-info');
  if (!el) return;
  if (!state.lastBackup) {
    el.textContent = 'Nessun backup ancora. I progressi sono salvati solo in questo browser.';
    return;
  }
  const days = Math.floor((Date.now() - state.lastBackup) / 864e5);
  const when = new Date(state.lastBackup).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
  el.textContent = `Ultimo backup: ${when}` + (days >= 7 ? ` · sono passati ${days} giorni, conviene farne uno nuovo` : '');
  el.classList.toggle('stale', days >= 7);
}

function exportProgress() {
  state.lastBackup = Date.now();
  saveState();
  const payload = {
    app: BACKUP_APP,
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    state,
  };
  const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `aws-dojo-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  renderBackupInfo();
  showToast('💾 Backup scaricato');
}

function importProgress() {
  $('backup-file').value = '';
  $('backup-file').click();
}

function onBackupFile(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    let data;
    try { data = JSON.parse(reader.result); } catch { data = null; }
    if (!data || data.app !== BACKUP_APP || typeof data.state !== 'object' || data.state === null
        || typeof data.state.xp !== 'number') {
      alert('Questo file non è un backup valido di AWS Dojo.');
      return;
    }
    const s     = data.state;
    const seen  = Object.keys(s.qs || {}).length;
    const errs  = Object.keys(s.err || {}).length;
    const date  = data.exportedAt ? new Date(data.exportedAt).toLocaleDateString('it-IT') : 'data sconosciuta';
    const msg   = `Backup del ${date}: ${s.xp} XP, ${seen} domande viste, ${errs} errori da ripassare.\n\n`
                + 'I progressi attuali di questo browser verranno sostituiti. Continuare?';
    if (!confirm(msg)) return;

    clearInterval(examTimerID);
    state = Object.assign(defaultState(), s);
    saveState();
    renderHome();
    showToast('✅ Progressi importati');
  };
  reader.onerror = () => alert('Impossibile leggere il file.');
  reader.readAsText(file);
}
