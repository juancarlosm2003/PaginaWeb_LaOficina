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
    { nombre: "Nachos 'El Ejecutivo'", precio: "L 150", descripcion: "Tortillas fritas con frijoles fritos, queso mozarella, salsa jalapeña, trozos de res especial y chimol.", imagen: "/nachos.jpg" },
    { nombre: "Picadero", precio: "L 250", descripcion: "Res, cerdo y chorizo BBQ acompañado con deliciosos frijoles, trocitos de queso, tortillas fritas y chimol.", imagen: "/picadero.png" },
    { nombre: "Alitas", precio: "L 185 – 550", descripcion: "14 unidades L. 185 \n 30 unidades L. 320 \n 50 unidades L. 550 \n 6 alas + papas L. 90", imagen: "/alitass.jpg" },
    { nombre: "Dados de Queso", precio: "L. 150", descripcion: "Deliciosos trozos de queso a la parrilla.", imagen: "/dados.jpg" },
    { nombre: "Papas con Queso", precio: "L. 150", descripcion: "Deliciosas papas fritas sazonadas con queso cheddar y tocino.", imagen: "/papasqueso.png" },
    { nombre: "Anafre", precio: "L. 150", descripcion: "Nuestros deliciosos frijoles de la casa, compañados de: \nMantequilla L. 120 \n Quesillo L. 150 \n Chorizo y Quesillo L. 180", imagen: "/anafre.webp" },
  ],
  hamburguesas: [
    { nombre: "Hamburguesa La Oficina", precio: "L 150", descripcion: "Carne sobre lechuga, tomate, cebolla caramelizada, queso cheddar, aderezo de la casa, tocino y papa.", imagen: "/hambulaofi.jpg" },
    { nombre: "Hamburguesa La Jefa", precio: "L 150", descripcion: "Pechuga de pollo empanizada sobre lechuga y tomate, bañada en salsa búfalo.", imagen: "/lajefa.jpg" },
  ],
  otros: [
    { nombre: "Philly Steak", precio: "L 150", descripcion: "Pan con salsa philly, tiras de carne de res, cebolla y chile verde con papas fritas y refresco.", imagen: "/phillyy.jpg" },
    { nombre: "Club Sandwich", precio: "L 150", descripcion: "Clásico sandwich con jamón de cerdo, jamon de pollo, queso suizo y cheddar, lechuga, tomate y tocino con papas fritas y refresco.", imagen: "/clubsand.jpg" },
    { nombre: "Sandwich de pollo", precio: "L 150", descripcion: "Emparedado de pollo a la plancha, lechuga, tomate, queso cheddar, chile morrón y salsa rosada con papas fritas y refresco.", imagen: "/sandpollo.jpg" },
    { nombre: "Tacos", precio: "L 150", descripcion: "Deliciosos tacos con ensalda de repollo, salsa y queso. Elije entre: \n 3 tacos de pollo L. 100 \n 3 tacos de res L. 100", imagen: "/tacos.jpg" },
    { nombre: "Empanadas La Oficina", precio: "L 70", descripcion: "Orden de 2 empanadas de carne.", imagen: "/empanadas.jpg" },
    { nombre: "Chuleta con Tajadas", precio: "L 110", descripcion: "Chuleta a la parrilla acompañada de tajadas de guineo verde.", imagen: "/chuleta.jpg" },
    { nombre: "Pollo Chuco", precio: "L 110", descripcion: "Pollo empanizado acompañado de tajadas de guineo verde y deliciosa salsa especial La Oficina.", imagen: "/pollochuco.jpg" },
    { nombre: "Pizza 'La Oficina'", precio: "L 150", descripcion: "Pizza con salsa especial, queso y un ingrediente.", imagen: "/pizza.avif" },
    { nombre: "Pizza 'Full'", precio: "L 200", descripcion: "Pizza con salsa especial y 3 ingredientes.", imagen: "/pizza3.jpg" },
    { nombre: "Jugos Naturales", precio: "L 65", descripcion: "Refrescantes jugos 100% naturales, preparados con frutas frescas de temporada.", imagen: "/jugos.jpg" }
  ],
  mariscos: [
    { nombre: "Camarones Empanizados", precio: "L 260", descripcion: "8 camarones jumbo acompañados de puré de papa y ensalada coleslaw.", imagen: "/empanizados.jpg" },
    { nombre: "Camarones al Ajillo", precio: "L 260", descripcion: "8 camarones jumbo acompañados de puré de papa y ensalada coleslaw.", imagen: "/ajillo.avif" },
    { nombre: "Camarones Endiablados", precio: "L 260", descripcion: "8 camarones jumbo acompañados ed puré de papa y ensalada coleslaw.", imagen: "/endiablados.jpg" },
    { nombre: "Mar y Tierra", precio: "L 350", descripcion: "6oz de carne de res acompañada con camarones y puré de papa.", imagen: "/martierra.jpg" },
     { nombre: "Cóctel de Camarones", precio: "L 260", descripcion: "Delicioso cóctel preparado con camarones frescos, bañados en una mezcla especial de salsa rosada, limón y especias.", imagen: "/coctel.jpg" }
  ],
  sopas: [
    { nombre: "Sopa del día", precio: "L 120", descripcion: "Pollo / Mondongo / Capirotada / Frijoles (según el día).", imagen: "/sopaa.jpg" },
    { nombre: "Sopa de Caracol", precio: "L 150", descripcion: "Clásica sopa típica hondureña de caracol.", imagen: "/sopacaracol.jpg" },
    { nombre: "Sopa Marinera", precio: "L 200", descripcion: "Sopa de mariscos cremosa y llena de sabor.", imagen: "/marinera.jpg" },
    { nombre: "Tapado", precio: "L 200", descripcion: "Tradicional tapado hondureño preparado con una mezcla de mariscos y carnes.", imagen: "/tapado.jpg" },
  ],
} as const;

type CategoriaKey = keyof typeof categoriasData;
type CategoriaActiva = CategoriaKey | "todos";

export default function Menu() {
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaActiva>("todos");

  const platos: Plato[] = categoriaActiva === "todos"? ([] as Plato[]).concat(...Object.values(categoriasData)): categoriasData[categoriaActiva];

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="section-title mb-4">Menú</h1>

        <div className="mb-5 d-flex gap-2 flex-wrap">
          <button
            onClick={() => setCategoriaActiva("todos")}
            className={`btn btn-sm px-3 btn-menu ${categoriaActiva === "todos" ? "active-btn" : "inactive-btn"}`}
          >
            Todos
          </button>

          {Object.keys(categoriasData).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat as CategoriaKey)}
              className={`btn btn-sm px-3 btn-menu ${categoriaActiva === cat ? "active-btn" : "inactive-btn"}`
              }
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {platos.map((plato, index) => (
            <div className="col-md-3" key={index}>
              <div className="card-dark rounded-4 overflow-hidden menu-card" style={{ minHeight: 320 }}>
                <div className="position-relative" style={{ height: 160 }}>
                  <Image src={plato.imagen} alt={plato.nombre} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="p-3 d-flex flex-column">
                  <h5 className="fw-bold mb-2">{plato.nombre}</h5>
<p className="descripcion mb-2">{plato.descripcion}</p>
                  <p className="fw-semibold precio">{plato.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

    </>
  );
}
