import axios from "axios";

const endpoint = "http://localhost:3001/api"

const authAPI = axios.create({
  baseURL: `${endpoint}/users`
})

export const login = (payload) => authAPI.post("/auth", payload); 
