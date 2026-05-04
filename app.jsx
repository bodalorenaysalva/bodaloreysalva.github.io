/* global React */
// =============================================================
//  App principal — Lorena & Salva
// =============================================================

const { useState, useEffect, useMemo, useRef } = React;

// ---------- CONFIGURACIÓN FÁCIL DE EDITAR ----------------------
// Edita estos valores y los datos en data/regalos.js para personalizar.
const CONFIG = {
  novios: { nombre1: "Lorena", nombre2: "Salva" },
  fechaBoda: "2026-07-11T19:00:00+02:00",
  lugar: "La Fábrica de los Genoveses",
  ciudad: "Cabo de Gata, Almería",
  ceremonia: { hora: "19:00 h", detalle: "Ceremonia al atardecer" },
  banquete: { hora: "20:00 h", detalle: "Cóctel y cena" },
  fiesta: { hora: "23:30 h", detalle: "Baile y barra libre" },
  // Contraseña del panel de admin (cámbiala por una tuya).
  adminPass: "salva2026"
};

// ---------- COUNTDOWN ------------------------------------------
function useCountdown(targetIso) {
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff % 86400000 / 3600000);
  const mins = Math.floor(diff % 3600000 / 60000);
  const secs = Math.floor(diff % 60000 / 1000);
  return { days, hours, mins, secs };
}

function Countdown() {
  const { days, hours, mins, secs } = useCountdown(CONFIG.fechaBoda);
  return (
    <div className="countdown">
      <div><div className="num">{days}</div><div className="lbl">Días</div></div>
      <div><div className="num">{String(hours).padStart(2, "0")}</div><div className="lbl">Horas</div></div>
      <div><div className="num">{String(mins).padStart(2, "0")}</div><div className="lbl">Minutos</div></div>
      <div><div className="num">{String(secs).padStart(2, "0")}</div><div className="lbl">Segundos</div></div>
    </div>);

}

// ---------- HERO -----------------------------------------------
function Hero() {
  return (
    <section className="hero">
      <div className="eyebrow">Nos casamos</div>
      <h1 className="couple display">
        {CONFIG.novios.nombre1}<span className="amp">&amp;</span>{CONFIG.novios.nombre2}
      </h1>
      <div className="date">11 · Julio · 2026</div>
      <div className="place">{CONFIG.lugar} · {CONFIG.ciudad}</div>
      <Countdown />
    </section>);

}

// ---------- MENSAJE --------------------------------------------
function Mensaje() {
  return (
    <section className="section">
      <div className="wrap two-col">
        <div className="photo-placeholder" />
        <div className="message">
          <div className="eyebrow">Una nota de los novios</div>
          <h2>Vuestra presencia es el regalo. Esto es la letra pequeña.</h2>
          <p>
            Estamos haciendo dos cosas a la vez y las dos dan vértigo: reformar la casa
            en la que queremos pasar los próximos mil inviernos y escaparnos quince días
            de luna de miel para recordar cómo es no tener escombros en el pasillo.
          </p>
          <p>La casa está pendiente de una buena reforma: hay un baño que aún no existe pero ya tiene nombre, una cocina marcada con cinta de carrocero, paredes pidiendo pintura a gritos y un suelo que, a día de hoy, sigue siendo el de la anterior dueña.




          </p>
          <p>
            Así que hemos cambiado la típica lista de regalos por algo más útil. Con vuestra aportación os invitamos a que decidáis en qué lo vamos a emplear:
            <strong> trocitos de la reforma</strong> (un inodoro, unos azulejos, la
            mano de obra del pintor) o <strong>trocitos del viaje</strong> (un vuelo,
            una cena, un masaje). Cada regalo es para una persona, pareja o panda que
            se ponga de acuerdo. Elegís, ponéis vuestro nombre, y ya nosotros nos ocupamos de ello. Os enviaremos una foto cuando todo esté terminado para que veáis cómo ha quedado.
          </p>
          <p>
            Os facilitamos el número de cuenta: ES75 0128 7820 8801 0448 4045 (Bankinter).
            Y gracias, en serio: por venir, por estar y por regalarnos un trozo de
            nuestras próximas alegrías domésticas.
          </p>
          <div className="sign">— Lorena &amp; Salva</div>
        </div>
      </div>
    </section>);

}

// ---------- INFO CEREMONIA -------------------------------------
function Ceremonia() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="eyebrow" style={{ textAlign: "center", marginBottom: 10 }}>El día</div>
        <h2 className="serif" style={{
          textAlign: "center", fontSize: "clamp(34px, 4vw, 52px)",
          fontWeight: 400, margin: "6px 0 42px", fontStyle: "italic"
        }}>
          11 de julio · {CONFIG.lugar}
        </h2>
        <div className="info-grid">
          <div>
            <div className="ico-day" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                <circle cx="18" cy="22" r="5"/>
                <path d="M18 8 v4 M8 22 h4 M24 22 h4 M11 15 l2.5 2.5 M25 15 l-2.5 2.5"/>
                <path d="M4 30 h28" />
              </svg>
            </div>
            <div className="eyebrow">{CONFIG.ceremonia.hora}</div>
            <h3>Ceremonia</h3>
            <p>{CONFIG.ceremonia.detalle} frente al mar, con la luz que pone el Cabo de Gata a esa hora. Pondremos autobús desde San José y desde Almería.</p>
          </div>
          <div>
            <div className="ico-day" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6 v10 a3 3 0 0 0 3 3 v11"/>
                <path d="M13 6 v13"/>
                <path d="M17 6 v10 a3 3 0 0 1 -3 3"/>
                <path d="M24 6 c-2 2 -2 10 0 12 v12"/>
              </svg>
            </div>
            <div className="eyebrow">{CONFIG.banquete.hora}</div>
            <h3>Cena</h3>
            <p>{CONFIG.banquete.detalle}. Habrá vino. Habrá postre. Habrá recena.</p>
          </div>
          <div>
            <div className="ico-day" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 22 v-12 l14 -3 v12"/>
                <ellipse cx="10" cy="23" rx="3.5" ry="2.5"/>
                <ellipse cx="24" cy="20" rx="3.5" ry="2.5"/>
                <path d="M13 13 l14 -3"/>
              </svg>
            </div>
            <div className="eyebrow">{CONFIG.fiesta.hora}</div>
            <h3>Fiesta</h3>
            <p>{CONFIG.fiesta.detalle}. ¡A darlo todo en la pista!.</p>
          </div>
        </div>

        <div className="map-wrap">
          <div className="map-head">
            <div>
              <div className="eyebrow">Ceremonia Civil: pondremos autobús </div>
              <h3 className="map-title">{CONFIG.lugar}</h3>
              <p className="map-sub">{CONFIG.ciudad} · 36.756264, −2.121693</p>
            </div>
            <a className="btn small" href="https://www.google.com/maps/?q=36.756264,-2.121693" target="_blank" rel="noopener">Abrir en Google Maps</a>
          </div>
          <div className="map-frame">
            <iframe
              title="Mapa del lugar de la ceremonia"
              src="https://www.google.com/maps?q=36.756264,-2.121693&z=13&hl=es&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>);

}

// ---------- TARJETA REGALO -------------------------------------
function Card({ regalo, reserva, onPick }) {
  const isTaken = !!reserva;
  const [imgOk, setImgOk] = useState(true);
  const hasImg = regalo.img && imgOk;
  return (
    <div className={`card ${isTaken ? "taken" : ""}`}>
      <div className={`card-img ${hasImg ? "" : "empty"}`}>
        {hasImg ?
        <img src={regalo.img} alt="" onError={() => setImgOk(false)} loading="lazy" /> :

        <div className="img-slot">
            <div className="img-slot-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <rect x="3" y="4" width="18" height="16" rx="1" />
                <circle cx="9" cy="10" r="1.6" />
                <path d="M3 17l5-5 4 4 3-3 6 6" />
              </svg>
            </div>
            <div className="img-slot-label">img/{regalo.id}.jpg</div>
          </div>
        }
        {isTaken && <div className="img-veil"><span>Reservado</span></div>}
      </div>
      <div className="card-body">
        <div className="cat">{regalo.categoria === "casa" ? "Casa" : "Viaje de novios"}</div>
        <h3>{regalo.nombre}</h3>
        <p className="desc">{regalo.desc}</p>
        <div className="foot">
          {isTaken ?
          <div>
              <div className="taken-stamp">Reservado</div>
              <div className="taken-by">por {reserva.nombre}</div>
            </div> :

          <span className="free-label">Disponible</span>
          }
          {!isTaken &&
          <button className="btn small" onClick={() => onPick(regalo)}>
              Elegir
            </button>
          }
        </div>
      </div>
    </div>);

}

// ---------- MODAL DE RESERVA -----------------------------------
function ReserveModal({ regalo, onClose, onConfirm }) {
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {inputRef.current?.focus();}, []);

  async function submit(e) {
    e.preventDefault();
    if (!nombre.trim()) {setError("Escribe tu nombre, aunque sea el mote");return;}
    const ok = await onConfirm(regalo.id, nombre.trim());
    if (!ok) setError("Ay, alguien se ha adelantado. Elige otro.");else
    setDone(true);
  }

  function onKey(e) {if (e.key === "Escape") onClose();}

  return (
    <div className="modal-bg" onClick={onClose} onKeyDown={onKey}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {done ?
        <div className="confirm">
            <div className="confirm-check">✓</div>
            <h3>¡Reservado!</h3>
            <p>
              Gracias, <strong>{nombre}</strong>. Has elegido <em>{regalo.nombre}</em>.
            </p>
            <div className="actions" style={{ justifyContent: "center" }}>
              <button className="btn" onClick={onClose}>Cerrar</button>
            </div>
          </div> :

        <form onSubmit={submit}>
            <div className="eyebrow">Estás eligiendo</div>
            <h3>{regalo.nombre}</h3>
            <p>{regalo.desc}</p>
            <label htmlFor="nombre">Tu nombre (o nombres, si sois varios)</label>
            <input
            id="nombre" ref={inputRef} type="text" value={nombre}
            onChange={(e) => {setNombre(e.target.value);setError("");}}
            placeholder="Ej: Lorena y Salva"
            maxLength={60} />
          
            {error && <div className="error">{error}</div>}
            <div className="note">
              Al confirmar, este regalo queda reservado a tu nombre. Nosotros no te olvidaremos y te enviaremos una fotografía como agradecimiento de tu contribución.
            </div>
            <div className="actions">
              <button type="button" className="btn ghost" onClick={onClose}>Cancelar</button>
              <button type="submit" className="btn">Confirmar reserva</button>
            </div>
          </form>
        }
      </div>
    </div>);

}

// ---------- FILTROS + GRID -------------------------------------
function ListaRegalos({ reservas, onPick }) {
  const [cat, setCat] = useState("todos"); // todos | casa | viaje
  const [estado, setEstado] = useState("todos"); // todos | libres | reservados

  const regalos = window.REGALOS || [];

  const filtered = regalos.filter((r) => {
    if (cat !== "todos" && r.categoria !== cat) return false;
    const taken = !!reservas[r.id];
    if (estado === "libres" && taken) return false;
    if (estado === "reservados" && !taken) return false;
    return true;
  });

  const freeCount = regalos.filter((r) => !reservas[r.id]).length;

  return (
    <section className="section" id="regalos">
      <div className="wrap">
        <div className="regalos-head">
          <div>
            <div className="eyebrow">La lista</div>
            <h2>Elige tu regalo</h2>
          </div>
          <p>
            {freeCount} regalos disponibles · cada uno para una persona o grupo.
            Cosas para la casa nueva y trocitos del viaje de novios.
          </p>
        </div>

        <div className="filters">
          <div className="group">
            <button className={`chip ${cat === "todos" ? "active" : ""}`} onClick={() => setCat("todos")}>Todos</button>
            <button className={`chip ${cat === "casa" ? "active" : ""}`} onClick={() => setCat("casa")}>Casa</button>
            <button className={`chip ${cat === "viaje" ? "active" : ""}`} onClick={() => setCat("viaje")}>Viaje de novios</button>
          </div>
          <div className="spacer" />
          <div className="group">
            <button className={`chip ${estado === "todos" ? "active" : ""}`} onClick={() => setEstado("todos")}>Ver todo</button>
            <button className={`chip ${estado === "libres" ? "active" : ""}`} onClick={() => setEstado("libres")}>Solo libres</button>
            <button className={`chip ${estado === "reservados" ? "active" : ""}`} onClick={() => setEstado("reservados")}>Solo reservados</button>
          </div>
          <div className="spacer" />
          <div className="count">{filtered.length} regalos</div>
        </div>

        <div className="grid">
          {filtered.map((r) =>
          <Card key={r.id} regalo={r} reserva={reservas[r.id]} onPick={onPick} />
          )}
        </div>
        {filtered.length === 0 &&
        <p style={{ textAlign: "center", color: "var(--muted)", padding: "60px 0" }}>
            No hay regalos con esos filtros. Prueba otra combinación.
          </p>
        }
      </div>
    </section>);

}

// ---------- ADMIN ----------------------------------------------
function AdminPanel({ reservas, onClose, onRelease, onClearAll }) {
  const [q, setQ] = useState("");
  const regalos = window.REGALOS || [];
  const byId = Object.fromEntries(regalos.map((r) => [r.id, r]));

  const totalReservado = Object.keys(reservas).reduce((s, id) => s + (byId[id]?.precio || 0), 0);
  const totalLibre = regalos.reduce((s, r) => s + r.precio, 0) - totalReservado;
  const nReservados = Object.keys(reservas).length;

  const rows = regalos.
  map((r) => ({ ...r, reserva: reservas[r.id] })).
  filter((r) => {
    if (!q.trim()) return true;
    const s = q.trim().toLowerCase();
    return (
      r.nombre.toLowerCase().includes(s) ||
      (r.reserva?.nombre || "").toLowerCase().includes(s) ||
      r.categoria.includes(s));

  }).
  sort((a, b) => {
    // reservados primero, por fecha descendente
    if (!!a.reserva !== !!b.reserva) return a.reserva ? -1 : 1;
    if (a.reserva && b.reserva) return b.reserva.fecha.localeCompare(a.reserva.fecha);
    return 0;
  });

  async function exportCSV() {
    const csv = await window.Store.exportCSV();
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `regalos-lorena-salva-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function fmtDate(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" }) +
    " " + d.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
  }

  return (
    <div className="admin-wrap">
      <div className="wrap">
        <div className="admin-head">
          <h1>Panel de admin</h1>
          <button className="btn ghost" onClick={onClose}>Cerrar</button>
        </div>

        <div className="admin-stats">
          <div><div className="num">{nReservados}</div><div className="lbl">Reservados</div></div>
          <div><div className="num">{regalos.length - nReservados}</div><div className="lbl">Libres</div></div>
          <div><div className="num">{totalReservado.toLocaleString("es-ES")} €</div><div className="lbl">Total reservado</div></div>
          <div><div className="num">{totalLibre.toLocaleString("es-ES")} €</div><div className="lbl">Total pendiente</div></div>
        </div>

        <div className="admin-toolbar">
          <input
            className="admin-search"
            placeholder="Buscar regalo o nombre…"
            value={q}
            onChange={(e) => setQ(e.target.value)} />
          
          <div className="spacer" />
          <button className="btn ghost small" onClick={exportCSV}>Exportar CSV</button>
          <button className="btn danger small" onClick={() => {
            if (confirm("¿Seguro que quieres borrar TODAS las reservas? No se puede deshacer.")) onClearAll();
          }}>Vaciar reservas</button>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Estado</th>
              <th>Regalo</th>
              <th>Categoría</th>
              <th style={{ textAlign: "right" }}>Precio</th>
              <th>Reservado por</th>
              <th>Fecha</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) =>
            <tr key={r.id}>
                <td>{r.reserva ? <span className="badge-taken">Reservado</span> : <span className="badge-free">Libre</span>}</td>
                <td><strong>{r.nombre}</strong></td>
                <td>{r.categoria === "casa" ? "Casa" : "Viaje"}</td>
                <td style={{ textAlign: "right" }} className="mono">{r.precio} €</td>
                <td>{r.reserva?.nombre || <span style={{ color: "var(--muted)" }}>—</span>}</td>
                <td className="mono" style={{ color: "var(--muted)" }}>{fmtDate(r.reserva?.fecha)}</td>
                <td>
                  {r.reserva &&
                <button className="btn ghost small" onClick={() => {
                  if (confirm(`¿Liberar "${r.nombre}"? Se perderá la reserva de ${r.reserva.nombre}.`)) onRelease(r.id);
                }}>Liberar</button>
                }
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

}

// ---------- LOGIN ADMIN ----------------------------------------
function AdminLogin({ onOk, onClose }) {
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {inputRef.current?.focus();}, []);
  function submit(e) {
    e.preventDefault();
    if (pass === CONFIG.adminPass) onOk();else
    setErr("Contraseña incorrecta");
  }
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={submit}>
          <div className="eyebrow">Acceso</div>
          <h3>Panel de admin</h3>
          <p>Solo para los novios. Introduce la contraseña.</p>
          <label htmlFor="pass">Contraseña</label>
          <input id="pass" ref={inputRef} type="password" value={pass} onChange={(e) => {setPass(e.target.value);setErr("");}} />
          {err && <div className="error">{err}</div>}
          <div className="actions">
            <button type="button" className="btn ghost" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn">Entrar</button>
          </div>
        </form>
      </div>
    </div>);

}

// ---------- APP PRINCIPAL --------------------------------------
function App() {
  const [reservas, setReservas] = useState({});
  const [picking, setPicking] = useState(null);
  const [adminStage, setAdminStage] = useState("none"); // none | login | open
  const [toast, setToast] = useState("");

  async function refresh() {
    const r = await window.Store.getAll();
    setReservas(r);
  }
  useEffect(() => {
    refresh();
    const h = () => refresh();
    window.addEventListener("reservas:change", h);
    window.addEventListener("storage", h);
    return () => {
      window.removeEventListener("reservas:change", h);
      window.removeEventListener("storage", h);
    };
  }, []);

  async function handleConfirm(id, nombre) {
    const ok = await window.Store.reserve(id, nombre);
    if (ok) {
      await refresh();
      setToast("¡Reserva guardada!");
      setTimeout(() => setToast(""), 2200);
    }
    return ok;
  }
  async function handleRelease(id) {
    await window.Store.release(id);
    await refresh();
  }
  async function handleClearAll() {
    await window.Store.clear();
    await refresh();
  }

  return (
    <div>
      <div className="wrap">
        <header className="topbar">
          <div className="mark">L &amp; S</div>
          <nav>
            <a href="#regalos">Regalos</a>
            <a href="#detalles">El día</a>
          </nav>
        </header>
      </div>

      <Hero />
      <Mensaje />
      <div id="detalles"><Ceremonia /></div>
      <ListaRegalos reservas={reservas} onPick={setPicking} />

      <footer>
        <div className="sig">Lorena &amp; Salva · 11 · 07 · 2026</div>
        <div style={{ marginTop: 10 }}>Con cariño (y algo de pánico logístico).</div>
        <button className="admin-link" onClick={() => setAdminStage("login")}>
          Admin
        </button>
      </footer>

      {picking &&
      <ReserveModal
        regalo={picking}
        onClose={() => setPicking(null)}
        onConfirm={handleConfirm} />

      }
      {adminStage === "login" &&
      <AdminLogin onOk={() => setAdminStage("open")} onClose={() => setAdminStage("none")} />
      }
      {adminStage === "open" &&
      <AdminPanel
        reservas={reservas}
        onClose={() => setAdminStage("none")}
        onRelease={handleRelease}
        onClearAll={handleClearAll} />

      }
      {toast && <div className="toast">{toast}</div>}
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
