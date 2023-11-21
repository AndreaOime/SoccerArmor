import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import UserForm from '../components/UserForm/UserForm'
import { UserContext } from '../context/UserContext';

export default function RegisterPage() {
  const { initialUserForm } = useContext(UserContext);
  const [userSelected] = useState(initialUserForm);

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Registro de usuarios
        </Card.Title>
        <UserForm userSelected={userSelected} />
      </Card.Body>
    </Card>
  )
}
