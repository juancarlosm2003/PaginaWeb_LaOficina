import Navbar from "./components/navbar";
import Image from "next/image";

export default function Eventos() {
  const eventos = [
    {
      titulo: "Noches temáticas",
      descripcion: "DJ invitado, cocteles especiales y ambiente premium para after office o fines de semana.",
      imagen: "/evento1.jpg",
      etiqueta: "After office",
    },
    {
      titulo: "Eventos privados",
      descripcion: "Renta La Oficina para cumpleaños, corporativos, reuniones o celebraciones especiales.",
      imagen: "/Imglocal.jpg",
      etiqueta: "Privados",
    },
    {
      titulo: "Promos de temporada",
      descripcion: "Combos, bebidas y platillos especiales según la temporada o fechas especiales.",
      imagen: "/evento3.jpg",
      etiqueta: "Promociones",
    },
  ];

  const whatsappUrl =
    "https://wa.me/50498990034?text=Hola,%20me%20gustaría%20cotizar%20un%20evento%20en%20La%20Oficina.";

  return (
    <>
      <Navbar />

      <main className="bg-black text-light min-vh-100">
        {/* HERO */}
        <section className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h1 className="section-title mb-3">Eventos en La Oficina</h1>
              <p className="text-light-emphasis mb-3">
                Convertí tus reuniones, cumpleaños y celebraciones especiales en una experiencia
                diferente. Contamos con comida, bar, música y ambiente ideal para tu grupo.
              </p>
              <p className="text-light-emphasis mb-4">
                Podemos adaptar el espacio según la cantidad de personas y el tipo de evento que
                tengas en mente.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg"
                style={{
                  backgroundColor: "#25D366",
                  color: "black",
                  borderRadius: "999px",
                  fontWeight: 600,
                  paddingInline: "2.5rem",
                }}
              >
                Reservar por WhatsApp
              </a>
            </div>

            <div className="col-lg-6">
              <div
                className="rounded-4 overflow-hidden position-relative shadow-soft"
                style={{ height: 320, border: "1px solid #333" }}
              >
                <Image
                  src="/Imgprincipal.png"
                  alt="Eventos en La Oficina"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
                  }}
                />
                <div className="position-absolute bottom-0 start-0 p-4">
                  <h3 className="fw-bold mb-1">Tu evento, a otro nivel</h3>
                  <p className="mb-0 text-light-emphasis">
                    Preguntá por paquetes de comida, bebidas y música.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TARJETAS DE EVENTOS */}
        <section className="pb-5">
          <div className="container">
            <h2 className="h4 mb-4">Lo que podemos hacer por vos</h2>

            <div className="row g-4 mb-4">
              {eventos.map((ev, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card-dark rounded-4 overflow-hidden h-100 border border-secondary">
                    <div className="position-relative" style={{ height: 190 }}>
                      <Image
                        src={ev.imagen}
                        alt={ev.titulo}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <span
                        className="position-absolute top-0 start-0 m-2 px-3 py-1 small rounded-pill"
                        style={{ backgroundColor: "rgba(0,0,0,0.75)", border: "1px solid #ff4d4d" }}
                      >
                        {ev.etiqueta}
                      </span>
                    </div>
                    <div className="p-3 d-flex flex-column">
                      <h5 className="fw-bold mb-2">{ev.titulo}</h5>
                      <p className="text-light-emphasis mb-0">{ev.descripcion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bloque de info rápida */}
            <div className="card-dark p-4 rounded-4 mb-4">
              <h3 className="h5 mb-3">¿Qué incluye un evento en La Oficina?</h3>
              <div className="row g-3">
                <div className="col-md-4">
                  <p className="mb-1 fw-semibold">🍽 Menú especial</p>
                  <p className="text-light-emphasis mb-0">
                    Opciones de buffet, platos a la carta o bocas para compartir.
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-1 fw-semibold">🎵 Ambiente y música</p>
                  <p className="text-light-emphasis mb-0">
                    Música ambiental, DJ invitado o lo que coordinemos con vos.
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-1 fw-semibold">👥 Capacidad y organización</p>
                  <p className="text-light-emphasis mb-0">
                    Te ayudamos a organizar según el número de invitados y tipo de evento.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA WHATSAPP */}
            <div className="text-center py-4">
              <p className="text-light-emphasis mb-3">
                Contanos fecha tentativa, cantidad de personas y qué tipo de evento querés hacer.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg d-inline-flex align-items-center gap-2"
                style={{
                  backgroundColor: "#25D366",
                  color: "black",
                  borderRadius: "999px",
                  fontWeight: 600,
                  paddingInline: "2.5rem",
                }}
              >
                <span>Escribir por WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
