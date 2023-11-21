import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { ProductContext } from '../../../context/ProductContext';

export default function ProductRow({ id, name, code, image, description, size, price, quantity }) {
  const { handlerProductSelectedForm, handlerRemoveProduct } = useContext(ProductContext);

  const onRemoveProduct = (id) => {
    handlerRemoveProduct(id);
  }

  const onSelectUser = ({ id, name, code, image, description, size, price, quantity }) => {
    handlerProductSelectedForm({ id, name, code, image, description, size, price, quantity });
  }

  return (
    <tr >
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{size}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Button type='button' variant='secondary' size='sm' onClick={() => onSelectUser({
          id,
          name,
          code,
          image,
          description,
          size,
          price,
          quantity
        })}>
          update
        </Button>
      </td>
      <td>
        <Button type='button' variant='danger' size='sm' onClick={() => onRemoveProduct(id)}>
          remove
        </Button>
      </td>
    </tr>
  )
}
