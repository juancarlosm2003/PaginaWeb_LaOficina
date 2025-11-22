import Navbar from "./components/navbar";
import Image from "next/image";
import React, { useState } from "react"; 

export default function Eventos() {
  const eventos = [
    {
      titulo: "Noche temática",
      descripcion: "DJ invitado, cocteles especiales y ambiente premium.",
      imagen: "/evento1.jpg",
    },
    {
      titulo: "Eventos privados",
      descripcion: "Reserva La Oficina para corporativos o celebraciones.",
      imagen: "/evento2.jpg",
    },
    {
      titulo: "Promos de temporada",
      descripcion: "Descuentos especiales en combos, bebidas y entradas.",
      imagen: "/evento3.jpg",
    },
  ];

  // -------------------------
  // ESTADO DEL FORMULARIO
  // -------------------------
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    tipo: "",
    fecha: "",
    mensaje: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [mensajeOk, setMensajeOk] = useState<string | null>(null);
  const [mensajeError, setMensajeError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // -------------------------
  // ENVIAR FORMULARIO
  // -------------------------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);
    setMensajeOk(null);
    setMensajeError(null);

    try {
      const res = await fetch("/api/solicitar-evento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setMensajeOk("Solicitud enviada correctamente 🎉");
      setFormData({
        nombre: "",
        correo: "",
        tipo: "",
        fecha: "",
        mensaje: "",
      });
    } catch (err: any) {
      setMensajeError(err.message || "Ocurrió un error");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="section-title">Eventos</h1>

        <div className="row g-4 mb-4">
          {eventos.map((ev, index) => (
            <div className="col-md-4" key={index}>
              <div className="card-dark rounded-4 overflow-hidden h-100">
                <div className="position-relative" style={{ height: 180 }}>
                  <Image
                    src={ev.imagen}
                    alt={ev.titulo}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-3">
                  <h5 className="fw-bold mb-1">{ev.titulo}</h5>
                  <p className="text-light-emphasis mb-0">
                    {ev.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-dark p-4 rounded-4 mb-4">
          <p className="text-light-emphasis mb-0">
            Realizamos eventos personalizados: cumpleaños, cenas, reuniones,
            corporativos y celebraciones especiales. Puedes consultar
            disponibilidad, menú especial, precios y más.
          </p>
        </div>

        <h2 className="section-title">Solicitar evento</h2>

        {/* FORMULARIO FUNCIONAL */}
        <form className="card-dark p-4 rounded-4" onSubmit={handleSubmit}>
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <input
                type="text"
                name="nombre"
                className="form-control form-control-dark"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                name="correo"
                className="form-control form-control-dark"
                placeholder="Correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <input
                type="text"
                name="tipo"
                className="form-control form-control-dark"
                placeholder="Tipo de evento"
                value={formData.tipo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="date"
                name="fecha"
                className="form-control form-control-dark"
                value={formData.fecha}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <textarea
              name="mensaje"
              rows={4}
              className="form-control form-control-dark"
              placeholder="Cuéntanos sobre tu evento"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            className="btn btn-primary-red px-4"
            type="submit"
            disabled={enviando}
          >
            {enviando ? "Enviando..." : "Enviar solicitud"}
          </button>

          {mensajeOk && <p className="text-success mt-3">{mensajeOk}</p>}
          {mensajeError && (
            <p className="text-danger mt-3">{mensajeError}</p>
          )}
        </form>
      </main>
    </>
  );
}
