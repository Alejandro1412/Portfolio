/* ═══════════════════════════════════════════════════
   main.js — Alejandro Polanco Andrade Portfolio
   Antigravity particles · Scroll magic · i18n · 3D
═══════════════════════════════════════════════════ */

// ══ I18N ═══════════════════════════════════════════
const TRANSLATIONS = {
  es: {
    nav_about: "Sobre mí", nav_skills: "Skills",
    nav_experience: "Experiencia", nav_projects: "Proyectos", nav_contact: "Contacto",
    hero_available: "Disponible para proyectos",
    hero_role: "Tech Lead & Ingeniero de Sistemas",
    hero_years: "años",
    hero_cta1: "Ver proyectos", hero_cta2: "Hablemos",
    hero_scroll: "scroll",
    stat_years: "años exp.", stat_projects: "proyectos", stat_industries: "industrias",
    m_banking: "Banca", m_ai: "Inteligencia Artificial", m_mobility: "Movilidad",
    m_construction: "Construcción", m_games: "Videojuegos", m_health: "Salud",
    m_gov: "Gobierno", m_energy: "Energía",
    about_label: "Sobre mí",
    about_title1: "El ingeniero que",
    about_title2: "construye lo imposible.",
    about_p1: 'Soy <strong>Alejandro Polanco Andrade</strong>, Ingeniero de Sistemas Informáticos con más de una década liderando equipos en industrias críticas. Transformo visiones de negocio en arquitecturas técnicas que escalan.',
    about_p2: 'He diseñado sistemas que mueven millones de transacciones, entrenado modelos de IA en producción, y liderado equipos de alto rendimiento distribuidos en múltiples países.',
    about_p3: 'Mi filosofía: el código de calidad es el que sobrevive, y la arquitectura elegante es la que nadie nota porque simplemente <em>funciona</em>.',
    acf_tag: "// Perfil técnico",
    acf_s1: "Años liderando equipos", acf_s2: "Ingenieros mentoreados", acf_s3: "Industrias dominadas",
    pillar1: "Arquitectura", pillar2: "Liderazgo", pillar3: "Innovación", pillar4: "Escalabilidad",
    skills_label: "Arsenal técnico", skills_title: "Stack tecnológico.",
    sk1_name: "Arquitectura de Software", sk2_name: "Cloud & DevOps",
    sk4_name: "Frontend Avanzado", sk5_name: "Backend & APIs", sk6_name: "Datos & Streaming",
    exp_label: "Trayectoria profesional",
    exp_title: "10 años.", exp_title2: "8 industrias.",
    present: "Presente",
    exp1_role: "Tech Lead · Core Banking Platform",
    exp1_desc: 'Lideré migración monolítico → microservicios procesando <strong>+2M transacciones/día</strong>. Arquitectura de pagos tiempo real sub-100ms. Equipo de <strong>18 ingenieros</strong> en 3 países.',
    exp2_role: "Senior Software Architect · AI Products",
    exp2_desc: 'Plataforma MLOps que redujo despliegue de modelos de <strong>3 semanas → 4 horas</strong>. Pipelines de datos para LLMs y visión por computador en manufactura.',
    exp3_role: "Lead Engineer · Fleet Management",
    exp3_desc: 'Sistema tiempo real para <strong>+50,000 vehículos</strong> conectados. Optimización de rutas con <strong>−23% costos operativos</strong> mediante algoritmos ML.',
    exp4_role: "Full Stack Lead · BIM Platform",
    exp4_desc: 'Plataforma BIM colaborativa con WebGL 3D rendering. Integración AutoCAD, Revit, IoT. Adoptada por <strong>3 top-10 constructoras LATAM</strong>.',
    exp5_role: "Backend Architect · Multiplayer",
    exp5_desc: 'Infraestructura para <strong>+200,000 jugadores concurrentes</strong>. Matchmaking inteligente, economía virtual y sistema anti-cheat distribuido.',
    exp6_role: "Software Engineer (múltiples roles)",
    exp6_desc: 'Digitalización ciudadana (+5M usuarios), plataforma clínica HL7 FHIR con telemedicina, y sistemas SCADA para redes eléctricas inteligentes.',
    badge_bank: "🏦 Banca", badge_ai: "🤖 AI", badge_mob: "🚗 Movilidad",
    badge_build: "🏗️ Construcción", badge_game: "🎮 Games",
    badge_gov: "🏛️ Gov", badge_health: "🏥 Salud", badge_energy: "⚡ Energía",
    proj_label: "Proyectos destacados",
    proj_title: "Código que", proj_title2: "mueve el mundo.",
    pf1_badge: "AI · LLM · Enterprise",
    pf1_title: "NeuralCore — Enterprise LLM Platform",
    pf1_desc: "Plataforma propietaria de LLMs empresariales con RAG, fine-tuning automatizado y observabilidad completa. Procesando +50M tokens/día para clientes Fortune 500. Pipeline de evaluación continua con detección de alucinaciones en tiempo real.",
    tokens_day: "tokens/día", uptime: "uptime", latency: "latencia p95",
    pc2_badge: "🚗 Movilidad", pc2_title: "FleetOS — 50K Vehicles",
    pc2_desc: "Sistema de gestión de flotas en tiempo real. Telemetría, GPS, optimización de rutas con ML y alertas predictivas de mantenimiento.",
    pc3_badge: "🏦 Banca", pc3_title: "NeoCore Payment Engine",
    pc3_desc: "Motor de pagos en tiempo real con 2M+ transacciones/día, reconciliación automática y fraud detection con ML.",
    pc4_badge: "🤖 AI / Visión", pc4_title: "VisionGuard QA",
    pc4_desc: "Sistema de visión computacional para control de calidad industrial. Detecta defectos en línea de producción con 99.2% precisión a 30fps.",
    pc5_badge: "🧠 AI / NLP", pc5_title: "MedAssist AI",
    pc5_desc: "Asistente clínico con LLM fine-tuneado en literatura médica. Soporte a diagnósticos, resúmenes de historias clínicas y alertas farmacológicas.",
    pc6_badge: "🎮 Games", pc6_title: "GameServer Infra",
    pc6_desc: "Backend para 200K+ jugadores simultáneos. Matchmaking inteligente con ELO adaptativo y anti-cheat distribuido.",
    pf7_badge: "AI Agents · Autonomy · LLM",
    pf7_title: "AgentOS — Plataforma de Agentes Autónomos",
    pf7_desc: "Framework multi-agente para automatización de workflows empresariales complejos. Orquestación de agentes AI con memoria persistente y guardrails de seguridad. Reducción del 70% en tiempo de procesos operativos.",
    time_saved: "tiempo ahorrado", agent_types: "tipos de agente", tasks_month: "tareas/mes",
    num1: "Años de experiencia", num2: "Proyectos en producción",
    num3: "Transacciones/día gestionadas", num4: "Industrias",
    contact_label: "Contacto",
    contact_title1: "¿Tienes un", contact_title2: "reto difícil?",
    contact_sub: "Desde arquitectura de sistemas hasta liderazgo técnico. Si necesitas a alguien que construya cosas que realmente funcionen a escala, hablemos.",
    footer_rights: "Todos los derechos reservados"
  },
  en: {
    nav_about: "About", nav_skills: "Skills",
    nav_experience: "Experience", nav_projects: "Projects", nav_contact: "Contact",
    hero_available: "Available for projects",
    hero_role: "Tech Lead & Systems Engineer",
    hero_years: "years",
    hero_cta1: "View projects", hero_cta2: "Let's talk",
    hero_scroll: "scroll",
    stat_years: "yrs exp.", stat_projects: "projects", stat_industries: "industries",
    m_banking: "Banking", m_ai: "Artificial Intelligence", m_mobility: "Mobility",
    m_construction: "Construction", m_games: "Video Games", m_health: "Healthcare",
    m_gov: "Government", m_energy: "Energy",
    about_label: "About me",
    about_title1: "The engineer who",
    about_title2: "builds the impossible.",
    about_p1: 'I am <strong>Alejandro Polanco Andrade</strong>, a Systems Engineer with over a decade leading teams in critical industries. I transform business visions into technical architectures that scale.',
    about_p2: 'I have designed systems that move millions of transactions, trained AI models in production, and led high-performance teams distributed across multiple countries.',
    about_p3: 'My philosophy: quality code is the code that survives, and elegant architecture is what nobody notices because it simply <em>works</em>.',
    acf_tag: "// Technical profile",
    acf_s1: "Years leading teams", acf_s2: "Engineers mentored", acf_s3: "Industries mastered",
    pillar1: "Architecture", pillar2: "Leadership", pillar3: "Innovation", pillar4: "Scalability",
    skills_label: "Technical arsenal", skills_title: "Tech stack.",
    sk1_name: "Software Architecture", sk2_name: "Cloud & DevOps",
    sk4_name: "Advanced Frontend", sk5_name: "Backend & APIs", sk6_name: "Data & Streaming",
    exp_label: "Career timeline",
    exp_title: "10 years.", exp_title2: "8 industries.",
    present: "Present",
    exp1_role: "Tech Lead · Core Banking Platform",
    exp1_desc: 'Led monolith → microservices migration processing <strong>+2M transactions/day</strong>. Real-time payment architecture with sub-100ms latency. Team of <strong>18 engineers</strong> across 3 countries.',
    exp2_role: "Senior Software Architect · AI Products",
    exp2_desc: 'MLOps platform that reduced model deployment from <strong>3 weeks → 4 hours</strong>. Data pipelines for LLMs and computer vision for manufacturing.',
    exp3_role: "Lead Engineer · Fleet Management",
    exp3_desc: 'Real-time system for <strong>+50,000 connected vehicles</strong>. Route optimization achieving <strong>−23% operational costs</strong> via ML algorithms.',
    exp4_role: "Full Stack Lead · BIM Platform",
    exp4_desc: 'Collaborative BIM platform with WebGL 3D rendering. AutoCAD, Revit and IoT integration. Adopted by <strong>3 of LATAM\'s top-10 construction firms</strong>.',
    exp5_role: "Backend Architect · Multiplayer",
    exp5_desc: 'Infrastructure for <strong>+200,000 concurrent players</strong>. Intelligent matchmaking, virtual economy and distributed anti-cheat system.',
    exp6_role: "Software Engineer (multiple roles)",
    exp6_desc: 'Citizen services digitization (+5M users), HL7 FHIR clinical platform with telemedicine, and SCADA systems for smart electrical grids.',
    badge_bank: "🏦 Banking", badge_ai: "🤖 AI", badge_mob: "🚗 Mobility",
    badge_build: "🏗️ Construction", badge_game: "🎮 Games",
    badge_gov: "🏛️ Gov", badge_health: "🏥 Health", badge_energy: "⚡ Energy",
    proj_label: "Featured projects",
    proj_title: "Code that", proj_title2: "moves the world.",
    pf1_badge: "AI · LLM · Enterprise",
    pf1_title: "NeuralCore — Enterprise LLM Platform",
    pf1_desc: "Proprietary enterprise LLM platform with RAG, automated fine-tuning and full observability. Processing 50M+ tokens/day for Fortune 500 clients. Continuous evaluation pipeline with real-time hallucination detection.",
    tokens_day: "tokens/day", uptime: "uptime", latency: "p95 latency",
    pc2_badge: "🚗 Mobility", pc2_title: "FleetOS — 50K Vehicles",
    pc2_desc: "Real-time fleet management system. Telemetry, GPS, ML route optimization and predictive maintenance alerts.",
    pc3_badge: "🏦 Banking", pc3_title: "NeoCore Payment Engine",
    pc3_desc: "Real-time payment engine handling 2M+ transactions/day, automatic reconciliation and ML fraud detection.",
    pc4_badge: "🤖 AI / Vision", pc4_title: "VisionGuard QA",
    pc4_desc: "Computer vision system for industrial quality control. Detects production line defects with 99.2% accuracy at 30fps.",
    pc5_badge: "🧠 AI / NLP", pc5_title: "MedAssist AI",
    pc5_desc: "Clinical assistant with fine-tuned LLM on medical literature. Diagnosis support, clinical record summaries and drug interaction alerts.",
    pc6_badge: "🎮 Games", pc6_title: "GameServer Infra",
    pc6_desc: "Backend for 200K+ simultaneous players. Smart matchmaking with adaptive ELO and distributed anti-cheat.",
    pf7_badge: "AI Agents · Autonomy · LLM",
    pf7_title: "AgentOS — Autonomous Agent Platform",
    pf7_desc: "Multi-agent framework for complex enterprise workflow automation. AI agent orchestration with persistent memory and security guardrails. 70% reduction in operational process time.",
    time_saved: "time saved", agent_types: "agent types", tasks_month: "tasks/month",
    num1: "Years of experience", num2: "Production projects",
    num3: "Transactions/day managed", num4: "Industries",
    contact_label: "Contact",
    contact_title1: "Got a tough", contact_title2: "challenge?",
    contact_sub: "From systems architecture to technical leadership. If you need someone who builds things that actually work at scale, let's talk.",
    footer_rights: "All rights reserved"
  }
};

let currentLang = 'es';

function applyLang(lang) {
  currentLang = lang;
  const dict = TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  const toggle = document.getElementById('lang-toggle');
  toggle.classList.toggle('lang-en-active', lang === 'en');
  toggle.classList.toggle('lang-es-active', lang === 'es');

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // Update marquee (rebuild duplicate for seamless loop)
  const keys = ['m_banking','m_ai','m_mobility','m_construction','m_games','m_health','m_gov','m_energy'];
  const items = keys.map(k => dict[k]);
  const mi = document.getElementById('marquee-inner');
  if (mi) {
    let html = '';
    [...items, ...items].forEach(t => {
      html += `<span>${t}</span><span class="sep">✦</span>`;
    });
    mi.innerHTML = html;
  }
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});
// init
applyLang('es');


// ══ CURSOR ══════════════════════════════════════════
const cursorDot   = document.getElementById('cursor-dot');
const cursorTrail = document.getElementById('cursor-trail');
let mouseX = -100, mouseY = -100;
let trailX = -100, trailY = -100;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

(function trailLoop() {
  trailX += (mouseX - trailX) * 0.09;
  trailY += (mouseY - trailY) * 0.09;
  cursorTrail.style.left = trailX + 'px';
  cursorTrail.style.top  = trailY + 'px';
  requestAnimationFrame(trailLoop);
})();

const hoverEls = 'a, button, .skill-card, .proj-card, .proj-card-sm, .proj-featured, .ac, .pillar, .chip, .tl-item';
document.querySelectorAll(hoverEls).forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});


// ══ HERO ANTIGRAVITY PARTICLE SYSTEM ════════════════
const heroCanvas = document.getElementById('hero-canvas');
const hctx = heroCanvas.getContext('2d');
let W, H;

function resizeHeroCanvas() {
  W = heroCanvas.width = window.innerWidth;
  H = heroCanvas.height = window.innerHeight;
}
resizeHeroCanvas();
window.addEventListener('resize', resizeHeroCanvas);

// Aurora blobs
class Blob {
  constructor(xRatio, yRatio, radius, hue1, hue2, speed) {
    this.xBase = W * xRatio;
    this.yBase = H * yRatio;
    this.r = radius;
    this.hue1 = hue1; this.hue2 = hue2;
    this.t = Math.random() * Math.PI * 2;
    this.speed = speed;
    this.ax = Math.random() * Math.PI * 2;
    this.ay = Math.random() * Math.PI * 2;
    this.dax = 0.003 + Math.random() * 0.002;
    this.day = 0.002 + Math.random() * 0.002;
  }
  update() {
    this.ax += this.dax; this.ay += this.day;
    this.x = W * (this.xBase/W) + Math.cos(this.ax) * W * 0.22;
    this.y = H * (this.yBase/H) + Math.sin(this.ay) * H * 0.18;
  }
  draw(ctx) {
    const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
    g.addColorStop(0, this.hue1);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Antigravity particle
class AGParticle {
  constructor() { this.reset(true); }
  reset(init = false) {
    this.x  = Math.random() * W;
    this.y  = init ? Math.random() * H : H + 20;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = -(Math.random() * 0.5 + 0.15);
    this.size = Math.random() * 1.6 + 0.3;
    this.alpha = Math.random() * 0.5 + 0.15;
    this.color = Math.random() > 0.55 ? [0, 234, 255] : [124, 58, 237];
    this.life = 0;
    this.maxLife = 200 + Math.random() * 300;
    // repulsion from mouse
    this.repulse = Math.random() > 0.5;
  }
  update(mx, my) {
    this.life++;
    if (this.life > this.maxLife) { this.reset(); return; }

    // antigravity: float upward
    this.vy -= 0.001;
    // slight sideways drift
    this.vx += (Math.random() - 0.5) * 0.01;
    this.vx *= 0.99;

    // mouse repulsion
    if (this.repulse) {
      const dx = this.x - mx, dy = this.y - my;
      const d  = Math.sqrt(dx*dx + dy*dy);
      if (d < 100 && d > 0) {
        const force = (100 - d) / 100 * 0.3;
        this.vx += (dx / d) * force;
        this.vy += (dy / d) * force;
      }
    }

    this.x += this.vx;
    this.y += this.vy;

    // wrap x
    if (this.x < 0) this.x = W;
    if (this.x > W) this.x = 0;
  }
  draw(ctx) {
    const fadeIn  = Math.min(this.life / 40, 1);
    const fadeOut = Math.min((this.maxLife - this.life) / 60, 1);
    const a = this.alpha * fadeIn * fadeOut;
    const [r, g, b] = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
    ctx.fill();
  }
}

// Grid lines
const gridLines = [];
for (let i = 0; i < 20; i++) {
  gridLines.push({
    x: (i / 20) * 2000,
    y: (i / 20) * 2000,
    type: i % 2 === 0 ? 'v' : 'h'
  });
}

const blobs = [
  new Blob(0.15, 0.35, W * 0.6,  'rgba(0,100,180,.11)',   'rgba(0,0,0,0)', 0.004),
  new Blob(0.70, 0.60, W * 0.55, 'rgba(100,30,200,.09)',  'rgba(0,0,0,0)', 0.003),
  new Blob(0.45, 0.10, W * 0.45, 'rgba(0,150,220,.08)',   'rgba(0,0,0,0)', 0.005),
  new Blob(0.85, 0.25, W * 0.40, 'rgba(80, 10,160,.07)',  'rgba(0,0,0,0)', 0.0035),
];

const particles = Array.from({ length: 120 }, () => new AGParticle());

// Stars (static-ish)
const stars = Array.from({ length: 200 }, () => ({
  x: Math.random() * 4000, y: Math.random() * 4000,
  r: Math.random() * 0.9 + 0.1,
  twinkle: Math.random() * Math.PI * 2,
  speed: 0.005 + Math.random() * 0.01,
}));

let heroMX = 0, heroMY = 0;
let camX = 0, camY = 0;
document.addEventListener('mousemove', e => {
  heroMX = e.clientX; heroMY = e.clientY;
  camX = (e.clientX / window.innerWidth  - 0.5) * 25;
  camY = (e.clientY / window.innerHeight - 0.5) * 15;
});

let heroFrame = 0;
function heroLoop() {
  hctx.clearRect(0, 0, W, H);

  // base bg
  hctx.fillStyle = '#04040e';
  hctx.fillRect(0, 0, W, H);

  // aurora blobs (blurred)
  hctx.save();
  hctx.filter = 'blur(90px)';
  blobs.forEach(b => { b.update(); b.draw(hctx); });
  hctx.restore();

  // grid lines parallax
  const gsx = -camX * 0.4, gsy = -camY * 0.3;
  hctx.strokeStyle = 'rgba(0,234,255,.018)';
  hctx.lineWidth = 0.5;
  for (let gx = 0; gx < W + 80; gx += 80) {
    hctx.beginPath();
    hctx.moveTo((gx + gsx) % (W + 80), 0);
    hctx.lineTo((gx + gsx) % (W + 80), H);
    hctx.stroke();
  }
  for (let gy = 0; gy < H + 80; gy += 80) {
    hctx.beginPath();
    hctx.moveTo(0, (gy + gsy) % (H + 80));
    hctx.lineTo(W, (gy + gsy) % (H + 80));
    hctx.stroke();
  }

  // stars parallax
  const ssx = -camX * 0.2, ssy = -camY * 0.15;
  stars.forEach(s => {
    const tw = (Math.sin(heroFrame * s.speed + s.twinkle) + 1) / 2;
    const a = 0.15 + tw * 0.45;
    const sx = ((s.x / 4000) * W * 1.3 + ssx + W) % W;
    const sy = ((s.y / 4000) * H * 1.3 + ssy + H) % H;
    hctx.beginPath();
    hctx.arc(sx, sy, s.r * (0.7 + tw * 0.5), 0, Math.PI * 2);
    hctx.fillStyle = `rgba(255,255,255,${a})`;
    hctx.fill();
  });

  // connections between close particles
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d  = Math.sqrt(dx*dx + dy*dy);
      if (d < 90) {
        const [r,g,b] = particles[i].color;
        hctx.beginPath();
        hctx.moveTo(particles[i].x, particles[i].y);
        hctx.lineTo(particles[j].x, particles[j].y);
        hctx.strokeStyle = `rgba(${r},${g},${b},${0.07 * (1 - d/90)})`;
        hctx.lineWidth = 0.5;
        hctx.stroke();
      }
    }
    // mouse connections
    const dx = particles[i].x - heroMX;
    const dy = particles[i].y - heroMY;
    const d  = Math.sqrt(dx*dx + dy*dy);
    if (d < 130) {
      hctx.beginPath();
      hctx.moveTo(particles[i].x, particles[i].y);
      hctx.lineTo(heroMX, heroMY);
      hctx.strokeStyle = `rgba(0,234,255,${0.18 * (1 - d/130)})`;
      hctx.lineWidth = 0.7;
      hctx.stroke();
    }
  }

  // particles
  particles.forEach(p => {
    p.update(heroMX, heroMY);
    p.draw(hctx);
  });

  heroFrame++;
  requestAnimationFrame(heroLoop);
}
heroLoop();


// ══ NUMBERS CANVAS ════════════════════════════════════
const numCanvas = document.getElementById('numbers-canvas');
if (numCanvas) {
  const nctx = numCanvas.getContext('2d');
  function resizeNumCanvas() {
    const wrap = document.getElementById('numbers');
    numCanvas.width  = wrap.offsetWidth;
    numCanvas.height = wrap.offsetHeight;
  }
  resizeNumCanvas();
  window.addEventListener('resize', resizeNumCanvas);

  const numBars = Array.from({length: 40}, (_, i) => ({
    x: (i / 39) * numCanvas.width,
    h: 10 + Math.random() * 60,
    speed: 0.02 + Math.random() * 0.03,
    phase: Math.random() * Math.PI * 2,
    color: Math.random() > 0.5 ? [0,234,255] : [124,58,237],
  }));

  function numLoop() {
    const W2 = numCanvas.width, H2 = numCanvas.height;
    nctx.clearRect(0, 0, W2, H2);
    numBars.forEach((bar, i) => {
      bar.phase += bar.speed;
      const h = bar.h * (0.5 + Math.sin(bar.phase) * 0.5);
      const [r,g,b] = bar.color;
      const grad = nctx.createLinearGradient(0, H2, 0, H2 - h);
      grad.addColorStop(0, `rgba(${r},${g},${b},.15)`);
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      nctx.fillStyle = grad;
      nctx.fillRect(bar.x - 2, H2 - h, 4, h);
    });
    requestAnimationFrame(numLoop);
  }
  numLoop();
}


// ══ NAVIGATION ═══════════════════════════════════════
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

const burger   = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
let menuOpen   = false;

burger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  navLinks.classList.toggle('open', menuOpen);
  // animate burger
  const spans = burger.querySelectorAll('span');
  if (menuOpen) {
    spans[0].style.transform = 'translateY(6px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-6px) rotate(-45deg)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menuOpen = false;
    navLinks.classList.remove('open');
    burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});


// ══ INTERSECTION OBSERVER (scroll reveal) ════════════
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // stagger children if requested
      const delay = entry.target.dataset.delay ? parseInt(entry.target.dataset.delay) : 0;
      setTimeout(() => {
        entry.target.classList.add('vis');
      }, delay);

      // Skill meter fills
      entry.target.querySelectorAll('.sk-meter-fill').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });

      // About card bars
      if (entry.target.classList.contains('about-card-featured')) {
        entry.target.classList.add('animated');
      }
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.reveal-up, .reveal-left, .reveal-right, .tl-item, .skill-card, .about-card-featured'
).forEach(el => revealObserver.observe(el));

// Also observe skill cards for meter animation
document.querySelectorAll('.skill-card').forEach(el => revealObserver.observe(el));


// ══ COUNTER ANIMATION ════════════════════════════════
let countersStarted = false;
const countersObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersStarted) {
      countersStarted = true;
      document.querySelectorAll('.num-value, .hstat-n').forEach(el => {
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        if (!target) return;
        let cur = 0;
        const steps = 60;
        const step  = target / steps;
        const timer = setInterval(() => {
          cur = Math.min(cur + step, target);
          el.textContent = Math.round(cur) + suffix;
          if (cur >= target) clearInterval(timer);
        }, 28);
      });
      countersObs.disconnect();
    }
  });
}, { threshold: 0.5 });

const numbersSection = document.getElementById('numbers');
if (numbersSection) countersObs.observe(numbersSection);
const heroSection = document.getElementById('hero');
if (heroSection) countersObs.observe(heroSection);


// ══ 3D TILT ON CARDS ════════════════════════════════
const tiltTargets = '.skill-card, .proj-card, .proj-card-sm, .proj-featured, .about-card-featured';
document.querySelectorAll(tiltTargets).forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    const maxTilt = card.classList.contains('proj-featured') ? 5 : 8;
    card.style.transform = `perspective(800px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) translateZ(8px)`;
    card.style.transition = 'transform .08s';
    // update spotlight position on skill cards
    if (card.classList.contains('skill-card')) {
      const mx = ((e.clientX - r.left) / r.width  * 100).toFixed(1) + '%';
      const my = ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%';
      card.style.setProperty('--mx', mx);
      card.style.setProperty('--my', my);
    }
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) translateZ(0)';
    card.style.transition = 'transform .5s cubic-bezier(0.16,1,0.3,1), border-color .35s';
  });
});


// ══ PARALLAX ON SCROLL ═══════════════════════════════
const parallaxEls = document.querySelectorAll('.proj-feat-img img, .proj-card-img img, .proj-sm-img img');

function onScroll() {
  const scrollY = window.scrollY;

  // Subtle parallax on project images
  parallaxEls.forEach(img => {
    const rect = img.closest('[class*="proj-"]').getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const offset = (window.innerHeight / 2 - center) * 0.06;
    img.style.transform = `translateY(${offset}px) scale(1.04)`;
  });

  // Hero name parallax
  const heroName = document.querySelector('.hero-name');
  if (heroName) {
    heroName.style.transform = `translateY(${scrollY * 0.18}px)`;
    heroName.style.opacity = Math.max(0, 1 - scrollY / 600);
  }
}

window.addEventListener('scroll', onScroll, { passive: true });


// ══ SMOOTH SCROLL ════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});


// ══ ACTIVE NAV LINK HIGHLIGHT ════════════════════════
const sections = document.querySelectorAll('section[id]');
const navAnchorMap = {};
document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
  navAnchorMap[a.getAttribute('href').slice(1)] = a;
});

const navObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      Object.values(navAnchorMap).forEach(a => a.style.color = '');
      const a = navAnchorMap[entry.target.id];
      if (a) a.style.color = 'var(--cyan)';
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObs.observe(s));
