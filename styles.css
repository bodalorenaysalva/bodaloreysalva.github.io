/* =================================================================
   Web de regalos de boda — Lorena & Salva · 11 julio 2026
   Estética: editorial cálida. Serif para titulares (Cormorant),
   humanista sans para texto (Manrope), paleta terrosa.
   ================================================================= */

:root {
  --bg:           #f4efe6;      /* crema cálido */
  --bg-soft:      #ece5d7;
  --paper:        #fbf7ef;
  --ink:          #2c2a24;      /* casi negro cálido */
  --ink-soft:     #5e5a4e;
  --muted:        #8a8476;
  --line:         #d8cfbd;
  --line-soft:    #e6ddc8;
  --olive:        #6e7449;      /* acento principal */
  --olive-dark:   #4f5335;
  --terracotta:   #b56a4a;      /* acento secundario */
  --terracotta-d: #8f4f32;
  --danger:       #a24c3a;

  --serif: "Cormorant Garamond", "EB Garamond", Georgia, serif;
  --sans:  "Manrope", "Helvetica Neue", Arial, sans-serif;
  --mono:  "JetBrains Mono", ui-monospace, Menlo, monospace;

  --r-sm: 4px;
  --r-md: 8px;
  --r-lg: 14px;
}

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: var(--sans);
  background: var(--bg);
  color: var(--ink);
  line-height: 1.55;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}
a { color: var(--olive-dark); text-decoration: none; border-bottom: 1px solid var(--line); }
a:hover { color: var(--terracotta-d); }

/* Tipografía ------------------------------------------------- */
.serif { font-family: var(--serif); font-weight: 500; letter-spacing: 0.005em; }
.display {
  font-family: var(--serif);
  font-weight: 400;
  font-style: italic;
  line-height: 0.95;
  letter-spacing: -0.01em;
}
.eyebrow {
  font-family: var(--sans);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 12px;
  color: var(--muted);
}
.rule {
  height: 1px;
  background: var(--line);
  border: 0;
  margin: 0;
}

/* Layout ----------------------------------------------------- */
.wrap { max-width: 1180px; margin: 0 auto; padding: 0 32px; }
@media (max-width: 640px) { .wrap { padding: 0 20px; } }

/* Header ----------------------------------------------------- */
.topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 22px 0;
  border-bottom: 1px solid var(--line);
}
.topbar .mark {
  font-family: var(--serif); font-style: italic; font-size: 22px;
}
.topbar nav { display: flex; gap: 28px; font-size: 14px; }
.topbar nav a {
  border: 0; color: var(--ink-soft); text-transform: uppercase;
  letter-spacing: 0.12em; font-size: 12px;
}
.topbar nav a:hover { color: var(--terracotta-d); }
@media (max-width: 640px) { .topbar nav { display: none; } }

/* Hero ------------------------------------------------------- */
.hero { padding: 80px 0 72px; text-align: center; }
.hero .couple {
  font-size: clamp(72px, 13vw, 180px);
  margin: 16px 0 4px;
}
.hero .couple .amp {
  font-style: italic;
  color: var(--terracotta);
  padding: 0 6px;
}
.hero .date {
  font-family: var(--sans);
  font-size: 14px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-top: 12px;
}
.hero .place {
  font-family: var(--serif); font-style: italic;
  color: var(--muted); font-size: 22px; margin-top: 18px;
}

/* Countdown -------------------------------------------------- */
.countdown {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
  max-width: 680px; margin: 48px auto 0;
  border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
}
.countdown > div {
  padding: 22px 10px; text-align: center;
  border-right: 1px solid var(--line);
}
.countdown > div:last-child { border-right: 0; }
.countdown .num {
  font-family: var(--serif); font-weight: 400; font-size: 44px;
  line-height: 1; color: var(--ink);
  font-variant-numeric: tabular-nums;
}
.countdown .lbl {
  font-size: 11px; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--muted); margin-top: 8px;
}

/* Two-column intro ------------------------------------------- */
.section { padding: 96px 0; border-top: 1px solid var(--line); }
.two-col {
  display: grid; grid-template-columns: 1.1fr 1fr;
  gap: 64px; align-items: start;
}
@media (max-width: 880px) { .two-col { grid-template-columns: 1fr; gap: 40px; } }

.photo-placeholder {
  aspect-ratio: 4 / 5;
  background: #000 url("img/portada.jpeg") center/cover no-repeat;
  border: 1px solid var(--line);
  border-radius: var(--r-sm);
}

.message h2 {
  font-family: var(--serif); font-weight: 400;
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.05; margin: 16px 0 20px;
}
.message p {
  font-size: 17px; color: var(--ink-soft); margin: 0 0 18px;
  max-width: 52ch;
}
.message .sign {
  font-family: var(--serif); font-style: italic; font-size: 26px;
  color: var(--ink); margin-top: 28px;
}

/* Ceremony info ---------------------------------------------- */
.info-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.info-grid > div {
  padding: 36px 28px;
  border-right: 1px solid var(--line);
}
.info-grid > div:last-child { border-right: 0; }
.info-grid .ico-day {
  width: 56px; height: 56px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: var(--bg);
  display: flex; align-items: center; justify-content: center;
  color: var(--terracotta-d);
  margin-bottom: 18px;
}
.info-grid h3 {
  font-family: var(--serif); font-weight: 400; font-size: 28px;
  margin: 10px 0 6px; font-style: italic;
}
.info-grid p { margin: 0; color: var(--ink-soft); font-size: 15px; }
@media (max-width: 780px) {
  .info-grid { grid-template-columns: 1fr; }
  .info-grid > div { border-right: 0; border-bottom: 1px solid var(--line); }
  .info-grid > div:last-child { border-bottom: 0; }
}

/* Lista de regalos ------------------------------------------- */
.regalos-head {
  display: flex; justify-content: space-between; align-items: end;
  gap: 32px; margin-bottom: 36px; flex-wrap: wrap;
}
.regalos-head h2 {
  font-family: var(--serif); font-weight: 400;
  font-size: clamp(40px, 5vw, 64px); line-height: 1;
  margin: 8px 0 0;
}
.regalos-head p {
  max-width: 46ch; color: var(--ink-soft); margin: 18px 0 0;
}

.filters {
  display: flex; gap: 8px; flex-wrap: wrap;
  align-items: center;
  margin: 28px 0 36px;
  padding: 14px 0;
  border-top: 1px solid var(--line-soft);
  border-bottom: 1px solid var(--line-soft);
}
.filters .group { display: flex; gap: 6px; flex-wrap: wrap; }
.filters .spacer { flex: 1; }
.filters .count {
  font-family: var(--mono); font-size: 12px; color: var(--muted);
}
.chip {
  background: transparent;
  border: 1px solid var(--line);
  color: var(--ink-soft);
  padding: 7px 14px;
  border-radius: 999px;
  font-family: var(--sans);
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s ease;
}
.chip:hover { border-color: var(--ink-soft); color: var(--ink); }
.chip.active {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--paper);
}

/* Grid de tarjetas ------------------------------------------- */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}
@media (max-width: 880px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }

.card {
  padding: 0;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--paper);
  display: flex; flex-direction: column;
  position: relative;
  transition: background 0.2s;
}
.card:hover { background: #fff; }
.card.taken { background: var(--bg-soft); }
.card.taken .card-img img { filter: grayscale(0.7) brightness(0.92); }

.card-img {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-bottom: 1px solid var(--line-soft);
  background: var(--bg-soft);
}
.card-img img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}
.card-img.empty {
  background:
    repeating-linear-gradient(45deg, #ece5d7 0 12px, #e6ddc8 12px 24px);
}
.img-slot {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 10px;
  color: var(--muted);
}
.img-slot-icon {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: var(--paper);
  border: 1px solid var(--line);
  display: flex; align-items: center; justify-content: center;
  color: var(--ink-soft);
}
.img-slot-label {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-soft);
  background: var(--paper);
  padding: 4px 10px;
  border: 1px solid var(--line);
  border-radius: var(--r-sm);
  letter-spacing: 0.02em;
}
.card-img .img-veil {
  position: absolute; inset: 0;
  background: rgba(251, 247, 239, 0.55);
  display: flex; align-items: center; justify-content: center;
}
.card-img .img-veil span {
  font-family: var(--serif); font-style: italic;
  font-size: 22px;
  color: var(--terracotta-d);
  background: var(--paper);
  padding: 8px 20px;
  border: 1px solid var(--terracotta-d);
  border-radius: 999px;
  transform: rotate(-4deg);
}

.card-body {
  padding: 22px 24px 20px;
  display: flex; flex-direction: column;
  flex: 1;
}

.card .cat {
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--muted);
  margin-bottom: 14px;
}
.card h3 {
  font-family: var(--serif); font-weight: 400;
  font-size: 26px; line-height: 1.15;
  margin: 0 0 10px;
  letter-spacing: -0.005em;
}
.card .desc {
  color: var(--ink-soft); font-size: 14px; line-height: 1.5;
  margin: 0 0 18px;
  flex: 1;
  text-wrap: pretty;
}
.card .foot {
  display: flex; justify-content: space-between; align-items: center;
  gap: 10px;
  padding-top: 14px;
  border-top: 1px solid var(--line-soft);
}
.card .free-label {
  font-family: var(--sans);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--olive-dark);
}

.btn {
  font-family: var(--sans);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  padding: 9px 16px;
  border-radius: 999px;
  border: 1px solid var(--ink);
  background: var(--ink);
  color: var(--paper);
  cursor: pointer;
  transition: all 0.15s;
}
.btn:hover { background: var(--terracotta-d); border-color: var(--terracotta-d); }
.btn.ghost { background: transparent; color: var(--ink); }
.btn.ghost:hover { background: var(--ink); color: var(--paper); }
.btn.small { padding: 6px 12px; font-size: 11px; }
.btn.danger { background: transparent; color: var(--danger); border-color: var(--danger); }
.btn.danger:hover { background: var(--danger); color: var(--paper); }

.taken-stamp {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--serif); font-style: italic;
  color: var(--terracotta-d); font-size: 16px;
}
.taken-stamp::before {
  content: "✓";
  display: inline-block;
  width: 20px; height: 20px;
  border: 1px solid var(--terracotta-d);
  border-radius: 50%;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  line-height: 18px;
}
.taken-by {
  font-family: var(--sans); font-size: 12px;
  color: var(--muted); margin-top: 6px;
}

/* Modal ------------------------------------------------------ */
.modal-bg {
  position: fixed; inset: 0; background: rgba(44, 42, 36, 0.55);
  display: flex; align-items: center; justify-content: center;
  padding: 24px; z-index: 100;
  animation: fade 0.18s ease;
}
.modal {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--r-md);
  max-width: 480px; width: 100%;
  padding: 36px 36px 32px;
  box-shadow: 0 24px 60px rgba(44,42,36,0.25);
  animation: rise 0.22s ease;
}
@keyframes fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }

.modal .eyebrow { margin-bottom: 10px; }
.modal h3 {
  font-family: var(--serif); font-weight: 400;
  font-size: 32px; line-height: 1.1;
  margin: 0 0 8px;
}
.modal .modal-price {
  font-family: var(--serif);
  font-size: 20px;
  color: var(--terracotta-d);
  margin-bottom: 18px;
}
.modal p { color: var(--ink-soft); font-size: 14px; margin: 0 0 20px; }
.modal label {
  display: block; font-size: 12px; text-transform: uppercase;
  letter-spacing: 0.15em; color: var(--ink-soft);
  margin-bottom: 8px;
}
.modal input[type="text"],
.modal input[type="password"] {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--line);
  background: #fff;
  border-radius: var(--r-sm);
  font-family: var(--sans); font-size: 15px;
  color: var(--ink);
}
.modal input:focus { outline: 2px solid var(--olive); outline-offset: -1px; border-color: var(--olive); }
.modal .actions {
  display: flex; gap: 10px; justify-content: flex-end;
  margin-top: 22px;
}
.modal .note {
  font-family: var(--mono); font-size: 11px; color: var(--muted);
  margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--line-soft);
}
.modal .error {
  color: var(--danger); font-size: 13px; margin: 8px 0 0;
}

/* Confirmación ----------------------------------------------- */
.confirm-check {
  font-size: 46px;
  color: var(--terracotta);
  font-family: var(--serif);
  text-align: center;
  margin: 0 0 8px;
}
.confirm h3 { text-align: center; }
.confirm p { text-align: center; }

/* Footer ----------------------------------------------------- */
footer {
  padding: 60px 0 40px;
  border-top: 1px solid var(--line);
  text-align: center;
  color: var(--muted);
  font-size: 13px;
}
footer .sig { font-family: var(--serif); font-style: italic; font-size: 22px; color: var(--ink-soft); }
footer .admin-link {
  display: inline-block; margin-top: 18px;
  font-size: 11px; color: var(--muted);
  border: 0; text-transform: uppercase; letter-spacing: 0.2em;
  cursor: pointer;
  background: transparent;
  font-family: var(--sans);
}
footer .admin-link:hover { color: var(--terracotta-d); }

/* Admin panel ------------------------------------------------ */
.admin-wrap {
  position: fixed; inset: 0; background: var(--bg);
  z-index: 90;
  overflow-y: auto;
}
.admin-wrap .wrap { padding-top: 32px; padding-bottom: 80px; }
.admin-head {
  display: flex; justify-content: space-between; align-items: center;
  padding-bottom: 20px; border-bottom: 1px solid var(--line);
  margin-bottom: 32px;
}
.admin-head h1 {
  font-family: var(--serif); font-weight: 400; font-style: italic;
  font-size: 40px; margin: 0;
}
.admin-stats {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
  border: 1px solid var(--line); background: var(--paper);
  margin-bottom: 32px; border-radius: var(--r-sm);
}
.admin-stats > div {
  padding: 20px 22px;
  border-right: 1px solid var(--line);
}
.admin-stats > div:last-child { border-right: 0; }
.admin-stats .num {
  font-family: var(--serif); font-size: 36px; line-height: 1;
  font-variant-numeric: tabular-nums;
}
.admin-stats .lbl {
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em;
  color: var(--muted); margin-top: 6px;
}
@media (max-width: 780px) { .admin-stats { grid-template-columns: repeat(2, 1fr); } }

.admin-table {
  width: 100%;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--r-sm);
  border-collapse: collapse;
  font-size: 14px;
}
.admin-table th, .admin-table td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--line-soft);
  text-align: left;
  vertical-align: middle;
}
.admin-table th {
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em;
  color: var(--muted); font-weight: 500;
  background: var(--bg-soft);
}
.admin-table tr:last-child td { border-bottom: 0; }
.admin-table .mono { font-family: var(--mono); font-size: 12px; }
.admin-table .badge-taken {
  display: inline-block; padding: 3px 10px;
  background: var(--terracotta); color: var(--paper);
  border-radius: 999px; font-size: 11px; letter-spacing: 0.08em;
  text-transform: uppercase;
}
.admin-table .badge-free {
  display: inline-block; padding: 3px 10px;
  background: transparent; border: 1px solid var(--line);
  color: var(--muted);
  border-radius: 999px; font-size: 11px; letter-spacing: 0.08em;
  text-transform: uppercase;
}
.admin-toolbar {
  display: flex; gap: 10px; flex-wrap: wrap;
  margin-bottom: 20px; align-items: center;
}
.admin-toolbar .spacer { flex: 1; }
.admin-search {
  padding: 8px 12px;
  border: 1px solid var(--line);
  background: var(--paper);
  border-radius: var(--r-sm);
  font-family: var(--sans); font-size: 14px;
  min-width: 220px;
}

/* Toast ------------------------------------------------------ */
.toast {
  position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
  background: var(--ink); color: var(--paper);
  padding: 12px 20px; border-radius: 999px;
  font-size: 13px; letter-spacing: 0.04em;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  z-index: 200;
  animation: rise 0.2s ease;
}
