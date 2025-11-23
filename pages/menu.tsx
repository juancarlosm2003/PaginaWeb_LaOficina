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
    { nombre: "Nachos 'El Ejecutivo'", precio: "L 150", descripcion: "Tortillas fritas con frijoles fritos, salsa jalapeña y trozos de res especial y chimol.", imagen: "/nachos.jpg" },
    { nombre: "Picadero", precio: "L 250", descripcion: "Res, cerdo y chorizo BBQ acompañado con deliciosos frijoles, trocitos de queso, tortillas fritas y chimol.", imagen: "/picadero.png" },
    { nombre: "Alitas", precio: "L 185 – 550", descripcion: "14 unidades L. 185 \n 30 unidades L. 320 \n 50 unidades L. 550 \n 6 alas + papas L. 90", imagen: "/alitass.jpg" },
    { nombre: "Dados de Queso", precio: "L. 150", descripcion: "Deliciosos trozos de queso a la parrilla.", imagen: "/dados.jpg" },
    { nombre: "Papas con Queso", precio: "L. 150", descripcion: "Deliciosas papas fritas sazonadas con queso cheddar y tocino.", imagen: "/paps.jpg" },
    { nombre: "Anafre", precio: "L. 150", descripcion: "Deliciosos trozos de queso a la parrilla.", imagen: "/dados.jpg" },
  ],
  hamburguesas: [
    { nombre: "Hamburguesa La Oficina", precio: "L 150", descripcion: "Carne sobre lechuga, tomate, cebolla caramelizada, queso cheddar, aderezo de la casa, tocino y papa.", imagen: "/hambulaofi.jpg" },
    { nombre: "Hamburguesa La Jefa", precio: "L 150", descripcion: "Pechuga de pollo empanizada sobre lechuga y tomate, bañada en salsa búfalo.", imagen: "/hamburguesa2.jpg" },
  ],
  otros: [
    { nombre: "Philly Steak", precio: "L 150", descripcion: "Pan con salsa philly, tiras de carne de res, cebolla y chile verde con papas fritas y refresco.", imagen: "/philly.jpg" },
    { nombre: "Club Sandwich", precio: "L 150", descripcion: "Clásico sandwich con jamón de cerdo, jamon de pollo, queso suizo y cheddar, lechuga, tomate y tocino con papas fritas y refresco.", imagen: "/clubsand.jpg" },
     { nombre: "Sandwich de pollo", precio: "L 150", descripcion: "Emparedado de pollo a la plancha, lechuga, tomate, queso cheddar, chile morrón y salsa rosada con papas fritas y refresco.", imagen: "/clubsand.jpg" },
    
    

    { nombre: "Pizza 'La Oficina'", precio: "L 150", descripcion: "Pizza con salsa especial, queso y un ingrediente.", imagen: "/pizza1.jpg" },
    { nombre: "Pizza 'Full'", precio: "L 200", descripcion: "Pizza con salsa especial y 3 ingredientes.", imagen: "/pizza2.jpg" },
  ],
  mariscos: [
    { nombre: "Camarones Empanizados", precio: "L 260", descripcion: "8 camarones jumbo acompañados de puré de papa y ensalada coleslaw.", imagen: "/camarones1.jpg" },
    { nombre: "Camarones al Ajillo", precio: "L 260", descripcion: "8 camarones jumbo acompañados de puré de papa y ensalada coleslaw.", imagen: "/camarones2.jpg" },
    { nombre: "Camarones Endiablados", precio: "L 260", descripcion: "8 camarones jumbo acompañados ed puré de papa y ensalada coleslaw.", imagen: "/camarones3.jpg" },
    { nombre: "Mar y Tierra", precio: "L 350", descripcion: "6oz de carne de res acompañada con camarones y puré de papa.", imagen: "/marytierra.jpg" },
     { nombre: "Cóctel de Camarones", precio: "L 260", descripcion: "", imagen: "/camarones3.jpg" }
  ],
  sopas: [
    { nombre: "Sopa del día", precio: "L 120", descripcion: "Pollo / Mondongo / Capirotada / Frijoles (según el día).", imagen: "/sopa1.jpg" },
    { nombre: "Sopa de Caracol", precio: "L 150", descripcion: "Clásica sopa típica hondureña de caracol.", imagen: "/caracol.jpg" },
    { nombre: "Sopa Marinera", precio: "L 200", descripcion: "Sopa de mariscos cremosa y llena de sabor.", imagen: "/marinera.jpg" },
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
                  <p className="text-light-emphasis mb-2">{plato.descripcion}</p>
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
