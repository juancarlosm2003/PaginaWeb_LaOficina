import Navbar from "./components/navbar";
import Image from "next/image";

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
                  <p className="text-light-emphasis mb-0">{ev.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-dark p-4 rounded-4 mb-4">
          <p className="text-light-emphasis mb-0">
            Realizamos eventos personalizados: cumpleaños, cenas, reuniones,
            corporativos y celebraciones especiales.  
            Puedes consultar disponibilidad, menú especial, precios y más.
          </p>
        </div>
      </main>
    </>
  );
}
