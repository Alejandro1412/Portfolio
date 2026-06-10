# 🚀 Alejandro Polanco Andrade — Portfolio

## Estructura del proyecto
```
portfolio/
├── index.html    ← Página principal
├── style.css     ← Todos los estilos
├── main.js       ← Animaciones, i18n, partículas
└── README.md     ← Este archivo
```

---

## ▶ Correr localmente

### Opción 1: VS Code + Live Server (recomendado)
1. Instala VS Code: https://code.visualstudio.com
2. Instala la extensión **Live Server** (Ritwick Dey)
3. Abre la carpeta `portfolio/` en VS Code
4. Clic derecho en `index.html` → **Open with Live Server**
5. Se abre en `http://127.0.0.1:5500`

### Opción 2: Cursor (editor AI)
1. Instala Cursor: https://cursor.sh
2. Abre la carpeta en Cursor
3. Usa la terminal integrada:
   ```bash
   npx serve .
   ```
   Se abre en `http://localhost:3000`

### Opción 3: Python (sin instalar nada extra)
```bash
cd portfolio
python3 -m http.server 8080
# Abre: http://localhost:8080
```

### Opción 4: Node.js
```bash
npm install -g serve
cd portfolio
serve .
```

---

## 🌐 Despliegue en Vercel (GRATIS · más fácil · recomendado)

### Método A: Drag & Drop (sin cuenta GitHub — 3 minutos)
1. Crea cuenta en https://vercel.com (gratis con Google o GitHub)
2. Ve a https://vercel.com/new
3. Arrastra **toda la carpeta `portfolio/`** al área de upload
4. Haz clic en **Deploy**
5. En 30 segundos tienes tu URL: `https://tu-nombre.vercel.app`

### Método B: GitHub + Vercel (automático para updates)
1. Crea repo en GitHub:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git remote add origin https://github.com/TU_USUARIO/portfolio.git
   git push -u origin main
   ```
2. Ve a https://vercel.com → **New Project** → Importa el repo
3. Vercel detecta que es HTML estático automáticamente
4. **Deploy** → ¡listo!
5. Cada `git push` actualiza el sitio automáticamente

### Dominio personalizado en Vercel
- En el dashboard de tu proyecto → Settings → Domains
- Agrega tu dominio: `alejandropol.dev` (o el que tengas)
- Vercel te da las instrucciones DNS (son 2 registros)

---

## 🌐 Despliegue en Netlify (alternativa igual de fácil)

### Drag & Drop
1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta `portfolio/`
3. URL instantánea: `https://random-name.netlify.app`
4. Puedes cambiar el nombre: Site settings → Change site name

---

## 🌐 GitHub Pages (100% gratis con tu cuenta GitHub)

1. Crea el repo y súbelo:
   ```bash
   git init && git add . && git commit -m "portfolio"
   git remote add origin https://github.com/USERNAME/portfolio.git
   git push -u origin main
   ```
2. En GitHub → tu repo → **Settings** → **Pages**
3. Source: `Deploy from branch` → `main` → `/ (root)`
4. URL: `https://USERNAME.github.io/portfolio`

---

## ⚡ Tips de personalización

| Qué cambiar | Dónde |
|---|---|
| Tu email de contacto | `index.html` → busca `alejandro@polanco.dev` |
| Links de redes sociales | `index.html` → sección `#contact` |
| Colores del tema | `style.css` → bloque `:root { ... }` |
| Agregar proyecto | `index.html` → sección `#projects` |
| Foto de perfil | Agrega `<img>` en sección `#about` |

---

## 🎨 Variables CSS principales
```css
--cyan:    #00eaff;   /* Color acento principal */
--violet:  #7c3aed;   /* Color secundario */
--bg:      #04040e;   /* Fondo oscuro */
```

---

## 📦 Sin dependencias externas
Este portfolio es **100% HTML + CSS + JS vanilla**.
- No necesita npm install
- No necesita build process
- No necesita servidor especial
- Funciona abriendo `index.html` directamente en el navegador
