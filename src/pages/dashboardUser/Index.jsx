import { useSelector } from "react-redux"
import Modal from "../../components/Modal"
import { useState } from "react"
import ScreenLoading from "../../components/ScreenLoading"
import Button from "../../components/Button"
import UserInfoSection from "./UserInfoSection"
import { Link } from "react-router"
import SidebarNav from "./SidebarNav"
import Subscription from "./Subscription"
import DashboardUserOrderMeal from "./OrderMeal"




export default function DashboardIndex() {
  const [activeSection, setActiveSection] = useState('profile')

  const authSlice = useSelector((state) => state.authSlice.userInfo)
  const isLoading = useSelector((state) => state.loaderSlice.isLoading)


  const DASHBOARD_SECTION = {
    'profile': <UserInfoSection />,
    'subscription': <Subscription />,
    'meal_order': <DashboardUserOrderMeal />
  }




  return (
    <>
      {isLoading && <ScreenLoading />}
      <main className="w-full min-h-screen px-12">
        <div className="rounded-full bg-primary-100 py-2 px-4 flex items-center gap-3 w-fit">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-600 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-primary-700"></span>
          </span>
          <div className="font-semibold text-primary-800">
            DASHBOARD
          </div>
        </div>
        <h1 className="text-primary-700 text-balance">
          Selamat Datang, {authSlice.name} 👋!
        </h1>
        <div className="text-gray-500 mb-10">
          Pantau aktivitas, kelola langganan, dan temukan insight personal seputar pola makan sehatmu di satu tempat.
        </div>
        <div className="flex gap-10 flex-wrap">

          <SidebarNav activeSection={activeSection} setActiveSection={setActiveSection} />

          <div className="min-w-[320px] flex-1 p-5 rounded-lg bg-white border border-gray-300">
            {DASHBOARD_SECTION[activeSection]}
          </div>
        </div>
      </main>
    </>
  )
}