import React, { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from '../../context/UserContext';

export default function UserForm({ userSelected, handlerCloseForm }) {
  const { handlerAddUser, initialUserForm } = useContext(UserContext);
  const [userForm, setUserForm] = useState(initialUserForm);
  const { id, username, password, email } = userForm;
  const navigate = useNavigate();

  useEffect(() => {
    setUserForm({
      ...userSelected,
    });
  }, [userSelected])

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || (!password && id !== 0) || !email) {
      Swal.fire({
        title: "Error de validación",
        text: "Debe completar los campos del formulario",
        icon: "error"
      });
      return;
    }
    if (!email.includes('@')) {
      Swal.fire({
        title: "Error de validación de correo",
        text: "El correo debe ser válido.",
        icon: "error"
      });
      return;
    }


    // guardar el user form en el listado de usuarios
    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  }

  const onCloseForm = () => {
    handlerCloseForm();
    setUserForm(initialUserForm);
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="my-3">
        <Form.Control placeholder="Nombre de usuario" name="username" value={username} onChange={onInputChange} />
      </Form.Group>
      {id !== 0 ||
        <Form.Group className="my-3">
          <Form.Control type="password" placeholder="Contraseña" name="password" value={password} onChange={onInputChange} />
        </Form.Group>
      }
      <Form.Group className="my-3">
        <Form.Control placeholder="Correo electrónico" name="email" value={email} onChange={onInputChange} />
      </Form.Group>
      <Form.Group>
        <Form.Control type="hidden" name="id" value={id} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {id !== 0 ? "Editar" : "Crear"}
      </Button>
      {!handlerCloseForm
        ?
        <Button className="mx-2" variant="link" type="button" onClick={() => navigate("/")}>
          Inicio de sesión
        </Button>
        :
        <Button className="mx-2" type="button" variant="secondary" onClick={() => onCloseForm()}>
          Cerrar
        </Button>
      }
    </Form>
  )
}
