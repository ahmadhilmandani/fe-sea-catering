import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../api/getUserInfo";
import { setUserInfo } from "../redux/slices/authSlice";
import { useSelector } from "react-redux"
import Sidebar from "../components/Sidebar";


export default function MainLayout() {
  const dispatch = useDispatch()
  const openSidebarSlice = useSelector((state) => state.openSidebarSlice.isOpen)


  useEffect(() => {
    const getUserInfoInit = async () => {
      const resp = await getUserInfo()
      dispatch(setUserInfo(resp.data.result.user))
    }
    getUserInfoInit()
  }, [dispatch])

  return (
    <div className="w-full min-h-screen bg-base-white relative">
      {openSidebarSlice && <Sidebar />}
      <Navbar />
      <div className="pt-40 pb-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}