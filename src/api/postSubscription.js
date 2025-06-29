import axios from "axios"

export const postTestimoni = async (payload) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_DEV_API_BASE_URL}/subscription-detail`, payload)
    return res
    
  } catch (error) {
    return error.response
  }
}