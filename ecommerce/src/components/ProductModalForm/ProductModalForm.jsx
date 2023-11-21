import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { ProductContext } from '../../context/ProductContext'
import ProductForm from '../ProductForm/ProductForm'

export default function ProductModalForm() {
  const { visibleForm, productSelected, handlerCloseForm } = useContext(ProductContext);
  return (
    <Modal show={visibleForm}>
      <Modal.Header>
        <h5 className="modal-tile">
          {productSelected.id !== 0 ? "Editar" : "Agregar"} Modal Productos
        </h5>
      </Modal.Header>
      <Modal.Body>
        <ProductForm
          productSelected={productSelected}
          handlerCloseForm={handlerCloseForm}
        />
      </Modal.Body>
    </Modal>
  )
}
