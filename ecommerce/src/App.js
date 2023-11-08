import React, { useState, useEffect } from 'react';
import './styles.css'; // 
import Header from './componentes/Header';


const App = () => {
  const [products, setProducts] = useState([
    {
      name: "MANCHESTER CITY",
      image: "https://http2.mlstatic.com/D_NQ_NP_639905-MCO72184148839_102023-O.webp",
      description: "una forma de homenajear su estadio Etihad, que fue renovado en 2003-2004. PUMA es una vez más la marca encargada del diseño de la equipación y han optado por un cuello en forma de V",
      talla: "XS - S - M - L- XL",
      price: 10.00,
      quantity: 10,
    },
    {
      name: "REAL MADRID",
      image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/06/14/16867313137408.jpg",
      description: "Tanto la versión para el campo como la de los aficionados están fabricadas con materiales 100 % reciclados. La versión de la camiseta para los partidos cuenta con la tecnología HEAT.RDY",
      talla: "XS - S - M - L- XL",
      price: 15.00,
      quantity: 5,
    },
    {
      name: "LIVERPOOL",
      image: "https://todosobrecamisetas.com/wp-content/uploads/liverpool-fc-2022-23-nike-home-kit-6.jpg",
      description: "La camiseta de esta primera equipación se fabrica con Dri-FIT ADV. Esta tecnología ayuda a evitar el sudor excesivo, algo esencial en partidos de alta intensidad.",
      talla: "XS - S - M - L- XL",
      price: 15.00,
      quantity: 5,
    },
    // Agregar más productos
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (product.quantity > 0) {
      const updatedProducts = products.map((p) => {
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

  const removeFromCart = (product) => {
    const updatedProducts = products.map((p) => {
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

  const handlePurchase = () => {
    const cartInfo = {
      items: cart,
      totalCost: cartTotal,
    };

    fetch('/tu-endpoint-de-servidor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        // Maneja la respuesta del servidor si es necesario
        console.log('Respuesta del servidor:', data);
      })
      .catch((error) => {
        // Maneja errores en la solicitud
        console.error('Error al realizar la compra:', error);
      });
  };

  return (
    <div>
      <header>
        <Header></Header>
        
       
      </header>

      <section>
        <div className="container">
          <h1 className="text-center mt-3">Productos Destacados</h1>
          <div className="row">
            {products.map((product, index) => (
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
      </section>

      <section>
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
      </section>

      <footer>
        <p>&copy; 2023 SOCCER ARMOR</p>
      </footer>
    </div>
  );
};

export default App;
