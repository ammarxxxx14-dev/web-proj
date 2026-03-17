// ============ PARTICLES ============
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
let mouseX = -1000, mouseY = -1000;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.4 + 0.1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 120) {
      const force = (120 - dist) / 120;
      this.x += (dx / dist) * force * 2;
      this.y += (dy / dist) * force * 2;
    }
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(230, 57, 70, ${this.opacity})`;
    ctx.fill();
  }
}

function initParticles() {
  const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
  particles = [];
  for (let i = 0; i < count; i++) particles.push(new Particle());
}
initParticles();

function drawLines() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(230, 57, 70, ${0.08 * (1 - dist / 150)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  drawLines();
  requestAnimationFrame(animateParticles);
}
animateParticles();

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// ============ SCROLL REVEAL ============
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // If it's a container, stagger the children
      const children = entry.target.querySelectorAll('.reveal');
      children.forEach((child, index) => {
        child.style.transitionDelay = `${index * 0.15}s`;
        child.classList.add('visible');
      });

      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============ NAVBAR SCROLL ============
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// ============ HAMBURGER ============
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('active');
  });
});

// ============ COUNTER ANIMATION (reusable) ============
function animateCounters(selector = '.number[data-target]') {
  document.querySelectorAll(selector).forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// Auto-trigger counters when visible
document.querySelectorAll('.stats-bar, .hero-stats').forEach(section => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  obs.observe(section);
});

// ============ SESSION-AWARE NAVBAR ============
(function () {
  const session = JSON.parse(localStorage.getItem('dealershipSession') || 'null');
  if (!session || !session.loggedIn) return;

  const navLinks = document.getElementById('navLinks');
  if (!navLinks) return;

  navLinks.querySelectorAll('a').forEach(link => {
    if (link.classList.contains('btn-primary')) {
      const initials = (session.firstName[0] + session.lastName[0]).toUpperCase();
      link.href = 'proj2-account.html';
      link.title = `${session.firstName} ${session.lastName}`;
      link.textContent = '';

      const avatar = document.createElement('span');
      Object.assign(avatar.style, {
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: '28px', height: '28px', borderRadius: '50%',
        background: 'linear-gradient(135deg, #e63946, #457b9d)',
        color: '#fff', fontWeight: '700', fontSize: '0.72rem',
        fontFamily: "'Outfit', sans-serif", marginRight: '6px', flexShrink: '0'
      });
      avatar.textContent = initials;

      const name = document.createElement('span');
      name.textContent = session.firstName;

      link.appendChild(avatar);
      link.appendChild(name);
    }
  });
})();

// ============ THEME SYSTEM ============
(function () {
  // Apply saved theme immediately (before paint)
  const savedTheme = localStorage.getItem('dealershipTheme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Sync checkbox state once DOM is ready
  function syncToggle() {
    const checkbox = document.getElementById('themeCheckbox');
    if (checkbox) checkbox.checked = savedTheme === 'light';
    updateThemeLabel(savedTheme);
  }

  function updateThemeLabel(theme) {
    const label = document.getElementById('themeLabel');
    if (label) label.textContent = theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode';
  }

  // Settings dropdown open/close
  window.__settingsToggle = function () {
    const dropdown = document.getElementById('settingsDropdown');
    if (dropdown) dropdown.classList.toggle('open');
  };

  // Theme toggle
  window.__themeToggle = function (checkbox) {
    const theme = checkbox.checked ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dealershipTheme', theme);
    updateThemeLabel(theme);
  };

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    const dropdown = document.getElementById('settingsDropdown');
    const btn = document.getElementById('settingsGearBtn');
    if (dropdown && !dropdown.contains(e.target) && e.target !== btn && !btn?.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncToggle);
  } else {
    syncToggle();
  }
})();


