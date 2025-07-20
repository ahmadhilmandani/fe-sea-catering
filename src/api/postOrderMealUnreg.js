import axios from "axios"

export const postOrderMealUnreg = async (payload) => {
  try {
    const res = await axios.post(`${import.meta.env.}/order-meal/unregistered`, payload)
    return res
    
  } catch (error) {
    return error.response
  }
}