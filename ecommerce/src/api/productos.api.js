import axios from "axios";

const endpoint = "http://localhost:8080/api"

const productsAPI = axios.create({
  baseURL: `${endpoint}/products`
})

// const productos = [
//   {
//     id: 1,
//     name: "MANCHESTER CITY",
//     image: "https://http2.mlstatic.com/D_NQ_NP_639905-MCO72184148839_102023-O.webp",
//     description: "una forma de homenajear su estadio Etihad, que fue renovado en 2003-2004. PUMA es una vez más la marca encargada del diseño de la equipación y han optado por un cuello en forma de V",
//     talla: "XS - S - M - L- XL",
//     price: 10.00,
//     quantity: 10,
//   },
//   {
//     id: 2,
//     name: "REAL MADRID",
//     image: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/06/14/16867313137408.jpg",
//     description: "Tanto la versión para el campo como la de los aficionados están fabricadas con materiales 100 % reciclados. La versión de la camiseta para los partidos cuenta con la tecnología HEAT.RDY",
//     talla: "XS - S - M - L- XL",
//     price: 15.00,
//     quantity: 5,
//   },
//   {
//     id: 3,
//     name: "LIVERPOOL",
//     image: "https://todosobrecamisetas.com/wp-content/uploads/liverpool-fc-2022-23-nike-home-kit-6.jpg",
//     description: "La camiseta de esta primera equipación se fabrica con Dri-FIT ADV. Esta tecnología ayuda a evitar el sudor excesivo, algo esencial en partidos de alta intensidad.",
//     talla: "XS - S - M - L- XL",
//     price: 15.00,
//     quantity: 5,
//   }
// ]

export const getAll = () => productsAPI.get("/"); 
