import React, { useContext, useEffect } from 'react'
import UsersList from '../components/UsersList/UsersList'
import { Button } from 'react-bootstrap';
import UserModalForm from '../components/UserModalForm/UserModalForm';
import { UserContext } from '../context/UserContext';
import { AuthContext } from '../auth/context/AuthContext';

export default function UsersPage() {
  const {
    users,
    visibleForm,
    handlerOpenForm,
    getUsers
  } = useContext(UserContext);

  const { login } = useContext(AuthContext);

  useEffect(() => {
    getUsers();
  })

  return (
    <>
      {!visibleForm ||
        <UserModalForm />
      }
      <div className={'container my-4'}>
        <h2>Users Page</h2>
        <div className="row">
          <div className="col">
            {
              (visibleForm || !login.isAdmin) ||
              <Button className="my-2"
                variant="primary"
                type="button"
                onClick={handlerOpenForm}
              >
                Nuevo Usuario
              </Button>
            }
            {
              users.length === 0
                ? <div className="alert alert-warning">No hay usuarios en el sistema</div>
                : <UsersList />
            }
          </div>
        </div>
      </div>
    </>
  )
}
