import { useReducer, useState } from "react";
import { productsReducer } from "../reducers/productsReducer.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAllProduct, removeProduct, saveProduct, updateProduct } from "../services/productService";

const initialProducts = [];

const initialProductForm = {
  id: 0,
  name: '',
  code: '',
  image: '',
  description: '',
  size: '',
  price: 0,
  quantity: 0
}


export const useProducts = () => {

  const [products, dispatch] = useReducer(productsReducer, initialProducts);
  const [productSelected, setProductSelected] = useState(initialProductForm);
  const [visibleForm, setVisibleForm] = useState(false);

  const navigate = useNavigate();

  const getProducts = async () => {
    const result = await findAllProduct();
    console.log();
    dispatch({
      type: 'loadingProducts',
      payload: result.data
    })
  }

  const handlerAddProduct = async (product) => {
    let response;
    try {

      if (product.id === 0) {
        response = await saveProduct(product);
      } else {
        response = await updateProduct(product);
      }

      dispatch({
        type: (product.id === 0) ? 'addProduct' : 'updateProduct',
        payload: response.data
      })

      Swal.fire({
        title: (product.id === 0) ? "Producto Agregado" : "Producto Actualizado",
        text: (product.id === 0) ? "El Producto ha sido agregado con exito!" : "El Producto ha sido actualizado con exito!",
        icon: "success"
      });

      handlerCloseForm();
      navigate('/products')
    } catch (error) {
      console.error(error);
    }
  }

  const handlerRemoveProduct = (id) => {
    Swal.fire({
      title: "Está seguro que sea eliminar?",
      text: "Cuidado el Producto será eliminado!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        removeProduct(id);
        dispatch({
          type: 'removeProduct',
          payload: id
        })
        Swal.fire({
          title: "Producto Eliminado!",
          text: "El Producto ha sido eliminado con exito!",
          icon: "success"
        });
      }
    });
  }

  const handlerProductSelectedForm = (product) => {
    handlerOpenForm();
    setProductSelected({ ...product });
  }

  const handlerOpenForm = () => {
    setVisibleForm(true);
  }

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setProductSelected(initialProductForm);
  }

  return {
    products,
    productSelected,
    initialProductForm,
    visibleForm,
    handlerAddProduct,
    handlerRemoveProduct,
    handlerProductSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    getProducts
  }
}
