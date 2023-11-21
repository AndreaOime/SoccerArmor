import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { UserContext } from '../../context/UserContext';
import UserRow from './components/UserRow';
import { AuthContext } from '../../auth/context/AuthContext';

export default function UsersList() {

  const { users = [] } = useContext(UserContext);
  const { login } = useContext(AuthContext);

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Nombre de usuario</th>
          <th>Correo electrónico</th>
          {!login.isAdmin ||
            <>
              <th>Actualizar</th>
              <th>Eliminar</th>
            </>
          }
        </tr>
      </thead>
      <tbody>
        {
          users.map(({ _id, name, username, email, password, admin }) => (
            <UserRow
              key={_id}
              id={_id}
              name={name}
              username={username}
              email={email}
              password={password}
              admin={admin}
            />
          ))
        }
      </tbody>
    </Table>
  )
}