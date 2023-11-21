import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { UserContext } from '../../context/UserContext';
import UserRow from './components/UserRow';

export default function UsersList() {

  const { users = [] } = useContext(UserContext);

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>#</th>
          <th>username</th>
          <th>email</th>
          <th>update</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(({ _id, username, email, password }) => (
            <UserRow
              key={_id}
              id={_id}
              username={username}
              email={email}
              password={password}
            />
          ))
        }
      </tbody>
    </Table>
  )
}
