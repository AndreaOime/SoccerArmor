import React, { useEffect, useState } from 'react'
import { getAll } from '../../api/productos.api';

export default function ListaProductosComponent() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadProductos = async () => {
      try {
        const rta = await getAll(); // Función await cuando se aplique endpoints
        const productos = rta.data
        setProducts(productos);
      } catch (error) {
        console.error("Error al cargar página:", error);
      }
    }
    loadProductos();
  }, [])

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

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);


  const addToCart = (product) => {
    if (product.quantity > 0) {
      const updatedProducts = products?.map((p) => {
        if (p.name === product.name) {
          p.quantity--;
        }
        return p;
      });

      setProducts(updatedProducts);

      const existingItem = cart.find((item) => item.name === product.name);

      if (existingItem) {
        existingItem.quantity++;
        setCart([...cart]);
      } else {
        const newItem = { ...product, quantity: 1 };
        setCart([...cart, newItem]);
      }
    }
  };

  // const handlePurchase = () => {
  //   const cartInfo = {
  //     items: cart,
  //     totalCost: cartTotal,
  //   };
  //
  //   fetch('/tu-endpoint-de-servidor', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(cartInfo),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Maneja la respuesta del servidor si es necesario
  //       console.log('Respuesta del servidor:', data);
  //     })
  //     .catch((error) => {
  //       // Maneja errores en la solicitud
  //       console.error('Error al realizar la compra:', error);
  //     });
  // };

  return (
    <div>
      <div className="container">
        <h1 className="text-center mt-3">Productos Destacados</h1>
        <div className="row">
          {products?.map((product, index) => (
            <div key={index} className="product">
              <h2>{product.name}</h2>
              <img src={product.image} width="70%" alt={product.name} />
              <p>{product.description}</p>
              <p>Precio: ${product.price.toFixed(2)}</p>
              <p>Disponibles: {product.quantity}</p>
              <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </div>

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
    </div>
  )
}
