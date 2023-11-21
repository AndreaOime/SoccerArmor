import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { UserContext } from '../../../context/UserContext';

export default function UserRow({ id, username, email, password }) {
  const { handlerUserSelectedForm, handlerRemoveUser } = useContext(UserContext);

  const onRemoveUser = (id) => {
    handlerRemoveUser(id);
  }

  const onSelectUser = ({ id, username, email, password }) => {
    handlerUserSelectedForm({ id, username, email, password });
  }

  return (
    <tr >
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <Button type='button' variant='secondary' size='sm' onClick={() => onSelectUser({
          id,
          username,
          email,
          password
        })}>
          update
        </Button>
      </td>
      <td>
        <Button type='button' variant='danger' size='sm' onClick={() => onRemoveUser(id)}>
          remove
        </Button>
      </td>
    </tr>
  )
}
