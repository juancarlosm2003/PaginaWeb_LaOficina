import Navbar from "./components/navbar";
import Image from "next/image";

export default function Eventos() {
  const actividades = [
    {
      titulo: "Karaoke Nights",
      descripcion:
        "Todos los viernes vivimos noches llenas de música, diversión y buena vibra. Vení a cantar tus canciones favoritas en un ambiente único.",
      imagen: "/evento1.jpg",
      etiqueta: "Ambiente Nocturno",
    },
    {
      titulo: "Fútbol en Pantalla Gigante",
      descripcion:
        "Transmitimos los partidos más importantes para que los disfrutes con comida increíble, bebidas frías y amigos. ¡Viví la emoción como si estuvieras en el estadio!",
      imagen: "/partidoo.jpg",
      etiqueta: "Deporte",
    },
    {
      titulo: "Promos y Temporadas",
      descripcion:
        "Durante el año ofrecemos promociones especiales, combos, bebidas destacadas y platillos temáticos según la temporada o eventos festivos.",
      imagen: "/evento3.jpg",
      etiqueta: "Especiales del Mes",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-black text-light min-vh-100">
        {/* HERO */}
        <section className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h1 className="section-title mb-3">Actividades en La Oficina</h1>
              <p className="text-light-emphasis mb-3">
                En <strong>La Oficina</strong> siempre pasa algo. Desde noches de
                música y diversión hasta promociones especiales, queremos que cada
                visita sea una experiencia distinta y llena de energía.
              </p>
              <p className="text-light-emphasis">
                Estas son algunas de las actividades que ofrecemos durante el año,
                pensadas para que la pasés bien y disfrutés al máximo cada momento.
              </p>
            </div>

            <div className="col-lg-6">
              <div
                className="rounded-4 overflow-hidden position-relative shadow-soft"
                style={{ height: 320, border: "1px solid #333" }}
              >
                <Image
                  src="/Imgprincipal.png"
                  alt="Actividades en La Oficina"
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
              </div>
            </div>
          </div>
        </section>

        {/* TARJETAS */}
        <section className="pb-5">
          <div className="container">
            <div className="row g-4 mb-4">
              {actividades.map((ev, index) => (
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
                        style={{
                          backgroundColor: "rgba(0,0,0,0.75)",
                          border: "1px solid #ff4d4d",
                        }}
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
          </div>
        </section>

        {/* FOOTER */}
        <footer
          className="py-5 border-top border-secondary text-center text-md-start"
          style={{
            background: "linear-gradient(135deg, #4d0a0a, #700e0e, #8a1515)",
            color: "white",
            fontSize: "1.1rem",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <h5 className="fw-bold mb-2">La Oficina</h5>
                <p className="mb-1">
                  Metropolis Torre 2, Boulevard Suyapa, Tegucigalpa, Honduras
                </p>
                <p className="mb-1">+504 9500-1933</p>
              </div>
              <div className="col-md-6 d-flex flex-column align-items-center align-items-md-end gap-3">
                <a
                  href="https://www.instagram.com/laoficina.hn"
                  target="_blank"
                  className="d-flex align-items-center gap-2 text-white text-decoration-none"
                >
                  <img
                    src="instaicon.webp"
                    style={{
                      width: "28px",
                      height: "28px",
                      filter: "invert(1)",
                    }}
                  />
                  @laoficina
                </a>

                <a
                  href="https://www.facebook.com/laoficinahn"
                  target="_blank"
                  className="d-flex align-items-center gap-2 text-white text-decoration-none"
                >
                  <img
                    src="faceicon.webp"
                    style={{
                      width: "28px",
                      height: "28px",
                      filter: "invert(1)",
                    }}
                  />
                  La Oficina
                </a>

                <a
                  href="https://www.pedidosya.com.hn/restaurantes/tegucigalpa/la-oficina-bar-menu?origin=shop_list"
                  target="_blank"
                  className="d-flex align-items-center gap-2 text-white text-decoration-none"
                >
                  <img
                    src="pedidosya.png"
                    style={{
                      width: "28px",
                      height: "28px",
                      filter: "invert(1)",
                    }}
                  />
                  La Oficina
                </a>
              </div>
            </div>

            <div className="text-center mt-4 small">
              © 2025 La Oficina. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
