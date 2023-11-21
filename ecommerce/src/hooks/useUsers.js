import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";

const initialUsers = [];

const initialUserForm = {
  id: 0,
  name: '',
  username: '',
  password: '',
  email: '',
  admin: false
}

const initialErrors = {
  username: '',
  password: '',
  email: ''
}

export const useUsers = () => {

  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUserForm);
  const [visibleForm, setVisibleForm] = useState(false);

  const [errors] = useState(initialErrors);
  const navigate = useNavigate();

  const getUsers = async () => {
    const result = await findAll();
    dispatch({
      type: 'loadingUsers',
      payload: result.data
    })
  }

  const handlerAddUser = async (user) => {
    let response;
    try {
      if (user.id === 0) {
        response = await save(user);
      } else {
        response = await update(user);
      }

      dispatch({
        type: (user.id === 0) ? 'addUser' : 'updateUser',
        payload: response.data
      })

      Swal.fire({
        title: (user.id === 0) ? "Usuario Creado" : "Usuario Actualizado",
        text: (user.id === 0) ? "El usuario ha sido creado con exito!" : "El usuario ha sido actualizado con exito!",
        icon: "success"
      });

      handlerCloseForm();
      dispatch({
        type: 'loadingUsers',
        payload: []
      })
      navigate('/users')
    } catch (error) {
      console.error(error);
    }
  }

  const handlerRemoveUser = (id) => {
    Swal.fire({
      title: "Está seguro que sea eliminar?",
      text: "Cuidado el usuario será eliminado!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        remove(id);
        dispatch({
          type: 'removeUser',
          payload: id
        })
        Swal.fire({
          title: "Usuario Eliminado!",
          text: "El usuario ha sido eliminado con exito!",
          icon: "success"
        });
      }
    });
  }

  const handlerUserSelectedForm = (user) => {
    handlerOpenForm();
    setUserSelected({ ...user });
  }

  const handlerOpenForm = () => {
    setVisibleForm(true);
  }

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setUserSelected(initialUserForm);
  }

  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    errors,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    getUsers
  }
}
