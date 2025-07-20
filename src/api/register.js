import axios from "axios"

export const register = async (payload) => {
  try {
    const res = await axios.post(`${import.meta.env.}/auth/register`, payload)
    return res
  } catch (error) {
    return error.response
  }
}