import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { UserContext } from '../../context/UserContext'
import UserForm from '../UserForm/UserForm'

export default function UserModalForm() {
  const { visibleForm, userSelected, handlerCloseForm } = useContext(UserContext);
  return (
    <Modal show={visibleForm}>
      <Modal.Header>
        <h5 className="modal-tile">
          {userSelected.id !== 0 ? "Editar" : "Crear"} Modal Usuarios
        </h5>
      </Modal.Header>
      <Modal.Body>
        <UserForm
          userSelected={userSelected}
          handlerCloseForm={handlerCloseForm}
        />
      </Modal.Body>
    </Modal>
  )
}
