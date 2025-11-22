import Navbar from "./components/navbar";
import Image from "next/image";
import { useState } from "react";

// Tipo para cada plato
type Plato = {
  nombre: string;
  precio: string;
  descripcion: string;
  imagen: string;
};

// Datos de categorías
const categoriasData = {
  picar: [
    {
      nombre: "Nachos 'El Ejecutivo'",
      precio: "L 150",
      descripcion: "Tortillas fritas con frijoles, salsa jalapeña y carne.",
      imagen: "/nachos.jpg",
    },
    {
      nombre: "Picadero",
      precio: "L 250",
      descripcion: "Res, cerdo y chorizo BBQ con frijoles y chimol.",
      imagen: "/picadero.jpg",
    },
    {
      nombre: "Alitas",
      precio: "L 185 – 550",
      descripcion: "Alitas en salsa al gusto (BBQ, Honey, Mustard, Furiosa).",
      imagen: "/alitas.jpg",
    },
    {
      nombre: "Dados de Queso",
      precio: "L 150",
      descripcion: "Crujientes cubos de queso empanizado.",
      imagen: "/dados.jpg",
    },
  ],

  hamburguesas: [
    {
      nombre: "Hamburguesa La Oficina",
      precio: "L 150",
      descripcion: "Carne, queso cheddar, chimol y papas.",
      imagen: "/hamburguesa1.jpg",
    },
    {
      nombre: "Hamburguesa La Jefa",
      precio: "L 150",
      descripcion: "Pollo empanizado en salsa búfalo con papas.",
      imagen: "/hamburguesa2.jpg",
    },
  ],

  otros: [
    {
      nombre: "Philly Steak",
      precio: "L 150",
      descripcion:
        "Pan con salsa philly y carne de res acompañada de papas.",
      imagen: "/philly.jpg",
    },
    {
      nombre: "Club Sandwich",
      precio: "L 150",
      descripcion: "Clásico sandwich con jamón, pollo, queso y papas.",
      imagen: "/club.jpg",
    },
    {
      nombre: "Pizza 'La Oficina'",
      precio: "L 150",
      descripcion: "Pizza con salsa especial, queso y un ingrediente.",
      imagen: "/pizza1.jpg",
    },
    {
      nombre: "Pizza 'Full'",
      precio: "L 200",
      descripcion: "Pizza con salsa especial y 3 ingredientes.",
      imagen: "/pizza2.jpg",
    },
  ],

  mariscos: [
    {
      nombre: "Camarones Empanizados",
      precio: "L 260",
      descripcion:
        "8 camarones jumbo empanizados con ensalada coleslaw y puré.",
      imagen: "/camarones1.jpg",
    },
    {
      nombre: "Camarones al Ajillo",
      precio: "L 260",
      descripcion:
        "Camarones salteados en mantequilla, ajo y especias con acompañamiento.",
      imagen: "/camarones2.jpg",
    },
    {
      nombre: "Camarones Endiablados",
      precio: "L 260",
      descripcion: "Camarones jumbo en salsa picante.",
      imagen: "/camarones3.jpg",
    },
    {
      nombre: "Mar y Tierra",
      precio: "L 350",
      descripcion: "Carne con camarones al ajillo y acompañamientos.",
      imagen: "/marytierra.jpg",
    },
  ],

  sopas: [
    {
      nombre: "Sopa del día",
      precio: "L 120",
      descripcion: "Pollo / Mondongo / Capirotada / Frijoles (según el día).",
      imagen: "/sopa1.jpg",
    },
    {
      nombre: "Sopa de Caracol",
      precio: "L 150",
      descripcion: "Clásica sopa típica hondureña de caracol.",
      imagen: "/caracol.jpg",
    },
    {
      nombre: "Sopa Marinera",
      precio: "L 200",
      descripcion: "Sopa de mariscos cremosa y llena de sabor.",
      imagen: "/marinera.jpg",
    },
  ],
} as const;

// 🔑 Tipo de las llaves de categorías: "picar" | "hamburguesas" | "otros" | "mariscos" | "sopas"
type CategoriaKey = keyof typeof categoriasData;

export default function Menu() {
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaKey>("picar");

  // Lista de platos según la categoría seleccionada
  const platos: Plato[] = categoriasData[categoriaActiva];

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="section-title">Menú</h1>

        {/* Botones de categorías */}
        <div className="mb-4 d-flex gap-2 flex-wrap">
          <button
            onClick={() => setCategoriaActiva("picar")}
            className={`btn btn-sm px-3 ${
              categoriaActiva === "picar"
                ? "btn-primary-red"
                : "btn-outline-light"
            }`}
          >
            Para picar
          </button>

          <button
            onClick={() => setCategoriaActiva("hamburguesas")}
            className={`btn btn-sm px-3 ${
              categoriaActiva === "hamburguesas"
                ? "btn-primary-red"
                : "btn-outline-light"
            }`}
          >
            Hamburguesas
          </button>

          <button
            onClick={() => setCategoriaActiva("otros")}
            className={`btn btn-sm px-3 ${
              categoriaActiva === "otros"
                ? "btn-primary-red"
                : "btn-outline-light"
            }`}
          >
            Otros
          </button>

          <button
            onClick={() => setCategoriaActiva("mariscos")}
            className={`btn btn-sm px-3 ${
              categoriaActiva === "mariscos"
                ? "btn-primary-red"
                : "btn-outline-light"
            }`}
          >
            Mariscos
          </button>

          <button
            onClick={() => setCategoriaActiva("sopas")}
            className={`btn btn-sm px-3 ${
              categoriaActiva === "sopas"
                ? "btn-primary-red"
                : "btn-outline-light"
            }`}
          >
            Sopas
          </button>
        </div>

        {/* Grid de platos */}
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

                <div className="p-3 d-flex flex-column h-100">
                  <h5 className="fw-bold mb-1">{plato.nombre}</h5>
                  <p className="text-light-emphasis mb-2">
                    {plato.descripcion}
                  </p>
                  <p className="fw-semibold mt-auto">{plato.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
