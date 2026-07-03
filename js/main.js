// ============ Shared ambient effects ============

function createStars(count = 60) {
  const el = document.getElementById('stars');
  if (!el) return;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.4 + 1;
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.top = Math.random() * 100 + 'vh';
    s.style.left = Math.random() * 100 + 'vw';
    s.style.animationDuration = (Math.random() * 3 + 2) + 's';
    s.style.animationDelay = (Math.random() * 4) + 's';
    el.appendChild(s);
  }
}

function spawnHeart() {
  const el = document.getElementById('hearts');
  if (!el) return;
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = Math.random() > 0.5 ? '♥' : '❤';
  h.style.left = Math.random() * 100 + 'vw';
  h.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
  h.style.fontSize = (Math.random() * 14 + 12) + 'px';
  h.style.animationDuration = (Math.random() * 5 + 7) + 's';
  el.appendChild(h);
  setTimeout(() => h.remove(), 13000);
}

function startHearts() {
  spawnHeart();
  setInterval(spawnHeart, 1400);
}

function highlightNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.journal-nav a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('current');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createStars(70);
  startHearts();
  highlightNav();
});
