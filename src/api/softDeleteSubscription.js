import axios from "axios"

export const softDeleteSubscription = async (idSubscription) => {
  try {
    const res = await axios.delete(`${import.meta.env.VITE_DEV_API_BASE_URL}/subscription/${idSubscription}`)
    return res

  } catch (error) {
    return error.response
  }
}