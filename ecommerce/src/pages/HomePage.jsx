import React, { useContext, useEffect } from 'react'
import ListaProductosComponent from '../components/ListaProductos/ListaProductosComponent'
import ProductsList from '../components/ProductsList/ProductsList'
import { Button } from 'react-bootstrap';
import ProductModalForm from '../components/ProductModalForm/ProductModalForm';
import { ProductContext } from '../context/ProductContext';


export default function HomePage() {
  const {
    products,
    visibleForm,
    handlerOpenForm,
    getProducts
  } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  })
  
  
  return (
    // <div>
    //   <ListaProductosComponent />
    // </div>
    <>
      {!visibleForm ||
        <ProductModalForm />
      }
      <div className={'container my-4'}>
        <h2>NUESTROS PRODUCTOS</h2>
        <div className="row">
          <div className="col">
            {
              visibleForm ||
              <Button className="my-2" variant="primary" type="button" onClick={handlerOpenForm}>
                Agregar Producto
              </Button>
            }
            {
              products.length === 0
                ? <div className="alert alert-warning">No hay productos en el sistema</div>
                : <ProductsList />
            }
          </div>
        </div>
      </div>
    </>
  )
}
