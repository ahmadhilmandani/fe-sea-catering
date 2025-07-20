import axios from "axios"

export const getTestimoni = async (getLimit) => {
  try {
    let apiUrl = `${import.meta.env.}/testimoni`
    
    if (getLimit) {
      apiUrl = apiUrl + `?getLimit=${getLimit}`
    }

    const res = await axios.get(apiUrl)
    return res
    
  } catch (error) {
    return error.response
  }
}