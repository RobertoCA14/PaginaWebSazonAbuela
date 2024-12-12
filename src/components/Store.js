import React from "react";
import verimg from "../assets/verimg.png";
import hhhimg from "../assets/hhhimg.png";

const products = [
  {
    id: 1,
    name: "El Sazón de la Abuela, 12 oz, Ref.772",
    price: 13.8,
    image: verimg,
  },
  {
    id: 2,
    name: "El Sazón de la Abuela, 24 oz, Ref.7302",
    price: 17.4,
    image: hhhimg,
  },
];

function Store({ addToCart }) {
  return (
    <div className="store p-8">
      <h2 className="text-2xl mb-4">Nuestros Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow">
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
            <button
              className="bg-green-600 text-white px-4 py-2 mt-2"
              onClick={() => addToCart(product)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
