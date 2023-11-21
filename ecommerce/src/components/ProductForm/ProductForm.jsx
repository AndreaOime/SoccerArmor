import React, { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { ProductContext } from '../../context/ProductContext';

export default function ProductForm({ productSelected, handlerCloseForm }) {
  const { handlerAddProduct, initialProductForm } = useContext(ProductContext);
  const [productForm, setProductForm] = useState(initialProductForm);
  const { id, name, image, description, size, price, quantity, code } = productForm;
  

  useEffect(() => {
    setProductForm({
      ...productSelected,
    });
  }, [productSelected])

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setProductForm({
      ...productForm,
      [name]: value,
    });
  }



    // guardar el product form en el listado de productos
const onSubmit = (event) => {
    event.preventDefault();  
    handlerAddProduct(productForm);
    setProductForm(initialProductForm);
  }

  const onCloseForm = () => {
    handlerCloseForm();
    setProductForm(initialProductForm);
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="my-3">
        <Form.Control placeholder="Nombre de producto" name="name" value={name} onChange={onInputChange} />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Control placeholder="Código" name="code" value={code} onChange={onInputChange} />
      </Form.Group>
    
    <Form.Group className="my-3">
        <Form.Control placeholder="imagen" name="image" value={image} onChange={onInputChange} />
    </Form.Group>
      <Form.Group className="my-3">
        <Form.Control placeholder="Descripcion" name="description" value={description} onChange={onInputChange} />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Control placeholder="Talla" name="size" value={size} onChange={onInputChange} />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Control placeholder="Precio" name="price" value={price} onChange={onInputChange} />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Control placeholder="Cantidad" name="quantity" value={quantity} onChange={onInputChange} />
      </Form.Group>
      <Form.Group>
        <Form.Control type="hidden" name="id" value={id} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {id !== 0 ? "Editar" : "Crear"}
      </Button>
      
        
    <Button className="mx-2" type="button" variant="secondary" onClick={() => onCloseForm()}>
        Cerrar
    </Button>

    </Form>
  )
}
