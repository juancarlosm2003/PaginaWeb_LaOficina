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

// Link del grupo de WhatsApp (La Oficina)
const grupoWhatsapp =
  "https://chat.whatsapp.com/CC9MOtzWmpU9qKXGOMpPsd";

// Datos de categorías
const categoriasData = {
  picar: [
    { nombre: "Nachos 'El Ejecutivo'", precio: "L 150", descripcion: "Tortillas fritas con frijoles fritos, queso mozarella, salsa jalapeña, trozos de res especial y chimol.", imagen: "/nachos.jpg" },
    { nombre: "Picadero", precio: "L 250", descripcion: "Res, cerdo y chorizo BBQ acompañado con frijoles, queso, tortillas fritas y chimol.", imagen: "/picadero.png" },
    { nombre: "Alitas", precio: "L 185 – 550", descripcion: "14u L.185 | 30u L.320 | 50u L.550 | 6 alas + papas L. 90", imagen: "/alitass.jpg" },
    { nombre: "Dados de Queso", precio: "L. 150", descripcion: "Deliciosos trozos de queso a la parrilla.", imagen: "/dados.jpg" },
    { nombre: "Papas con Queso", precio: "L. 150", descripcion: "Papas fritas con queso cheddar y tocino.", imagen: "/papasqueso.png" },
    { nombre: "Anafre", precio: "L. 150", descripcion: "Frijoles con: Mantequilla L.120 | Quesillo L.150 | Chorizo y Quesillo L.180", imagen: "/anafre.webp" },
  ],
  hamburguesas: [
    { nombre: "Hamburguesa La Oficina", precio: "L 150", descripcion: "Carne, vegetales frescos, queso cheddar, aderezo, tocino y papas.", imagen: "/hambulaofi.jpg" },
    { nombre: "Hamburguesa La Jefa", precio: "L 150", descripcion: "Pechuga empanizada con salsa búfalo.", imagen: "/lajefa.jpg" },
  ],
  otros: [
    { nombre: "Philly Steak", precio: "L 150", descripcion: "Carne de res, queso, vegetales, papas y refresco.", imagen: "/phillyy.jpg" },
    { nombre: "Club Sandwich", precio: "L 150", descripcion: "Clásico sandwich con papas y refresco.", imagen: "/clubsand.jpg" },
    { nombre: "Sandwich de pollo", precio: "L 150", descripcion: "Pollo a la plancha con queso y papas.", imagen: "/sandpollo.jpg" },
    { nombre: "Tacos", precio: "L 100", descripcion: "3 tacos de pollo o res con ensalada y queso.", imagen: "/tacos.jpg" },
    { nombre: "Empanadas La Oficina", precio: "L 70", descripcion: "2 empanadas de carne.", imagen: "/empanadas.jpg" },
    { nombre: "Chuleta con Tajadas", precio: "L 110", descripcion: "Chuleta con tajadas de guineo.", imagen: "/chuleta.jpg" },
    { nombre: "Pollo Chuco", precio: "L 110", descripcion: "Pollo empanizado con tajadas y salsa especial.", imagen: "/pollochuco.jpg" },
    { nombre: "Pizza 'La Oficina'", precio: "L 150", descripcion: "Pizza con un ingrediente.", imagen: "/pizza.avif" },
    { nombre: "Pizza 'Full'", precio: "L 200", descripcion: "Pizza con tres ingredientes.", imagen: "/pizza3.jpg" },
    { nombre: "Jugos Naturales", precio: "L 65", descripcion: "Jugos 100% naturales de temporada.", imagen: "/jugos.jpg" }
  ],
  mariscos: [
    { nombre: "Camarones Empanizados", precio: "L 260", descripcion: "8 camarones jumbo + puré + coleslaw.", imagen: "/empanizados.jpg" },
    { nombre: "Camarones al Ajillo", precio: "L 260", descripcion: "8 camarones jumbo + puré + coleslaw.", imagen: "/ajillo.avif" },
    { nombre: "Camarones Endiablados", precio: "L 260", descripcion: "8 camarones jumbo + puré + coleslaw.", imagen: "/endiablados.jpg" },
    { nombre: "Mar y Tierra", precio: "L 350", descripcion: "6oz de carne + camarones + puré.", imagen: "/martierra.jpg" },
    { nombre: "Cóctel de Camarones", precio: "L 260", descripcion: "Camarones frescos en salsa rosada.", imagen: "/coctel.jpg" }
  ],
  sopas: [
    { nombre: "Sopa del día", precio: "L 120", descripcion: "Pollo / Mondongo / Capirotada / Frijoles.", imagen: "/sopaa.jpg" },
    { nombre: "Sopa de Caracol", precio: "L 150", descripcion: "Tradicional sopa hondureña.", imagen: "/sopacaracol.jpg" },
    { nombre: "Sopa Marinera", precio: "L 200", descripcion: "Sopa cremosa de mariscos.", imagen: "/marinera.jpg" },
    { nombre: "Tapado", precio: "L 200", descripcion: "Mezcla caribeña de carnes y mariscos.", imagen: "/tapado.jpg" },
  ],
} as const;

type CategoriaKey = keyof typeof categoriasData;
type CategoriaActiva = CategoriaKey | "todos";

export default function Menu() {
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaActiva>("todos");

  const platos: Plato[] =
    categoriaActiva === "todos"
      ? ([] as Plato[]).concat(...Object.values(categoriasData))
      : categoriasData[categoriaActiva];

  return (
    <>
      <Navbar />

      <main className="container py-5">

        {/* Título + botón del grupo */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="section-title m-0">Menú</h1>

          <a
            href={grupoWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg"
            style={{
              backgroundColor: "#25D366",
              color: "black",
              borderRadius: "999px",
              fontWeight: 600,
              paddingInline: "2rem",
            }}
          >
            Únete al Grupo de WhatsApp
          </a>
        </div>

        {/* Botones de categorías */}
        <div className="mb-5 d-flex gap-2 flex-wrap">
          <button
            onClick={() => setCategoriaActiva("todos")}
            className={`btn btn-sm px-3 btn-menu ${
              categoriaActiva === "todos" ? "active-btn" : "inactive-btn"
            }`}
          >
            Todos
          </button>

          {Object.keys(categoriasData).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat as CategoriaKey)}
              className={`btn btn-sm px-3 btn-menu ${
                categoriaActiva === cat ? "active-btn" : "inactive-btn"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Lista de platos */}
        <div className="row g-4">
          {platos.map((plato, index) => (
            <div className="col-md-3" key={index}>
              <div
                className="card-dark rounded-4 overflow-hidden menu-card"
                style={{ minHeight: 320 }}
              >
                <div className="position-relative" style={{ height: 160 }}>
                  <Image
                    src={plato.imagen}
                    alt={plato.nombre}
                    fill
                    style={{ objectFit: "cover" }}
                  />
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
                  style={{ width: 28, height: 28, filter: "invert(1)" }}
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
                  style={{ width: 28, height: 28, filter: "invert(1)" }}
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
                  style={{ width: 28, height: 28, filter: "invert(1)" }}
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
    </>
  );
}

