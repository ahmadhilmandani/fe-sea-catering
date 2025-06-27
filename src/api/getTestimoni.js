import axios from "axios"

export const getTestimoni = async (getLimit) => {
  try {
    let apiUrl = `${import.meta.env.VITE_DEV_API_BASE_URL}/testimoni`
    
    if (getLimit) {
      apiUrl = apiUrl + `?getLimit=${getLimit}`
    }

    const res = await axios.get(apiUrl)
    return res
    
  } catch (error) {
    return error.response
  }
}