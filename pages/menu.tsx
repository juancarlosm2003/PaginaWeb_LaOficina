import Navbar from "./components/navbar";
import Image from "next/image";

export default function Menu() {
  const platos = [
    {
      nombre: "Carpaccio de res",
      descripcion: "Corte fino marinando en limón y especias.",
      precio: "L. 250",
      imagen: "/plato1.jpg",
    },
    {
      nombre: "Pasta Alfredo",
      descripcion: "Pasta cremosa con queso parmesano fresco.",
      precio: "L. 280",
      imagen: "/plato2.jpg",
    },
    {
      nombre: "Filets a la parrilla",
      descripcion: "Jugoso corte preparado al término deseado.",
      precio: "L. 310",
      imagen: "/plato3.jpg",
    },
    {
      nombre: "Tacos de camarón",
      descripcion: "Camarones salteados con salsa especial.",
      precio: "L. 220",
      imagen: "/plato4.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="section-title">Menú</h1>

        <div className="mb-4 d-flex gap-2 flex-wrap">
          <button className="btn btn-outline-light btn-sm px-3">Entradas</button>
          <button className="btn btn-outline-light btn-sm px-3">Platos fuertes</button>
          <button className="btn btn-outline-light btn-sm px-3">Bebidas</button>
          <button className="btn btn-outline-light btn-sm px-3">Postres</button>
        </div>

        <div className="row g-4">
          {platos.map((plato, index) => (
            <div className="col-md-3" key={index}>
              <div className="card-dark rounded-4 overflow-hidden h-100">
                <div className="position-relative" style={{ height: 160 }}>
                  <Image
                    src={plato.imagen}
                    alt={plato.nombre}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-3">
                  <h5 className="fw-bold mb-1">{plato.nombre}</h5>
                  <p className="text-light-emphasis mb-2">{plato.descripcion}</p>
                  <p className="fw-semibold">{plato.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
