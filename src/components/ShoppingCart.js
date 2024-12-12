import React, { useEffect } from "react";

function ShoppingCart({ cart }) {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  useEffect(() => {
    if (window.paypal) {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total.toFixed(2), // Total del carrito
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Gracias por tu compra, ${details.payer.name.given_name}!`);
            });
          },
          onError: (err) => {
            console.error("Error en el pago:", err);
          },
        })
        .render("#paypal-button-container");
    }
  }, [total]);

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
      <p className="font-bold">Total: ${total.toFixed(2)}</p>
      <div id="paypal-button-container" className="mt-4"></div>
    </div>
  );
}

export default ShoppingCart;
