import { IconBrandGoogle, IconBrandWhatsapp, IconX } from "@tabler/icons-react"
import IconWhite from "../assets/logo/logo-sea-catering-white.png"

export default function Footer() {
  return (
    <>
      <footer className="bg-primary-800">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img src={IconWhite} className="h-12 me-3" alt="FlowBite Logo" />
                <div>
                  <div className="font-bold text-white">SEA</div>
                  <div className="font-bold text-white">CATERING</div>
                </div>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">MENU</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline text-white">Home</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" className="hover:underline text-white">Lovely Services</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" className="hover:underline text-white">How to?</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" className="hover:underline text-white">Our Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">SERVICES</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline text-white">Meal Customization</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" className="hover:underline text-white">Delivery to Major Cities</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" className="hover:underline text-white">Detailed Nutritional Information</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white">© 2025 <a href="https://flowbite.com/" className="hover:underline">SEA CATERING</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 gap-3">
              <IconBrandGoogle size={16} className="text-white" />
              <IconX size={16} className="text-white" />
              <IconBrandWhatsapp size={16} className="text-white" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}