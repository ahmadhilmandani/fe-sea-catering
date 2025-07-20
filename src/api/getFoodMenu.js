import axios from "axios"

export const getFoodMenu = async (dietType) => {
  try {
    let apiUrl = `${import.meta.env.VITE_DEV_API_BASE_URL}/food-menu`

    if (dietType) {
      apiUrl = apiUrl + '?dietType=' + dietType
    }

    const res = await axios.get(apiUrl)
    return res

  } catch (error) {
    return error.response
  }
}