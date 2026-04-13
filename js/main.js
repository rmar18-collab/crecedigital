/* ── creceDigital · main.js ── */

function switchTab(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  const tabMap = ['manifiesto','miedo','porque','plataformas','ecosistema','membresia','gobernanza','hoja'];
  document.querySelectorAll('.nav-tab').forEach((t, i) => {
    t.classList.toggle('active', tabMap[i] === name);
  });
  document.getElementById('mainNav').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Highlight active nav tab on load ── */
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) switchTab(hash);
});
