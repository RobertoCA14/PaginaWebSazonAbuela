import React from "react";
import producto1 from "../assets/producto1.webp";
import producto2 from "../assets/producto2.webp";
import producto3 from "../assets/producto3.webp";

const products = [
  { id: 1, name: "Producto 1", price: 10, image: producto1 },
  { id: 2, name: "Producto 2", price: 15, image: producto2 },
  { id: 3, name: "Producto 3", price: 20, image: producto3 },
];

function Store({ addToCart }) {
  return (
    <div className="store p-8">
      <h2 className="text-2xl mb-4">Nuestros Productos</h2>
      <div className="grid grid-cols-3 gap-6">
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
