import axios from "axios"

export const postOrderMealReg = async (payload) => {
  try {
    const res = await axios.post(`${import.meta.env.}/order-meal/registered`, payload)
    return res
    
  } catch (error) {
    return error.response
  }
}