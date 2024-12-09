// HomePage.js
import React from "react";
import Carousel from "./Carousel";
import logo2 from "../assets/logo2.png";
import logo1 from "../assets/logo1.png";
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
            <h2 className="text-4xl font-bold mb-4">LA FAMILIA FUSIÓN</h2>
            <p className="mb-6">
              En Fusión Criolla, nos enorgullecemos de transformar cada comida
              con nuestro sazón criollo en una auténtica celebración de sabor y
              tradición. Nuestro compromiso con la excelencia culinaria nos
              distingue como verdaderos expertos en sazón criollo, elevando el
              arte de cocinar con los ingredientes más frescos y las técnicas
              más auténticas. Nuestro sazón está elaborado con los mejores
              ingredientes naturales y una receta tradicional que resalta el
              sabor de cada plato.
            </p>
            <button className="bg-white text-red-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Leer más
            </button>
          </div>
        </div>

        {/* Imagen de logo debajo de la sección roja */}
        <div className="text-center p-8">
          <img
            src={logo2}
            alt="Imagen de Sazón Criollo"
            className="mx-auto mb-1 w-64 h-36 object-cover rounded"
          />
        </div>

        {/* Características del producto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-gray-300 p-4 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-2">Ingredientes Naturales</h3>
            <p>Solo ingredientes frescos y sin aditivos.</p>
          </div>
          <div className="flex items-center p-4 border rounded shadow-lg">
            <div
              className="w-1/3 h-32 bg-cover bg-center rounded-lg mr-4"
              style={{
                backgroundImage: `url(${logo1})`,
              }}
            ></div>
            <div className=" w-2/3">
              <h3 className="text-xl font-bold mb-2">Auténtico Sabor</h3>
              <p>Inspirado en la esencia de la cocina criolla.</p>
            </div>
          </div>
          <div className="flex items-center p-4 border rounded shadow-lg">
            <div
              className="w-1/3 h-32 bg-cover bg-center rounded-lg mr-4"
              style={{
                backgroundImage: `url(${logo1})`,
              }}
            ></div>
            <div className="w-2/3  ">
              <h3 className="text-xl font-bold mb-2">Fácil y Versátil</h3>
              <p>Perfecto para todo tipo de platos.</p>
            </div>
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
