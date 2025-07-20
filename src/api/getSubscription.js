import axios from "axios"

export const getSubscriptionByUserId = async (userId) => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_DEV_API_BASE_URL}/subscription-detail/${userId}`,)
    return res
    
  } catch (error) {
    return error.response
  }
}