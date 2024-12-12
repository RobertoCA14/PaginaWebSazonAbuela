import React from "react";

function ShoppingCart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="shopping-cart p-4 md:p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
        Carrito de Compras
      </h2>
      <ul className="space-y-4">
        {cart.map((item, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row items-center justify-between border-b pb-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full md:w-32 h-32 object-cover rounded mb-4 md:mb-0"
            />
            <div className="flex-1 text-center md:text-left">
              <p className="font-semibold">{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p className="font-bold text-lg text-center md:text-right mt-6">
        Total: ${total.toFixed(2)}
      </p>
    </div>
  );
}

export default ShoppingCart;
