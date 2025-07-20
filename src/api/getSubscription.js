import axios from "axios"

export const getSubscriptionByUserId = async (userId) => {
  try {
    const res = await axios.get(`${import.meta.env.}/subscription-detail/${userId}`,)
    return res
    
  } catch (error) {
    return error.response
  }
}