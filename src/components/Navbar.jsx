import { Link, useMatch } from "react-router"
import LogoSEA from "../assets/logo/logo-sea-catering.png"
import Button from "./Button"

export default function Navbar() {

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
        <Link to={'/'} className={`${useMatch('/') ? 'text-primary-700 font-semibold border-b border-primary-800' : ''} trasition-all`}>
          Home
        </Link>
        <a>
          Lovely Services
        </a>
        <a>
          Testimoni
        </a>
        <a>
          How to?
        </a>
      </div>

      <div className="flex gap-8 items-center">
        <Link to={'/order-meal'} className={`${useMatch('/order-meal') ? 'text-primary-700 font-semibold border-b border-primary-800' : ''} trasition-all`}>
          Order Meal
        </Link>
        <Link to={'/subscription'} className={`${useMatch('/subscription') ? 'text-primary-700 font-semibold border-b border-primary-800' : ''} trasition-all`}>
          Subscribe
        </Link>
        <Link className={`${useMatch('/contact') ? 'text-primary-700 font-semibold border-b border-primary-800' : ''} trasition-all`}>
          Contact
        </Link>
        <Link>
          <Button buttonType="primary">
            Daftar
          </Button>
        </Link>
        <Link className="border-b font-semibold">
          Login
        </Link>
      </div>
    </nav>
  )
}