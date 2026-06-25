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
    hero_role: "Fullstack Technical Lead",
    hero_years: "años",
    hero_cta1: "Ver proyectos", hero_cta2: "Hablemos",
    hero_scroll: "scroll",
    stat_years: "años exp.", stat_projects: "empresas", stat_industries: "industrias",
    m_health: "Healthtech", m_ai: "Inteligencia Artificial", m_logistics: "Logística",
    m_agtech: "AgTech", m_iot: "IoT", m_banking: "Banca",
    m_enterprise: "Enterprise", m_cloud: "Cloud",
    about_label: "Sobre mí",
    about_title1: "El ingeniero que",
    about_title2: "construye lo imposible.",
    about_p1: 'Soy <strong>Alejandro Polanco Andrade</strong>, Fullstack Technical Lead con más de 10 años construyendo productos en healthtech, logística, agtech, banca e IoT — desde Colombia hasta Alemania, EE.UU. y Chile.',
    about_p2: 'Lidero equipos multiculturales, diseño arquitecturas con React, Next.js y TypeScript, e integro IA en producción: LLMs para QA, dashboards predictivos, pipelines ML e IoT en tiempo real.',
    about_p3: 'Mi enfoque: estándares de ingeniería sólidos, entregas consistentes y sistemas que escalan sin drama — porque el mejor código es el que el equipo puede mantener y el negocio puede confiar.',
    acf_tag: "// Perfil técnico",
    acf_s1: "Años liderando equipos", acf_s2: "Países en los que he trabajado", acf_s3: "Industrias",
    pillar1: "Arquitectura", pillar2: "Liderazgo", pillar3: "Innovación", pillar4: "Escalabilidad",
    skills_label: "Arsenal técnico", skills_title: "Stack tecnológico.",
    sk1_name: "Frontend Avanzado", sk2_name: "Backend & APIs",
    sk3_name: "AI / ML Engineering", sk4_name: "Cloud & DevOps",
    sk5_name: "IoT & Tiempo Real", sk6_name: "Datos & Persistencia",
    exp_label: "Trayectoria profesional",
    exp_title: "10+ años.", exp_title2: "6 industrias.",
    present: "Presente",
    exp1_role: "Fullstack Technical Lead",
    exp1_desc: 'Lideré un equipo cross-functional multicultural en Alemania. Arquitecturas escalables con <strong>React, Next.js y TypeScript</strong>. Definí estándares de calidad, code review y workflows con <strong>LLMs</strong> para QA, documentación y validación de componentes.',
    exp2_role: "Frontend Technical Lead",
    exp2_desc: 'Lideré equipo multicultural en Miami. Arquitecturas modernas con React y Next.js. Integré <strong>testing asistido por IA</strong>, optimización UI con ML y herramientas internas con APIs de LLM para QA y documentación de componentes.',
    exp3_role: "Software Engineer",
    exp3_desc: 'Plataformas con soluciones de IA y insights basados en ML. <strong>Micro frontends</strong> conectados a motores predictivos. Features para sistemas bancarios IoT y notificaciones inteligentes.',
    exp4_role: "Software Engineer",
    exp4_desc: 'Integré modelos ML para predecir patrones logísticos y consumo de combustible. Dashboards con datos IoT de <strong>GPS, sensores y telemática</strong>. Microservicios para analizar outputs de ML en tiempo real.',
    exp5_role: "FullStack Developer",
    exp5_desc: 'Herramientas con modelos ML para productividad agrícola y analítica rural. Dashboards con datos de <strong>sensores IoT de campo</strong>. Automatizaciones con IA para análisis documental.',
    exp6_role: "FullStack Developer",
    exp6_desc: 'Proyectos de innovación IoT para movilidad inteligente y monitoreo ambiental. Dashboards predictivos con ML, APIs y sistemas web/mobile integrando datos de sensores.',
    badge_bank: "🏦 Banca", badge_ai: "🤖 AI / Ventures", badge_logistics: "🚚 Logística",
    badge_agtech: "🌾 AgTech", badge_iot: "📡 IoT", badge_health: "🏥 Healthtech",
    proj_label: "Proyectos destacados",
    proj_title: "Código que", proj_title2: "mueve el mundo.",
    pf1_badge: "AI · Forecasting · ML",
    pf1_title: "AI Predictive Platform",
    pf1_desc: "Arquitectura de sistema de forecasting impulsado por IA usando TensorFlow y PyTorch. Pipelines de entrenamiento, inferencia en producción y dashboards para visualizar predicciones y métricas de modelos en tiempo real.",
    pipelines: "pipelines",
    pc2_badge: "🤖 Gen AI", pc2_title: "Generative AI Content Tool",
    pc2_desc: "Sistema de contenido basado en LLMs con fine-tuning de GPT desplegado en AWS. Generación automatizada, control de calidad y APIs para integración con productos internos.",
    pc3_badge: "📡 IoT / Movilidad", pc3_title: "IoT Smart Mobility Platform",
    pc3_desc: "Análisis en tiempo real de miles de dispositivos GPS IoT. Ingesta de telemetría, procesamiento de eventos y dashboards operativos para flotas y movilidad inteligente.",
    pc4_badge: "📊 ML Analytics", pc4_title: "ML Analytics App",
    pc4_desc: "App de analítica predictiva con React y TensorFlow.js. Modelos ejecutándose en el cliente para insights interactivos sin latencia de servidor.",
    pc5_badge: "⚡ Edge AI", pc5_title: "Edge AI IoT Monitoring",
    pc5_desc: "Modelos TensorFlow Lite en dispositivos edge para detección de anomalías en tiempo real. Procesamiento local con alertas y sincronización cloud.",
    pc6_badge: "👁️ Computer Vision", pc6_title: "VisionGuard QA",
    pc6_desc: "Sistema CNN para detección de defectos en línea de producción con OpenCV y PyTorch. Inspección automatizada de calidad industrial.",
    pf7_badge: "Healthtech · ML · Recommendations",
    pf7_title: "Smart Healthcare Recommendation Engine",
    pf7_desc: "Motor de recomendaciones médicas personalizadas con scikit-learn y embeddings de HuggingFace. Integración con frontends React para dashboards clínicos y analítica de comportamiento de usuario.",
    health_ui: "health UI",
    num1: "Años de experiencia", num2: "Empresas",
    num3: "Países", num4: "Industrias",
    contact_label: "Contacto",
    contact_title1: "¿Tienes un", contact_title2: "reto difícil?",
    contact_sub: "Desde arquitectura fullstack hasta liderazgo técnico con IA. Si necesitas a alguien que construya productos que funcionen a escala, hablemos.",
    footer_rights: "Todos los derechos reservados"
  },
  en: {
    nav_about: "About", nav_skills: "Skills",
    nav_experience: "Experience", nav_projects: "Projects", nav_contact: "Contact",
    hero_available: "Available for projects",
    hero_role: "Fullstack Technical Lead",
    hero_years: "years",
    hero_cta1: "View projects", hero_cta2: "Let's talk",
    hero_scroll: "scroll",
    stat_years: "yrs exp.", stat_projects: "companies", stat_industries: "industries",
    m_health: "Healthtech", m_ai: "Artificial Intelligence", m_logistics: "Logistics",
    m_agtech: "AgTech", m_iot: "IoT", m_banking: "Banking",
    m_enterprise: "Enterprise", m_cloud: "Cloud",
    about_label: "About me",
    about_title1: "The engineer who",
    about_title2: "builds the impossible.",
    about_p1: 'I am <strong>Alejandro Polanco Andrade</strong>, a Fullstack Technical Lead with 10+ years building products across healthtech, logistics, agtech, banking and IoT — from Colombia to Germany, the U.S. and Chile.',
    about_p2: 'I lead multicultural teams, design architectures with React, Next.js and TypeScript, and integrate AI in production: LLMs for QA, predictive dashboards, ML pipelines and real-time IoT.',
    about_p3: 'My focus: solid engineering standards, consistent delivery and systems that scale without drama — because the best code is what the team can maintain and the business can trust.',
    acf_tag: "// Technical profile",
    acf_s1: "Years leading teams", acf_s2: "Countries worked in", acf_s3: "Industries",
    pillar1: "Architecture", pillar2: "Leadership", pillar3: "Innovation", pillar4: "Scalability",
    skills_label: "Technical arsenal", skills_title: "Tech stack.",
    sk1_name: "Advanced Frontend", sk2_name: "Backend & APIs",
    sk3_name: "AI / ML Engineering", sk4_name: "Cloud & DevOps",
    sk5_name: "IoT & Real-time", sk6_name: "Data & Persistence",
    exp_label: "Career timeline",
    exp_title: "10+ years.", exp_title2: "6 industries.",
    present: "Present",
    exp1_role: "Fullstack Technical Lead",
    exp1_desc: 'Led a cross-functional multicultural team in Germany. Scalable architectures with <strong>React, Next.js and TypeScript</strong>. Defined quality standards, code review and <strong>LLM-powered</strong> workflows for QA, documentation and component validation.',
    exp2_role: "Frontend Technical Lead",
    exp2_desc: 'Led a multicultural team in Miami. Modern architectures with React and Next.js. Integrated <strong>AI-assisted testing</strong>, ML-driven UI optimization and internal LLM API tools for QA and component documentation.',
    exp3_role: "Software Engineer",
    exp3_desc: 'Platforms integrating AI solutions and ML-based insights. <strong>Micro frontends</strong> connected to predictive engines. Features for IoT-enabled banking systems and smart notifications.',
    exp4_role: "Software Engineer",
    exp4_desc: 'Integrated ML models to predict logistics patterns and fuel usage. Dashboards consuming IoT data from <strong>GPS, sensors and telematics</strong>. Microservices analyzing ML outputs in real time.',
    exp5_role: "FullStack Developer",
    exp5_desc: 'Tools integrating ML models for agricultural productivity and rural analytics. Dashboards rendering insights from <strong>field IoT sensors</strong>. AI-powered document analysis automations.',
    exp6_role: "FullStack Developer",
    exp6_desc: 'IoT innovation projects for smart mobility and environmental monitoring. Predictive dashboards with ML, APIs and web/mobile systems integrating sensor data.',
    badge_bank: "🏦 Banking", badge_ai: "🤖 AI / Ventures", badge_logistics: "🚚 Logistics",
    badge_agtech: "🌾 AgTech", badge_iot: "📡 IoT", badge_health: "🏥 Healthtech",
    proj_label: "Featured projects",
    proj_title: "Code that", proj_title2: "moves the world.",
    pf1_badge: "AI · Forecasting · ML",
    pf1_title: "AI Predictive Platform",
    pf1_desc: "Architected an AI-driven forecasting system using TensorFlow and PyTorch. Training pipelines, production inference and dashboards to visualize predictions and model metrics in real time.",
    pipelines: "pipelines",
    pc2_badge: "🤖 Gen AI", pc2_title: "Generative AI Content Tool",
    pc2_desc: "LLM-based content system with GPT fine-tuning deployed on AWS. Automated generation, quality control and APIs for internal product integration.",
    pc3_badge: "📡 IoT / Mobility", pc3_title: "IoT Smart Mobility Platform",
    pc3_desc: "Real-time analysis of thousands of GPS IoT devices. Telemetry ingestion, event processing and operational dashboards for fleets and smart mobility.",
    pc4_badge: "📊 ML Analytics", pc4_title: "ML Analytics App",
    pc4_desc: "Predictive analytics app with React and TensorFlow.js. Models running client-side for interactive insights without server latency.",
    pc5_badge: "⚡ Edge AI", pc5_title: "Edge AI IoT Monitoring",
    pc5_desc: "TensorFlow Lite models on edge devices for real-time anomaly detection. Local processing with alerts and cloud sync.",
    pc6_badge: "👁️ Computer Vision", pc6_title: "VisionGuard QA",
    pc6_desc: "CNN-based defect detection system for production lines using OpenCV and PyTorch. Automated industrial quality inspection.",
    pf7_badge: "Healthtech · ML · Recommendations",
    pf7_title: "Smart Healthcare Recommendation Engine",
    pf7_desc: "ML-driven personalized medical recommendations using scikit-learn and HuggingFace embeddings. React frontend integration for clinical dashboards and user behavior analytics.",
    health_ui: "health UI",
    num1: "Years of experience", num2: "Companies",
    num3: "Countries", num4: "Industries",
    contact_label: "Contact",
    contact_title1: "Got a tough", contact_title2: "challenge?",
    contact_sub: "From fullstack architecture to AI-powered technical leadership. If you need someone who builds products that work at scale, let's talk.",
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
  const keys = ['m_health','m_ai','m_logistics','m_agtech','m_iot','m_banking','m_enterprise','m_cloud'];
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


// ══ CURSOR (desktop only) ════════════════════════════
const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
const cursorDot   = document.getElementById('cursor-dot');
const cursorTrail = document.getElementById('cursor-trail');

if (!isTouchDevice && cursorDot && cursorTrail) {
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
}


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

function getParticleCount() {
  if (window.innerWidth < 480) return 40;
  if (window.innerWidth < 900) return 70;
  if (window.innerWidth < 1440) return 100;
  return 120;
}

let particles = Array.from({ length: getParticleCount() }, () => new AGParticle());

window.addEventListener('resize', () => {
  const count = getParticleCount();
  if (particles.length !== count) {
    particles = Array.from({ length: count }, () => new AGParticle());
  }
});

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
  document.body.style.overflow = menuOpen ? 'hidden' : '';
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
    document.body.style.overflow = '';
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


// ══ 3D TILT ON CARDS (desktop pointer only) ═══════════
const enableTilt = !isTouchDevice && window.matchMedia('(min-width: 901px)').matches;
if (enableTilt) {
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
}


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

  // Hero name parallax (desktop only)
  const heroName = document.querySelector('.hero-name');
  if (heroName && window.innerWidth >= 901) {
    heroName.style.transform = `translateY(${scrollY * 0.18}px)`;
    heroName.style.opacity = Math.max(0, 1 - scrollY / 600);
  } else if (heroName) {
    heroName.style.transform = '';
    heroName.style.opacity = '';
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
