import axios from "axios"

export const register = async (payload) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_DEV_API_BASE_URL}/auth/register`, payload)
    return res
  } catch (error) {
    return error.response
  }
}