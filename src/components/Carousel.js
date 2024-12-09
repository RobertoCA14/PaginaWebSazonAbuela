import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import producto1 from "../assets/producto1.webp";
import producto2 from "../assets/producto2.webp";
import producto3 from "../assets/producto3.webp";
import ImgPortada from "../assets/ImgPortada.webp";

function ProductCarousel() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsButtonVisible(false);
      } else {
        setIsButtonVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative max-w-full mx-auto">
      {isButtonVisible && (
        <button
          className="absolute bg-red-500 text-white px-8 py-4 rounded z-50 hover:scale-105 transition duration-300"
          style={{ top: "20px", left: "20px", position: "absolute" }}
          onClick={() => (window.location.href = "/store")}
        >
          Compra Ahora
        </button>
      )}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div
          className="relative bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${ImgPortada})`,
            height: "70vh", // Ajuste de altura más grande
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-5xl font-bold mb-4">Sazón Fusion Criolla</h1>
            <p className="text-2xl">
              ¡El toque perfecto para transformar tus platos!
            </p>
          </div>
        </div>
        <div
          className="relative bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${producto1})`,
            height: "70vh",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-4xl font-bold">Sazón Fusion Criolla</h2>
            <p>El toque perfecto para cada platillo.</p>
          </div>
        </div>
        <div
          className="relative bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${producto2})`,
            height: "70vh",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-4xl font-bold">Sazón Tradicional</h2>
            <p>Con ingredientes frescos y auténticos.</p>
          </div>
        </div>
        <div
          className="relative bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${producto3})`,
            height: "70vh",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-4xl font-bold">Auténtico Sabor</h2>
            <p>Transforma cada plato en una experiencia.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
