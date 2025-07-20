import axios from "axios"

export const login = async (payload) => {
  try {
    const res = await axios.post(`${import.meta.env.}/auth/login`, payload)
    return res
  } catch (error) {
    return error.response
  }
}