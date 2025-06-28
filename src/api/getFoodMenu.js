import axios from "axios"

export const getFoodMenu = async () => {
  try {
    let apiUrl = `${import.meta.env.VITE_DEV_API_BASE_URL}/food-menu`

    const res = await axios.get(apiUrl)
    return res
    
  } catch (error) {
    return error.response
  }
}