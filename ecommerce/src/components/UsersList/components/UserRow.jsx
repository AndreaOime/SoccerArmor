import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { UserContext } from '../../../context/UserContext';
import { AuthContext } from '../../../auth/context/AuthContext';

export default function UserRow({ id, name, username, email, password, admin }) {
  const { handlerUserSelectedForm, handlerRemoveUser } = useContext(UserContext);
  const { login } = useContext(AuthContext);

  const onRemoveUser = (id) => {
    handlerRemoveUser(id);
  }

  const onSelectUser = ({ id, name, username, email, password, admin }) => {
    handlerUserSelectedForm({ id, name, username, email, password, admin });
  }

  return (
    <tr >
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      {!login.isAdmin ||
        <>
          <td>
            <Button type='button' variant='secondary' size='sm' onClick={() => onSelectUser({
              id,
              name,
              username,
              email,
              password,
              admin
            })}>
              Actualizar
            </Button>
          </td>
          <td>
            <Button type='button' variant='danger' size='sm' onClick={() => onRemoveUser(id)}>
              Eliminar
            </Button>
          </td>
        </>
      }
    </tr>
  )
}