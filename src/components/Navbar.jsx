import { Link, useMatch } from "react-router"
import LogoSEA from "../assets/logo/logo-sea-catering.png"
import Button from "./Button"
import { useState } from "react"
import { IconChevronDown, IconChevronUp, IconDashboard, IconLogout2, IconMenu, IconUserFilled } from "@tabler/icons-react"
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "../redux/slices/openSidebarSlice"

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const isOnLoginPage = useMatch('/login')
  const authSlice = useSelector((state) => state.authSlice.userInfo)
  const dispatch = useDispatch()

  const handleLogout = () => {
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 h-[80px] bg-base-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex justify-between items-center px-12 py-3 gap-12 z-50">
      <div className="flex gap-16 items-center">
        <div className="flex gap-3 justify-start items-center">
          <img src={LogoSEA} className="w-12 " />
          <div>
            <div className="font-bold">SEA</div>
            <div className="font-bold">CATERING</div>
          </div>
        </div>
        <Link to={'/'} className={`${useMatch('/') ? 'text-primary-700 font-semibold border-b border-primary-800' : ''} trasition-all hidden xl:block`}>
          Home
        </Link>
        <a href="#service" className="hidden xl:block">
          Lovely Services
        </a>
        <a href="#testimoni" className="hidden xl:block">
          Testimoni
        </a>
        <a href="#howto" className="hidden xl:block">
          How to?
        </a>
      </div>

      <div className="xl:hidden block">
        <IconMenu onClick={()=>{dispatch(toggleSidebar())}} />
      </div>

      <div className="xl:flex gap-8 items-center hidden">
        <Link to={'/order-meal'} className={`${useMatch('/order-meal') ? 'text-primary-700 font-semibold border-b border-primary-800' : ''} trasition-all text-nowrap`}>
          Order Meal
        </Link>
        <Link to={'/subscription'} className={`${useMatch('/subscription') ? 'text-primary-700 font-semibold border-b border-primary-800' : ''} trasition-all`}>
          Subscribe
        </Link>
        <Link className={`${useMatch('/contact') ? 'text-primary-700 font-semibold border-b border-primary-800' : ''} trasition-all`}>
          Contact
        </Link>
        {authSlice ? <>
          <div className="max-w-[200px] w-full relative">
            <Button buttonType="primary" isExtend={true} onClickProp={() => {
              setIsDropdownOpen((state) => !state)
            }}>
              <IconUserFilled className="shrink-0" />
              <div className="line-clamp-1">
                {authSlice.name}
              </div>
              {isDropdownOpen ?
                <IconChevronUp className="shrink-0" />
                :
                <IconChevronDown className="shrink-0" />
              }
            </Button>
            {isDropdownOpen &&
              <div id="dropdown" className="z-10 bg-white border border-gray-300 rounded-lg shadow-sm w-full absolute top-14 right-0">
                <ul className="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
                  <li onClick={() => { setIsDropdownOpen(false) }}>
                    <Link to={authSlice.is_admin ? '/admin-dashboard' : '/dashboard'} className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100">
                      <IconDashboard />
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <div className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                      <IconLogout2 />
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            }
          </div>
        </> :
          <>
            <Link to={'/register'}>
              <Button buttonType="primary">
                Daftar
              </Button>
            </Link>
            <Link to={'/login'} className={`${isOnLoginPage ? 'text-primary-700 font-semibold border-b border-primary-800' : 'border-b font-semibold hover:cursor-pointer'} `}>
              Login
            </Link>
          </>
        }
      </div>
    </nav>
  )
}