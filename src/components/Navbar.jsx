import { Link } from "react-router"
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
        <a>
          Home
        </a>
        <a>
          Lovely Services
        </a>
        <a>
          How to?
        </a>
      </div>

      <div className="flex gap-8 items-center">
        <Link>
          Order Meal
        </Link>
        <Link>
          Subscribe
        </Link>
        <Link>
          Contact
        </Link>
        <Button buttonType="primary">
          Daftar
        </Button>
        <Link className="text-primary-900 border-b border-primary-900">
          Login
        </Link>
      </div>

    </nav>
  )
}