import Navbar from "./components/navbar";
import Image from "next/image";

export default function Eventos() {
  const eventos = [
    {
      titulo: "Karaoke",
      descripcion: "Vení a cantar con nosotros todos los viernes en nuestras Karaoke Nights conbuena música y ambiente encendido.”",
      imagen: "/evento1.jpg",
      etiqueta: "After office",
    },
    {
      titulo: "Fútbol en Vivo",
      descripcion: "Viví la emoción del deporte en pantalla gigante. Disfrutá con tus amigos los mejores partidos en un ambiente único.",
      imagen: "/partidoo.jpg",
      etiqueta: "Transmisión en Vivo",
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
        <section className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h1 className="section-title mb-3">Eventos en La Oficina</h1>
              <p className="text-light-emphasis mb-3">
                Convertí tus reuniones, cumpleaños y celebraciones especiales en una experiencia
                diferente. Contamos con comida, bar, música y ambiente ideal para tu grupo.
              </p>
              
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
              </div>
            </div>
          </div>
        </section>

        {/* TARJETAS DE EVENTOS */}
        <section className="pb-5">
          <div className="container">

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

          </div>
        </section>

        
      </main>

             <footer
          className="py-5 border-top border-secondary text-center text-md-start"
          style={{ background: "linear-gradient(135deg, #4d0a0a, #700e0e, #8a1515)", color: "white", fontSize: "1.1rem" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <h5 className="fw-bold mb-2">La Oficina</h5>
                <p className="mb-1">Metropolis Torre 2, Boulevard Suyapa, Tegucigalpa, Honduras</p>
                <p className="mb-1">+504 9500-1933</p>
              </div>
              <div className="col-md-6 d-flex flex-column align-items-center align-items-md-end gap-3">
                <a
                  href="https://www.instagram.com/laoficina.hn"
                  target="_blank"
                  className="d-flex align-items-center gap-2 text-white text-decoration-none"
                >
                  <img src="instaicon.webp"  style={{ width: "28px", height: "28px", filter: "invert(1)" }} />
                  @laoficina
                </a>

                <a
                  href="https://www.facebook.com/laoficinahn"
                  target="_blank"
                  className="d-flex align-items-center gap-2 text-white text-decoration-none"
                >
                  <img src="faceicon.webp"  style={{ width: "28px", height: "28px", filter: "invert(1)" }} />
                  La Oficina
                </a>

                 <a
                  href="https://www.pedidosya.com.hn/restaurantes/tegucigalpa/la-oficina-bar-menu?origin=shop_list"
                  target="_blank"
                  className="d-flex align-items-center gap-2 text-white text-decoration-none"
                >
                  <img src="pedidosya.png"  style={{ width: "28px", height: "28px", filter: "invert(1)" }} />
                  La Oficina
                </a>

              </div>
            </div>
            <div className="text-center mt-4 small">© 2025 La Oficina. Todos los derechos reservados.</div>
          </div>
        </footer>
    </>
  );
}
