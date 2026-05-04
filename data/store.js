// =============================================================
//  CAPA DE DATOS — Reservas de regalos
//  -------------------------------------------------------------
//  Usa Supabase para que las reservas se compartan entre todos
//  los invitados y el panel admin.
//
//  Contrato (no cambiar los nombres ni los argumentos):
//    await Store.getAll()                → { [regaloId]: { nombre, fecha } }
//    await Store.reserve(id, nombre)     → true | false (false si ya está)
//    await Store.release(id)             → void          [solo admin]
//    await Store.clear()                 → void          [solo admin]
// =============================================================

(function () {
  const SUPABASE_URL = "https://yrffhevczlasnbahbieq.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_Mpb17IBugtL1mODkeO_NOQ_H1CUnq97";

  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const Store = {
    // [BACKEND] devolver objeto {id: {nombre, fecha}}
    async getAll() {
      const { data, error } = await supabase
        .from("reservas")
        .select("id,nombre,fecha");

      if (error) {
        console.error("Error cargando reservas:", error);
        return {};
      }

      const all = {};
      for (const row of data || []) {
        all[row.id] = {
          nombre: row.nombre,
          fecha: row.fecha
        };
      }

      return all;
    },

    // [BACKEND] crear reserva solo si no existe
    async reserve(id, nombre) {
      const limpio = String(nombre || "").trim();
      if (!limpio) return false;

      const { error } = await supabase
        .from("reservas")
        .insert({
          id: id,
          nombre: limpio,
          fecha: new Date().toISOString()
        });

      if (error) {
        console.error("Error creando reserva:", error);

        // Si el regalo ya estaba reservado, Supabase devuelve error
        // porque id es primary key. En ese caso devolvemos false.
        return false;
      }

      // notifica para que la UI se recargue
      window.dispatchEvent(new Event("reservas:change"));
      return true;
    },

    // [BACKEND] eliminar reserva
    async release(id) {
      const { error } = await supabase
        .from("reservas")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Error eliminando reserva:", error);
      }

      window.dispatchEvent(new Event("reservas:change"));
    },

    // [BACKEND] vaciar todo
    async clear() {
      const { error } = await supabase
        .from("reservas")
        .delete()
        .not("id", "is", null);

      if (error) {
        console.error("Error vaciando reservas:", error);
      }

      window.dispatchEvent(new Event("reservas:change"));
    },

    // Para exportar CSV desde el admin
    async exportCSV() {
      const all = await this.getAll();
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
