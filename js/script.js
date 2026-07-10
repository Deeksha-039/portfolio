// scroll progress
const progress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  progress.style.width = (scrollTop / (scrollHeight - clientHeight) * 100) + '%';
});

// nav pill
const navLinks = document.querySelectorAll('.nav-link');
const pill = document.getElementById('navPill');

function movePill(el) {
  pill.style.width = el.offsetWidth + 'px';
  pill.style.transform = `translateX(${el.offsetLeft}px)`;
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById(link.dataset.target).scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('load', () => movePill(document.querySelector('.nav-link.active')));

const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach(l => {
      l.classList.toggle('active', l.dataset.target === id);
      if (l.dataset.target === id) movePill(l);
    });
  });
}, { threshold: 0.4 });
document.querySelectorAll('section').forEach(s => spy.observe(s));

// typewriter
const roles = ['AI Developer', 'Full Stack Dev', 'ML Engineer', 'Problem Solver'];
let rIdx = 0, cIdx = 0, deleting = false;
const tw = document.getElementById('typewriter');

function tick() {
  const full = roles[rIdx];
  if (!deleting) {
    tw.textContent = full.slice(0, ++cIdx);
    if (cIdx === full.length) { deleting = true; setTimeout(tick, 1400); return; }
  } else {
    tw.textContent = full.slice(0, --cIdx);
    if (cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; }
  }
  setTimeout(tick, deleting ? 40 : 75);
}
tick();

// toolkit
const tools = [
  'Python', 'FastAPI', 'Groq API', 'XGBoost',
  'Playwright', 'MySQL', 'Streamlit', 'HuggingFace',
  'Render', 'JWT / Auth'
];
const grid = document.getElementById('toolkitGrid');
tools.forEach(name => {
  const el = document.createElement('div');
  el.className = 'tool-item';
  el.textContent = name;
  grid.appendChild(el);
});

// reveal on scroll
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in');
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
