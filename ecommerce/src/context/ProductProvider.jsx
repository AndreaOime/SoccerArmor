import { useProducts } from "../hooks/useProducts";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {

  const {
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
  } = useProducts();

  return (
    <ProductContext.Provider value={
      {
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
    }>
      {children}
    </ProductContext.Provider>
  );
}

