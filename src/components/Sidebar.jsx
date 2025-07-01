import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch } from "react-router";
import { toggleSidebar } from "../redux/slices/openSidebarSlice";
import Button from "./Button";

export default function Sidebar() {
  const dispatch = useDispatch()
  const isOnLoginPage = useMatch('/login')

  const authSlice = useSelector((state) => state.authSlice.userInfo)

  const handleLogout = () => {
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <div className="w-full h-screen bg-black/80 z-[10000000000000] fixed top-0 left-0 right-0 bottom-0">

      <aside className="min-w-[240px] max-w-[640px] w-full bg-white flex flex-col h-screen">

        <Link to={'/'} className={`${useMatch('/') ? 'text-primary-700 font-semibold border-b border-primary-800' : ''} trasition-all border-b border-gray-200 p-8`} onClick={() => {
          dispatch(toggleSidebar())
        }}>
          Home
        </Link>


        <Link to={'/order-meal'} className={`${useMatch('/order-meal') ? 'text-primary-700 font-semibold border-b border-primary-800' : ''} trasition-all text-nowrap p-8 border-b border-gray-200`} onClick={() => {
          dispatch(toggleSidebar())
        }}>
          Order Meal
        </Link>

        <Link to={'/subscription'} className={`${useMatch('/subscription') ? 'text-primary-700 font-semibold border-b border-primary-800' : ''} trasition-all p-8 border-b border-gray-200`} onClick={() => {
          dispatch(toggleSidebar())
        }}>
          Subscribe
        </Link>


        {authSlice ? <>

          <Link to={authSlice.is_admin ? '/admin-dashboard' : '/dashboard'} className="flex gap-2 items-center hover:bg-gray-100 p-8 border-b border-gray-200" onClick={() => {
            dispatch(toggleSidebar())
          }}>
            Dashboard
          </Link>

          <div className="flex gap-2 items-center hover:bg-gray-100 cursor-pointer p-8 border-b border-gray-200" onClick={handleLogout}>
            Logout
          </div>
        </> :
          <>
            <Link to={'/register'} className="p-4 border-b border-gray-200" onClick={() => {
              dispatch(toggleSidebar())
            }}>
              <Button buttonType="primary" isExtend={true}>
                Daftar
              </Button>
            </Link>
            <Link to={'/login'} className={`${isOnLoginPage ? 'text-primary-700 font-semibold border-b border-primary-800' : 'border-b font-semibold hover:cursor-pointer'} p-8 border-b border-gray-200`} onClick={() => {
              dispatch(toggleSidebar())
            }}>
              Login
            </Link>
          </>
        }
      </aside>
    </div>
  )
}