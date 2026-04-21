// =============================================================
//  CAPA DE DATOS — Reservas de regalos
//  -------------------------------------------------------------
//  Por defecto usa localStorage (solo funciona dentro del mismo
//  navegador). Para que funcione entre invitados reales, cambia
//  las 4 funciones marcadas con [BACKEND] para que llamen a un
//  servicio (Firebase, Supabase, Google Sheets API, etc.).
//
//  Contrato (no cambiar los nombres ni los argumentos):
//    await Store.getAll()                → { [regaloId]: { nombre, fecha } }
//    await Store.reserve(id, nombre)     → true | false (false si ya está)
//    await Store.release(id)             → void          [solo admin]
//    await Store.clear()                 → void          [solo admin]
//
//  Ejemplo para Firebase / Supabase: sustituye el cuerpo de las
//  funciones por llamadas a la BD, mantén la forma del objeto.
// =============================================================

(function () {
  const KEY = "regalos_bodas_lorena_salva_v1";

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); }
    catch (e) { return {}; }
  }
  function write(obj) { localStorage.setItem(KEY, JSON.stringify(obj)); }

  const Store = {
    // [BACKEND] devolver objeto {id: {nombre, fecha}}
    async getAll() {
      return read();
    },
    // [BACKEND] crear reserva solo si no existe (transacción)
    async reserve(id, nombre) {
      const all = read();
      if (all[id]) return false;
      all[id] = { nombre: String(nombre).trim(), fecha: new Date().toISOString() };
      write(all);
      // notifica para que la UI se recargue
      window.dispatchEvent(new Event("reservas:change"));
      return true;
    },
    // [BACKEND] eliminar reserva
    async release(id) {
      const all = read();
      delete all[id];
      write(all);
      window.dispatchEvent(new Event("reservas:change"));
    },
    // [BACKEND] vaciar todo
    async clear() {
      write({});
      window.dispatchEvent(new Event("reservas:change"));
    },
    // Para exportar CSV desde el admin
    async exportCSV() {
      const all = read();
      const rows = [["id", "regalo", "categoria", "precio", "reservado_por", "fecha"]];
      const byId = Object.fromEntries((window.REGALOS || []).map(r => [r.id, r]));
      for (const [id, info] of Object.entries(all)) {
        const r = byId[id] || {};
        rows.push([id, r.nombre || "", r.categoria || "", r.precio || "", info.nombre, info.fecha]);
      }
      return rows.map(row => row.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
    }
  };

  window.Store = Store;
})();
