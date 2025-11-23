"use client";

import { useEffect } from "react";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cedarville_Cursive, Libre_Caslon_Text } from "next/font/google";

const cedarville = Cedarville_Cursive({ weight: "400" });
const libreCaslon = Libre_Caslon_Text({ weight: ["400", "700"] });

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <>
      <Navbar />

      <main className="bg-black text-light min-vh-100">
        {/* Carousel */}
        <section className="container-fluid p-0">
          <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  src="/Imgprincipal.png"
                  className="d-block w-100"
                  style={{ height: "70vh", objectFit: "cover" }}
                  alt="slide1"
                />
              </div>

              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="/Imgcomida.jpg"
                  className="d-block w-100"
                  style={{ height: "70vh", objectFit: "cover", objectPosition: "70% 65%" }}
                  alt="slide2"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 style={{ fontSize: "3rem" }}>Sabores increíbles</h5>
                  <p style={{ fontSize: "1.2rem" }}>Menú exclusivo para ti.</p>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="/Imglocal.jpg"
                  className="d-block w-100"
                  style={{ height: "70vh", objectFit: "cover", objectPosition: "60% 75%" }}
                  alt="slide3"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5 style={{ fontSize: "3rem" }}>Los mejores eventos</h5>
                  <p style={{ fontSize: "1.2rem" }}>Tu lugar ideal para celebrar.</p>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </section>

        {/* Sección principal */}
        <section
          className="py-5 d-flex justify-content-center text-center"
          style={{
            background: "white",
            color: "black",
            width: "100%",
            borderTop: "1px solid #444",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <div className="container">
            <h3 className={cedarville.className} style={{ fontSize: "2.5rem" }}>
              En esta oficina el jefe sos VOS
            </h3>
            <p style={{ fontSize: "1.3rem" }}>¡Almuerzos y Sopas todos los días!</p>
          </div>
        </section>

        {/* Mapa y info */}
        <section
          className="border-secondary mt-5 mb-5"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="rounded overflow-hidden shadow" style={{ width: "100%", height: "550px" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src="https://maps.google.com/maps?q=3RP7%2B9FM%2C%20Tegucigalpa%2C%20Francisco%20Moraz%C3%A1n%2C%20Honduras&t=m&z=15&ie=UTF8&iwloc=B&output=embed"
                    style={{ border: 0 }}
                  ></iframe>
                </div>
              </div>

              <div className="col-lg-6 d-flex flex-column" style={{ height: "550px" }}>
                <div className="row g-3">
                  {[
                    { title: "Horarios", text: "Lunes a domingo \n12:00 pm – 11:00 pm" },
                    { title: "Ubicación", text: "Metropolis Torre 2, Boulevard Suyapa, Tegucigalpa, Honduras" },
                    { title: "Reservaciones", text: "Escríbenos para reservar tu mesa o evento privado." },
                    { title: "Calificación", text: "★★★★★\nClientes satisfechos" },
                  ].map((item, i) => (
                    <div className="col-sm-6" key={i}>
                      <div
                        className="p-3 h-100 rounded shadow"
                        style={{
                          background: "linear-gradient(135deg, #4d0a0a, #700e0e, #8a1515)",
                          color: "white",
                          border: "1px solid #5c0000",
                          whiteSpace: "pre-line",
                        }}
                      >
                        <h6 className="text-uppercase small">{item.title}</h6>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded overflow-hidden shadow" style={{ flexGrow: 1 }}>
                  <img
                    src="alitas.jpg"
                    alt="Información adicional"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tarjetas de comida */}
        <section className="py-5 mt-2 border-top border-secondary">
          <div className="container-fluid px-5">
            <div className="row g-5 justify-content-center">
              {[
                { img: "bebidasnaturales.jpg", title: "Jugos 100% naturales", text: "Acompaña tu almuerzo con nuestros jugos refrescantes, el complemento perfecto para tus comidas." },
                { img: "sopa.jpg", title: "Sopas caseras y deliciosas", text: "Sopas frescas y preparadas con ingredientes naturales que reconfortan el alma." },
                { img: "postres.jpg", title: "Postres irresistibles", text: "Endulza tu comida con nuestros postres llenos de sabor. El cierre perfecto para tu almuerzo o cena." },
              ].map((item, i) => (
                <div className="col-md-4" key={i}>
                  <div
                    className="h-100 d-flex flex-column"
                    style={{
                      backgroundColor: "#510910ff",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.55)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.4)";
                    }}
                  >
                    <img src={item.img} className="card-img-top" style={{ height: "380px", objectFit: "cover" }} />
                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <h5 className="card-title text-light mb-3">{item.title}</h5>
                      <p className="card-text text-light">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección Buffet */}
        <section className="py-5 border-top border-secondary">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src="/bufet.jpeg"
                  className="img-fluid rounded shadow"
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-6 text-light">
                <h3 className="mb-3" style={{ fontSize: "2rem" }}>Comida Buffet todos los días</h3>
                <p className="mb-4" style={{ fontSize: "1.1rem" }}>
                  Explorá nuestros platillos del día y disfrutá comida casera fresca, variada y deliciosa.
                </p>
                <a
                  href="/menu"
                  className="px-4 py-2"
                  style={{ backgroundColor: "#5b0000", color: "white", borderRadius: "6px", textDecoration: "none", display: "inline-block" }}
                >
                  Ver menú
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Reseñas */}
        <section className="py-5 border-top border-secondary">
          <div className="container">
            <h2 className="h3 mb-4">Reseñas recientes</h2>
            <div className="card-dark p-3 mb-3">"Reseña #1"<div className="small text-muted mt-2">– Cliente 1</div></div>
            <div className="card-dark p-3">"Reseña #2"<div className="small text-muted mt-2">– Cliente 2</div></div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-5 border-top border-secondary text-center text-md-start" style={{ background: "linear-gradient(135deg, #4d0a0a, #700e0e, #8a1515)", color: "white", fontSize: "1.1rem" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <h5 className="fw-bold mb-2">La Oficina</h5>
                <p className="mb-1">Metropolis Torre 2, Boulevard Suyapa, Tegucigalpa, Honduras</p>
                <p className="mb-1">+504 9500-1933</p>
              </div>
              <div className="col-md-6 d-flex flex-column align-items-center align-items-md-end gap-3">
                <a href="https://www.instagram.com/laoficina.hn" target="_blank" className="d-flex align-items-center gap-2 text-white text-decoration-none">
                  <img src="instaicon.webp" alt="Instagram" style={{ width: "28px", height: "28px", filter: "invert(1)" }} />
                  @laoficina
                </a>
                <a href="https://www.facebook.com/laoficinahn" target="_blank" className="d-flex align-items-center gap-2 text-white text-decoration-none">
                  <img src="faceicon.webp" alt="Facebook" style={{ width: "28px", height: "28px", filter: "invert(1)" }} />
                  La Oficina
                </a>
              </div>
            </div>
            <div className="text-center mt-4 small">© 2025 La Oficina. Todos los derechos reservados.</div>
          </div>
        </footer>
      </main>
    </>
  );
}
