document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            name: "MANCHESTER CITY",
            image: "./imgs/manchestercity.jpg",
            description: "una forma de homenajear su estadio Etihad, que fue renovado en 2003-2004. PUMA es una vez más la marca encargada del diseño de la equipación y han optado por un cuello en forma de V",
            talla: "XS - S - M - L- XL",
            price: 10.00,
            quantity: 10,
        },
        {
            name: "REAL MADRID",
            image: "./imgs/real.jpg",
            description: "Tanto la versión para el campo como la de los aficionados están fabricadas con materiales 100 % reciclados. La versión de la camiseta para los partidos cuenta con la tecnología HEAT.RDY",
            talla: "XS - S - M - L- XL",
            price: 15.00,
            quantity: 5,
        },
        {
            name: "LIVERPOOL",
            image: "./imgs/liverpool.jpg",
            description: "La camiseta de esta primera equipación se fabrica con Dri-FIT ADV. Esta tecnología ayuda a evitar el sudor excesivo, algo esencial en partidos de alta intensidad.",
            talla: "XS - S - M - L- XL",
            price: 15.00,
            quantity: 5,
        },
        // Agregar más productos 
    ];
    const productContainer = document.getElementById("product-list");
    const cartList = document.getElementById("cart");
    const cartTotal = document.getElementById("cart-total");
    const buyButton = document.getElementById("buy-button");
    let cartItems = [];

    // Función para cargar productos dinámicamente en la página de inicio
    function loadProducts() {
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.image}" width=70% alt="${product.name}">
                <p>${product.description}</p>
                <p>Precio: $${product.price.toFixed(2)}</p>
                <p>Disponibles: ${product.quantity}</p>
                <button class="add-to-cart" data-product="${product.name}" data-price="${product.price}">Agregar al carrito</button>
            `;
            productContainer.appendChild(productDiv);
        });
    }

    loadProducts();

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-product");
            const productPrice = parseFloat(button.getAttribute("data-price"));
            const productIndex = products.findIndex(product => product.name === productName);

            if (productIndex !== -1) {
                const product = products[productIndex];
                if (product.quantity > 0) {
                    product.quantity--;
                    const existingItem = cartItems.find(item => item.name === productName);

                    if (existingItem) {
                        existingItem.quantity++;
                    } else {
                        cartItems.push({ name: productName, price: productPrice, quantity: 1 });
                    }

                    updateCartUI();
                    updateCartTotal();
                }
            }

            
        });
    });

    cartList.addEventListener("click", e => {
        if (e.target.classList.contains("remove-from-cart")) {
            const productName = e.target.getAttribute("data-product");
            const itemIndex = cartItems.findIndex(item => item.name === productName);

            if (itemIndex !== -1) {
                const productIndex = products.findIndex(product => product.name === productName);
                if (productIndex !== -1) {
                    products[productIndex].quantity++;
                }
                cartItems.splice(itemIndex, 1);
                e.target.parentElement.remove();
                updateCartTotal();
            }
        }
    });

    buyButton.addEventListener("click", () => {
        updateCartTotal();
        cartItems = [];
        updateCartUI();
        
        alert("Para confirmar la compra Presiona el Botón, Gracias por tu compra");
        
    });

    function updateCartTotal() {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        cartTotal.textContent = total.toFixed(2);
        console.log(total);
    }

    function updateCartUI() {
        cartList.innerHTML = "";
        cartItems.forEach(item => {
            const cartItem = document.createElement("li");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>Cantidad: ${item.quantity}</span>
                <span>Precio: $${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-from-cart" data-product="${item.name}">Eliminar</button>
            `;
            cartList.appendChild(cartItem);
        });
    }

    //validando contraseña
    const passwordForm = document.getElementById("registro-form");
    const passwordInput = document.getElementById("password_registro");
    const passwordError = document.getElementById("password-error");

    passwordForm.addEventListener("submit", function(event) {
        if (passwordInput.value.length < 8) {
            event.preventDefault(); // Evitar el envío del formulario

            passwordError.textContent = "La contraseña debe tener al menos 8 caracteres";
            passwordError.style.display = "block";
        } else {
            passwordError.style.display = "none";
        }
    });
});
