import Navbar from "./components/navbar";
import Image from "next/image";

export default function QuienesSomos() {
  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="section-title mb-4">Quiénes somos</h1>

        <div className="row g-4 mb-5 align-items-center">
          <div className="col-lg-6">
            <p className="text-light-emphasis fs-5">
              <strong>La Oficina</strong> nace como un espacio que combina
              gastronomía de autor, música, ambiente íntimo y experiencias
              premium en Tegucigalpa.
            </p>
            <p className="text-light-emphasis">
              Nuestro equipo trabaja con pasión, creatividad y compromiso
              para ofrecer un servicio de alto nivel a cada uno de nuestros
              invitados.
            </p>
          </div>

          <div className="col-lg-6">
            <div
              className="rounded-4 overflow-hidden border border-secondary shadow-soft position-relative"
              style={{ height: 260 }}
            >
              <Image
                src="/Imagen.jpg"         
                alt="Ambiente del restaurante La Oficina"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card-dark p-4 rounded-4 h-100">
              <h4 className="text-danger text-uppercase mb-2">Misión</h4>
              <p className="text-light-emphasis mb-0">
                Crear experiencias gastronómicas inolvidables mediante sabores
                únicos, ambiente excepcional y un servicio cercano, cálido y
                profesional.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-dark p-4 rounded-4 h-100">
              <h4 className="text-danger text-uppercase mb-2">Visión</h4>
              <p className="text-light-emphasis mb-0">
                Ser el restaurante de referencia en Tegucigalpa por nuestra
                calidad culinaria, ambiente distintivo y excelencia en la
                organización de eventos.
              </p>
            </div>
          </div>
        </div>
        
        <div className="d-flex justify-content-center">
          <div
            className="rounded-4 border border-secondary overflow-hidden shadow-soft position-relative"
            style={{ width: "420px", height: "240px" }}
          >
            <Image
              src="/Logo.jpg"           
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
