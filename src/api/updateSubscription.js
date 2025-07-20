import axios from "axios"

export const updateSubsciption = async (idSubscription, payload) => {
  try {
    const res = await axios.put(`${import.meta.env.}/subscription/${idSubscription}`, payload)
    return res
    
  } catch (error) {
    return error.response
  }
}