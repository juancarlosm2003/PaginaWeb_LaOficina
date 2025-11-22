"use client";

import { useEffect } from "react";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cedarville_Cursive } from "next/font/google";
import { Libre_Caslon_Text } from "next/font/google";




const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});
const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],   // pesos disponibles
});


export default function Home() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Navbar />

      <main className="bg-black text-light min-vh-100">

            
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
                style={{
                  height: "70vh",
                  objectFit: "cover",
                  objectPosition: "70% 65%"  
                }}
                alt="carousel image"
              />
              <div className="carousel-caption d-none d-md-block">
               <h5  style={{ fontSize: "3rem" }}>Sabores increíbles</h5>
                <p style={{ fontSize: "1.2rem" }}>Menú exclusivo para ti.</p>
              </div>
        </div>
          

           <div className="carousel-item" data-bs-interval="3000">
              <img
                src="/Imglocal.jpg"
                className="d-block w-100"
                style={{
                  height: "70vh",
                  objectFit: "cover",
                  objectPosition: "60% 75%"  
                }}
                alt="carousel image"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5  style={{ fontSize: "3rem" }}>Los mejores eventos</h5>
                <p style={{ fontSize: "1.2rem" }}>Tu lugar ideal para celebrar.</p>
              </div>
        </div>


          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

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
    <h3
      className={cedarville.className}
      style={{ fontSize: "2.5rem" }}  
    >
      En esta oficina el jefe sos VOS
    </h3>

    <p style={{ fontSize: "1.3rem" }}>   
      ¡Almuerzos y Sopas todos los días!
    </p>
  </div>
</section>


{/* mapa */}
     <section className="py-5 border-secondary mt-5 mb-5">
  <div className="container">

    <div className="row align-items-start">

      <div className="col-lg-6 mb-4 mb-lg-0">
        <div
          className="rounded overflow-hidden shadow"
          style={{ width: "100%", height: "550px" }}
        >
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

          <div className="col-sm-6">
            <div
              className="p-3 h-100 rounded shadow"
              style={{
                background: "linear-gradient(135deg, #4d0a0a, #700e0e, #8a1515)",
                color: "white",
                border: "1px solid #5c0000"
              }}
            >
              <h6 className="text-uppercase small">Horarios</h6>
              <p className="mb-0">
                Lunes a domingo <br />
                12:00 pm – 11:00 pm
              </p>
            </div>
          </div>

          <div className="col-sm-6">
            <div
              className="p-3 h-100 rounded shadow"
              style={{
                background: "linear-gradient(135deg, #4d0a0a, #700e0e, #8a1515)",
                color: "white",
                border: "1px solid #5c0000"
              }}
            >
              <h6 className="text-uppercase small">Ubicación</h6>
              <p className="mb-0">
                Metropolis Torre 2, Boulevard Suyapa, Tegucigalpa, Honduras
              </p>
            </div>
          </div>

          <div className="col-sm-6">
            <div
              className="p-3 h-100 rounded shadow"
              style={{
                background: "linear-gradient(135deg, #4d0a0a, #700e0e, #8a1515)",
                color: "white",
                border: "1px solid #5c0000"
              }}
            >
              <h6 className="text-uppercase small">Reservaciones</h6>
              <p className="mb-0">
                Escríbenos para reservar tu mesa o evento privado.
              </p>
            </div>
          </div>

          <div className="col-sm-6">
            <div
              className="p-3 h-100 rounded shadow"
              style={{
                background: "linear-gradient(135deg, #4d0a0a, #700e0e, #8a1515)",
                color: "white",
                border: "1px solid #5c0000"
              }}
            >
              <h6 className="text-uppercase small">Calificación</h6>
              <p className="mb-0 display-6">★★★★★</p>
              <small className="text-light">Clientes satisfechos</small>
            </div>
          </div>

        </div>

        <div
          className="mt-3 rounded overflow-hidden shadow"
          style={{ flexGrow: 1 }}  
        >
          <img
            src="alitas.jpg"
            alt="Información adicional"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>

      </div>

    </div>
  </div>
</section>


        <section className="py-5 mt-2 border-top border-secondary">
  <div className="container-fluid px-5">

    <div className="row g-5 justify-content-center">

      <div className="col-md-4">
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
          <img 
            src="bebidasnaturales.jpg"
            className="card-img-top"
            alt="Jugos"
            style={{ height: "380px", objectFit: "cover" }}
          />
          <div className="p-4 d-flex flex-column flex-grow-1">
            <h5 className="card-title text-light mb-3">Jugos 100% naturales</h5>
            <p className="card-text text-light">
              Acompaña tu almuerzo con nuestros jugos refrescantes, el complemento perfecto para tus comidas.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
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
          <img 
            src="sopa.jpg"
            className="card-img-top"
            style={{ height: "380px", objectFit: "cover" }}
          />
          <div className="p-4 d-flex flex-column flex-grow-1">
            <h5 className="card-title text-light mb-3">Sopas caseras y deliciosas</h5>
            <p className="card-text text-light">
              Sopas frescas y preparadas con ingredientes naturales que reconfortan el alma.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
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
          <img 
            src="postres.jpg"
            className="card-img-top"
            style={{ height: "380px", objectFit: "cover" }}
          />
          <div className="p-4 d-flex flex-column flex-grow-1">
            <h5 className="card-title text-light mb-3">Postres irresistibles</h5>
            <p className="card-text text-light">
              Endulza tu comida con nuestros postres llenos de sabor. El cierre perfecto para tu almuerzo o cena.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="py-5 border-top border-secondary">
  <div className="container">

    <div className="row align-items-center">

      <div className="col-md-6 mb-4 mb-md-0">
        <img
          src="/bufet.jpeg"   
          alt="Buffet"
          className="img-fluid rounded shadow"
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="col-md-6 text-light">
        <h3 className="mb-3" style={{ fontSize: "2rem" }}>
          Comida Buffet todos los días
        </h3>

        <p className="mb-4" style={{ fontSize: "1.1rem" }}>
          Disfruta de una gran variedad de platillos caseros con nuestro buffet diario.
          Fresco, delicioso y perfecto para tus almuerzos en La Oficina.
        </p>

        <a href="#menu" className="btn btn-primary-red px-4 py-2">
          Ver menú
        </a>
      </div>

    </div>

  </div>
</section>



        <section className="py-5 border-top border-secondary">
          <div className="container">
            <h2 className="h3 mb-4">Reseñas recientes</h2>
            <div className="card-dark p-3 mb-3">
              "Reseña #1"
              <div className="small text-muted mt-2">– Cliente 1</div>
            </div>
            <div className="card-dark p-3">
               "Reseña #2"
              <div className="small text-muted mt-2">– Cliente 2</div>
            </div>
          </div>
        </section>

        
        

        {/*reservar - contacto */}
        <section className="py-5 border-top border-secondary">
          <div className="container">
            <h2 className="h3 mb-4">Contacto / Reservas</h2>

            <form className="card-dark p-4">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small">Nombre</label>
                  <input
                    type="text"
                    className="form-control form-control-dark"
                    placeholder="Nombre"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label small">Teléfono</label>
                  <input
                    type="tel"
                    className="form-control form-control-dark"
                    placeholder="Teléfono"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label small">Número de personas</label>
                  <input
                    type="number"
                    className="form-control form-control-dark"
                    placeholder="Ej. 4"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label small">Fecha</label>
                  <input
                    type="text"
                    className="form-control form-control-dark"
                    placeholder="dd/mm/aaaa"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label small">
                    Mensaje o detalle de tu reserva
                  </label>
                  <textarea
                    className="form-control form-control-dark"
                    rows={4}
                    placeholder="Describe tu reserva.."
                  ></textarea>
                </div>
                <div className="col-12 mt-3">
                  <button type="submit" className="btn btn-primary-red">
                    ENVIAR SOLICITUD
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>


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
        <p className="mb-1"> Metropolis Torre 2, Boulevard Suyapa, Tegucigalpa, Honduras</p>
        <p className="mb-1"> +504 9500-1933</p>
      </div>

      <div className="col-md-6 d-flex flex-column align-items-center align-items-md-end gap-3">

        <a 
          href="https://www.instagram.com/laoficina.hn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
          target="_blank" 
          className="d-flex align-items-center gap-2 text-white text-decoration-none"
        >
          <img
            src="instaicon.webp"
            alt="Instagram"
            style={{ width: "28px", height: "28px", filter: "invert(1)" }}
          />
          @laoficina
        </a>

        <a 
          href="https://www.facebook.com/laoficinahn?locale=es_LA" 
          target="_blank" 
          className="d-flex align-items-center gap-2 text-white text-decoration-none"
        >
          <img
            src="faceicon.webp"
            alt="Facebook"
            style={{ width: "28px", height: "28px", filter: "invert(1)" }}
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