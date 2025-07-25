import axios from "axios"

export const getAdminDashboardData = async (startDate, endDate) => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_DEV_API_BASE_URL}/admin/dashboard-data?startDate=${startDate}&endDate=${endDate}`)
    return res
    
  } catch (error) {
    return error.response
  }
}