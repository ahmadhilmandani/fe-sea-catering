import axios from "axios"

export const getUserInfo = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_DEV_API_BASE_URL}/auth/user-info`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })

    return res
  } catch (error) {
    return error.response
  }

}