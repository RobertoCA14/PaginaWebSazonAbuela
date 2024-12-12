// HomePage.js
import React from "react";
import Carousel from "./Carousel";
import productofinal from "../assets/productofinal.png";
import Fotosingredientes from "../assets/Fotosingredientes.png";
import LogoSazonAbuela from "../assets/LogoSazonAbuela.png";

import imagensalud2 from "../assets/imagensalud2.png";
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
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              Saludable
            </h3>
            <p>
              Elaborado sin conservantes ni aditivos artificiales, garantizando
              un producto limpio y natural. Ideal para quienes buscan cuidar su
              bienestar y disfrutar de alimentos más frescos y puros.
            </p>
          </div>
          {/* Conveniente */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Conveniente
            </h3>
            <p>
              Su diseño práctico lo hace fácil de usar y almacenar, ahorrándote
              tiempo en la cocina. Perfecto para personas con un estilo de vida
              ajetreado que buscan soluciones rápidas sin sacrificar calidad.
            </p>
          </div>
          {/* Delicioso */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              Delicioso
            </h3>
            <p>
              Resalta y potencia el sabor natural de tus ingredientes,
              transformando cualquier receta en una experiencia gourmet. Ideal
              para elevar el nivel de tus platillos favoritos.
            </p>
          </div>
        </div>

        {/* Características del producto */}
        <div
          id="Ingredientes"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4"
        >
          <div className="bg-gradient-to-r from-green-200 via-yellow-200 to-red-200 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-extrabold mb-4 text-green-700 text-center">
              Ingredientes Naturales del "Sazón de la Abuela"
            </h3>
            <div className="text-center mb-6">
              <img
                src={Fotosingredientes}
                alt="Imagen de Sazón Criollo"
                className="mx-auto w-full max-w-md h-auto object-cover rounded-lg border-4 border-green-700"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-800 font-medium">
                Verduras frescas como ají cubanela, ají morrón, apio, orégano,
                ají gustoso, ajo, aceite verde, agua, sal, cilantro, y pimienta.
                Cada ingrediente ha sido seleccionado cuidadosamente para
                ofrecerte el mejor sabor.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="bg-green-700 text-white px-6 py-3 rounded-full font-bold hover:bg-green-800 transition">
                ¡Descubre más!
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Encabezado */}
            <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
              Beneficios del Sazón Natural
            </h2>

            {/* Imagen representativa */}
            <div className="text-center">
              <img
                src={imagensalud2}
                alt="Beneficios del sazón natural"
                className="mx-auto rounded-lg shadow-md w-full max-w-md"
              />
            </div>

            {/* Beneficios en un diseño atractivo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Prevención de enfermedades",
                  text: "Una alimentación rica en nutrientes naturales puede prevenir enfermedades crónicas como la diabetes, enfermedades cardiovasculares y ciertos tipos de cáncer.",
                },
                {
                  title: "Fortalecimiento del sistema inmunológico",
                  text: "Los antioxidantes presentes en los vegetales protegen nuestras células del daño causado por los radicales libres.",
                },
                {
                  title: "Mayor contenido nutricional",
                  text: "Los sazones naturales conservan una mayor cantidad de vitaminas, minerales y antioxidantes, esenciales para nuestro bienestar.",
                },
                {
                  title: "Sin aditivos",
                  text: "Al evitar conservantes y colorantes artificiales, reducimos la ingesta de sustancias que pueden ser perjudiciales a largo plazo.",
                },
                {
                  title: "Mejor digestión",
                  text: "Los alimentos naturales suelen ser más fáciles de digerir, contribuyendo a una mejor salud intestinal.",
                },
                {
                  title: "Menor riesgo de alergias",
                  text: "Conociendo los ingredientes exactos, evitamos productos que contengan alérgenos comunes.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-red-600 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-lg text-center">
            <div className="text-center">
              <img
                src={productofinal}
                alt="Beneficios del sazón natural"
                className="mx-auto rounded-lg shadow-md w-full max-w-md"
              />
            </div>
          </div>
          <div className="bg-gray-300 p-4 rounded shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">
              UN SAZON 100% NATURAL SIN ADICTIVOS
            </h3>
            <p>
              USO Y APLICACIONES: Descubre la versatilidad de nuestra sazón
              líquida, el toque secreto para realzar cualquier platillo.
              Perfecto para marinadas y adobos, es la base ideal para salsas,
              guisos y mucho más. Añade una explosión de sabor a tus ensaladas,
              carnes, pescados o vegetales con solo unos simples pasos.
            </p>
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
          Adquiere El Sazon de la Abuela aqui
        </button>
      </section>
    </div>
  );
}

export default HomePage;
