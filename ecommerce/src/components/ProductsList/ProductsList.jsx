import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { ProductContext } from '../../context/ProductContext';
import ProductRow from './components/ProductRow';

export default function ProductsList() {

  const { products = [] } = useContext(ProductContext);

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>description</th>
          <th>size</th>
          <th>price</th>
          <th>quantity</th>
          <th>update</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(({ _id, name, image, code, price, description, size, quantity }) => (
            <ProductRow
              key={_id}
              id={_id}
              name={name}
              image={image}
              code ={code}
              price={price}
              description={description}
              size = {size}
              quantity = {quantity}
            />
          ))
        }
      </tbody>
    </Table>
  )
}
