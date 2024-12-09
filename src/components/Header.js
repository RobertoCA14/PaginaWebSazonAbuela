import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import logo1 from "../assets/logo1.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Barra superior */}
      <div className="bg-red-800 text-sm text-center py-1 text-white">
        INGREDIENTES SIEMPRE FRESCOS... DIRECTO DESDE EL CAMPO!
      </div>

      {/* Contenedor principal del header */}
      <nav className="flex items-center justify-between px-4 md:px-10 bg-white text-black">
        {/* Logo y título, centrados */}
        <div
          className="flex items-center space-x-4"
          onClick={() => (window.location.href = "/")}
        >
          <img src={logo1} alt="Logo" className="w-16 h-auto object-contain" />
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-lg font-bold">Sazon Criolla</h1>
            <span className="text-xs">
              Al servicio de <strong>tu</strong> gusto.
            </span>
          </div>
        </div>

        {/* Menú de navegación */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row items-center md:space-x-6 font-semibold text-sm md:text-md`}
        >
          <Link to="/" className="hover:text-red-700 px-2">
            INICIO
          </Link>
          <a href="/#nosotro" className="px-4 hover:text-red-700">
            NOSOTROS
          </a>
          <Link to="/store" className="hover:text-red-700 px-2">
            TIENDA
          </Link>
          <Link to="/ShoppingCart" className="hover:text-red-700 px-2">
            CARRITO
          </Link>
          <a href="/#contacto" className="px-4 hover:text-red-700">
            CONTÁCTANOS
          </a>
        </div>

        {/* Ícono de búsqueda y menú hamburguesa */}
        <div className="flex items-center space-x-4">
          <button className="text-black hover:text-red-700">
            <FaSearch size={18} />
          </button>
          <button
            className="md:hidden text-black hover:text-red-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
