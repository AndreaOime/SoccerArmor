import axios from "axios"

const BASE_URL = 'http://localhost:8080/api/users'

const config = () => {
  return {
    headers: {
      "Authorization": sessionStorage.getItem('token'),
      "Content-Type": "application/json"
    }
  }
}

export const findAll = async () => {
  try {
    return await axios.get(BASE_URL, config());
  } catch (error) {
    console.error(error);
  }
  return null;
}

export const save = async ({ name, username, email, password, admin }) => {
  try {
    return await axios.post(BASE_URL, {
      name,
      username,
      email,
      password,
      admin
    }, config());
  } catch (error) {
    throw error;
  }
}

export const update = async ({ id, name, username, email, admin }) => {
  try {
    return await axios.put(`${BASE_URL}/${id}`, {
      name,
      username,
      email,
      admin
    }, config());
  } catch (error) {
    throw error;
  }
}

export const remove = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`, config());
  } catch (error) {
    console.error(error);
  }
}
