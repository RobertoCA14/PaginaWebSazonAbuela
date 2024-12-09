// ShoppingCart.js
import React from "react";

function ShoppingCart({ cart }) {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="shopping-cart p-8">
      <h2 className="text-2xl mb-4">Carrito de Compras</h2>
      <ul className="mb-4">
        {cart.map((item, index) => (
          <li key={index} className="flex items-center py-2 border-b">
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded mr-4"
            />
            <span>
              {item.name} - ${item.price}
            </span>
          </li>
        ))}
      </ul>
      <p className="font-bold">Total: ${total}</p>
    </div>
  );
}

export default ShoppingCart;
