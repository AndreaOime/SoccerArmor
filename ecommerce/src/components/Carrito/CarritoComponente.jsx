import React, { useState } from 'react'

export default function CarritoComponente() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const removeFromCart = (product) => {
    const updatedProducts = products?.map((p) => {
      if (p.name === product.name) {
        p.quantity++;
      }
      return p;
    });

    setProducts(updatedProducts);

    const updatedCart = cart.filter((item) => item.name !== product.name);
    setCart(updatedCart);
  };
  return (
    <div className="container">
      <h2 className="mt-3">Carrito de Compras</h2>
      <ul className="list-group">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <span>{item.name}</span>
            <span>Cantidad: {item.quantity}</span>
            <span>Precio: ${item.price.toFixed(2)}</span>
            <button onClick={() => removeFromCart(item)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p className="mt-2">Total: ${cartTotal.toFixed(2)}</p>
      <button id="buy-button" className="btn btn-success" onClick={() => alert("Para confirmar la compra Presiona el Botón, Gracias por tu compra")}>Comprar</button>
    </div>
  )
}
