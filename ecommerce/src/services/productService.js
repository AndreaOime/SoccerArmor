import axios from "axios"

const BASE_URL = 'http://localhost:8080/api/products'



export const findAllProduct = async () => {
  try {
    return await axios.get(BASE_URL);
  } catch (error) {
    console.error(error);
  }
  return null;
}

export const saveProduct = async (payload) => {
  try {
    return await axios.post(BASE_URL, payload);
  } catch (error) {
    throw error;
  }
}

export const updateProduct = async (payload) => {
  try {
    console.log(payload);
    return await axios.put(`${BASE_URL}/${payload.id}`, payload);
  } catch (error) {
    throw error;
  }
}

export const removeProduct = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
}
