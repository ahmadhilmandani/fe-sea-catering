import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="w-full min-h-screen bg-base-white relative">
      <Navbar />
      <div className="pt-40 pb-20">
        <Outlet />
      </div>
    </div>
  )
}