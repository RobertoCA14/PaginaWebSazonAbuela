// HomePage.js
import React from "react";
import Carousel from "./Carousel";
import logo2 from "../assets/logo2.png";
import logo1 from "../assets/logo1.png";
import Fotosingredientes from "../assets/Fotosingredientes.png";
import LogoSazonAbuela from "../assets/LogoSazonAbuela.png";

function HomePage() {
  return (
    <div className="homepage">
      {/* Encabezado visual con imagen de fondo */}
      <Carousel />

      {/* Sección de características */}
      <section className="features text-center mb-4">
        {/* Sección completa en rojo */}
        <div id="nosotro" className="bg-red-700 text-white py-16">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-4">
              ¿Por qué elegir nuestro sazón?
            </h2>
            <h2 className="text-4xl font-bold mb-4">EL SAZON DE LA ABUELA</h2>
            <p className="mb-6">
              En un mundo acelerado, encontrar el equilibrio entre una
              alimentación saludable y deliciosa puede ser todo un desafío. 'El
              Sazón de la Abuela' te ofrece una solución práctica y nutritiva.
              Nuestro sazón líquido natural, elaborado con ingredientes frescos
              y sin aditivos artificiales, realza el sabor de tus platos sin
              comprometer tu bienestar. Rico en vitaminas, minerales y
              antioxidantes, nuestro producto te ayuda a cuidar de tu salud
              mientras disfrutas de comidas sabrosas y variadas. Además, su
              versatilidad te permite utilizarlo en una amplia gama de recetas,
              desde sopas y guisos hasta marinados y aderezos, ahorrándote
              tiempo y esfuerzo en la cocina.lo largo de este documento,
              exploraremos los fundamentos de nuestra sazón líquido natural, sus
              beneficios nutricionales, y cómo puede integrarse fácilmente en
              diversas preparaciones culinarias. Descubre cómo el "Sazón Fusión
              criolla" puede transformar tu experiencia en la cocina, ofreciendo
              una nueva dimensión de sabor y bienestar.
            </p>
            <button className="bg-white text-red-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Leer más
            </button>
          </div>
        </div>

        {/* Imagen de logo debajo de la sección roja */}
        <div className="text-center p-8">
          <img
            src={LogoSazonAbuela}
            alt="Imagen de Sazón Criollo"
            className="mx-auto mb-4 w-full max-w-lg h-auto object-cover rounded-lg"
          />
        </div>

        {/* Características del producto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-gray-300 p-4 rounded shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">
              Ingredientes Naturales del "Sazon de la Abuela"
            </h3>
            <p>
              <p>
                verduras, aji cubanela, aji morron, apio, oregano, aji gustoso,
                ajo, aceite, verde, agua, sal, cilatro, pimienta.
              </p>
            </p>
            <div className="text-center p-8">
              <img
                src={Fotosingredientes}
                alt="Imagen de Sazón Criollo"
                className="mx-auto mb-4 w-full max-w-lg h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-gray-300 p-4 rounded shadow-lg text-center">
            <div
              className="w-full h-32 bg-cover bg-center rounded-lg mb-4"
              style={{
                backgroundImage: `url(${logo1})`,
              }}
            ></div>
            <h3 className="text-xl font-bold mb-2">Auténtico Sabor</h3>
            <p>Inspirado en la esencia de la cocina criolla.</p>
          </div>

          <div className="bg-gray-300 p-4 rounded shadow-lg text-center">
            <div
              className="w-full h-32 bg-cover bg-center rounded-lg mb-4"
              style={{
                backgroundImage: `url(${logo1})`,
              }}
            ></div>
            <h3 className="text-xl font-bold mb-2">Fácil y Versátil</h3>
            <p>Perfecto para todo tipo de platos.</p>
          </div>
        </div>
      </section>

      {/* Sección de testimonios */}
      <section
        id="contacto"
        className="testimonials bg-gray-300 p-8 rounded mb-8 text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">
          Opiniones de nuestros clientes
        </h2>
        <div className="testimonial-item text-gray-700 mb-4">
          <p className="text-lg italic">
            "Este sazón es increíble. Lo uso en todas mis recetas y siempre me
            preguntan cuál es mi secreto."
          </p>
          <p className="font-bold mt-2">- Cliente Satisfecho</p>
        </div>
        <div className="testimonial-item text-gray-700 mb-4">
          <p className="text-lg italic">
            "El mejor sazón que he probado. Sabe a hogar y a tradición."
          </p>
          <p className="font-bold mt-2">- Amante de la Cocina</p>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="cta text-center mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          ¿Listo para llevar el auténtico sabor a tu mesa?
        </h2>
        <button
          onClick={() => (window.location.href = "/store")}
          className="bg-red-500 text-white px-6 py-3 rounded transform hover:scale-105 transition duration-300"
        >
          Adquiere Sazón Fusion Criolla
        </button>
      </section>
    </div>
  );
}

export default HomePage;
