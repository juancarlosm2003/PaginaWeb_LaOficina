import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 border-bottom border-danger justify-content-center">

      <Link className="navbar-brand fw-bold text-uppercase" href="/">
        <img 
          src="logonavbar.png" 
          style={{ height: "40px", objectFit: "contain" }}
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="mainNavbar">
<ul className="navbar-nav mx-auto gap-3">
        <li className="nav-item">
            <Link className="nav-link text-uppercase" href="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-uppercase" href="/menu">
              Menú
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-uppercase" href="/quienes_somos">
              Quiénes somos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-uppercase" href="/eventos">
              Eventos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
