import Navbar from "./components/navbar";
import Image from "next/image";

export default function QuienesSomos() {
  return (
    <>
      <Navbar />

      <main className="container py-5 text-light">
        {/* Título */}
        <h1 className="section-title mb-5 text-center">Quiénes somos</h1>

        {/* Sección de Historia */}
        <div className="row g-5 align-items-center mb-5">
          {/* Texto */}
          <div className="col-lg-6">
            <h3 className="text-danger mb-3 fw-bold">Nuestra historia</h3>
            <p className="text-light-emphasis fs-5">
              <strong>La Oficina</strong> nace como un espacio donde la
              gastronomía, la música y el ambiente íntimo se combinan para
              brindar una experiencia premium en Tegucigalpa.
            </p>

            <p className="text-light-emphasis">
              Desde nuestra apertura, hemos trabajado con pasión,
              creatividad y dedicación para crear un lugar donde cada visita
              se sienta única. Ya sea para almorzar, cenar o celebrar,
              en La Oficina siempre encontrarás un ambiente acogedor,
              elegante y lleno de sabor.
            </p>
          </div>

          {/* Imagen */}
          <div className="col-lg-6">
            <div
              className="rounded-4 overflow-hidden shadow-lg position-relative"
              style={{
                height: 340,
                border: "1px solid #5c0000",
                transition: "transform .3s ease",
              }}
            >
              <Image
                src="/Imglocal.jpg"
                alt="Ambiente del restaurante La Oficina"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="row g-4 mb-5">
          {/* Misión */}
          <div className="col-md-6">
            <div
              className="card-dark p-4 rounded-4 h-100 shadow"
              style={{ transition: "transform .3s ease" }}
            >
              <h4 className="text-danger text-uppercase mb-2">Misión</h4>
              <p className="text-light-emphasis mb-0">
                Crear experiencias gastronómicas memorables mediante sabores
                auténticos, ambiente excepcional y un servicio cercano,
                cálido y profesional.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="col-md-6">
            <div
              className="card-dark p-4 rounded-4 h-100 shadow"
              style={{ transition: "transform .3s ease" }}
            >
              <h4 className="text-danger text-uppercase mb-2">Visión</h4>
              <p className="text-light-emphasis mb-0">
                Ser el restaurante de referencia en Tegucigalpa por nuestra
                calidad culinaria, detalle en la ambientación y excelencia en
                la organización de eventos.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="py-4 mb-5">
          <h3 className="text-center text-danger mb-4 fw-bold">Nuestros Valores</h3>
          <div className="row g-4">
            {[
              {
                title: "Pasión",
                text: "Amamos lo que hacemos y lo reflejamos en cada plato y cada servicio.",
              },
              {
                title: "Calidad",
                text: "Ingredientes frescos, sabores auténticos y excelencia en cada detalle.",
              },
              {
                title: "Hospitalidad",
                text: "Hacemos sentir a cada cliente como en casa, con calidez y respeto.",
              },
              {
                title: "Compromiso",
                text: "Trabajamos con dedicación para ofrecer una experiencia impecable.",
              },
            ].map((v, i) => (
              <div className="col-md-3" key={i}>
                <div
                  className="p-4 h-100 rounded-4 shadow card-dark text-center"
                  style={{
                    transition: "transform .3s ease, box-shadow .3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0,0,0,0.55)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0,0,0,0.4)";
                  }}
                >
                  <h5 className="text-danger fw-bold mb-2">{v.title}</h5>
                  <p className="text-light-emphasis">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen final / Logo */}
        <div className="d-flex justify-content-center mb-5">
          <div
            className="rounded-4 overflow-hidden shadow position-relative"
            style={{
              width: "420px",
              height: "240px",
              border: "1px solid #5c0000",
            }}
          >
            <Image
              src="/Imgprincipal.png"
              alt="Logo La Oficina"
              fill
              style={{ objectFit: "contain", backgroundColor: "#111" }}
            />
          </div>
        </div>
      </main>
    </>
  );
}
