import { Link } from "react-router";
import Navbar from "../../components/Navbar";
import { IconArrowDown, IconBrandGoogle, IconBrandWhatsapp, IconSalad, IconX } from "@tabler/icons-react";
import HeroImg from "../../assets/img/hero-img-reduce.jpg"
import Button from "../../components/Button";
import IconWhite from "../../assets/logo/logo-sea-catering-white.png"

export default function HomeIndex() {
  return (
    <div className="w-full min-h-screen bg-base-white relative">
      <Navbar />
      <main className="px-12">
        <section className="pb-24">
          <div className="flex gap-20 justify-between mb-20">
            <div className="min-w-[320px] flex-1">
              <div className="rounded-full bg-primary-200 p-2 flex items-center gap-3 w-fit">
                <div className="w-4 aspect-square bg-primary-600 rounded-full">
                </div>
                <div className="font-semibold text-primary-800">
                  SEA CATERING
                </div>
              </div>
              <h1 className="text-8xl text-primary-700 text-balance">
                Healthy Meals, Anytime, Anywhere.
              </h1>
            </div>
            <div className="min-w-[320px] flex-1 max-w-[480px] flex flex-col justify-end">
              <p className="mb-16 text-gray-600">
                SEA Catering adalah layanan katering makanan sehat yang dapat disesuaikan dengan kebutuhan pribadi Anda, siap dikirim ke seluruh Indonesia. Kami menawarkan berbagai pilihan menu bernutrisi yang dapat dikustomisasi sesuai preferensi diet, gaya hidup, dan tujuan kesehatan Anda. Dengan bahan berkualitas dan proses masak higienis, SEA Catering hadir sebagai solusi praktis untuk hidup sehat tanpa repot.
              </p>
              <a href="" className="flex gap-2 py-3 px-6 border rounded-full border-black w-fit font-semibold">
                Kenal Lebih Dekat
                <IconArrowDown size={16} className="animate-bounce" />
              </a>
            </div>
          </div>
          <div className="flex gap-20 justify-between items- mb-20">
            <div className="min-w-[320px] flex-1 aspect-[16_/_8] bg-red-100  bg-cover bg-center bg-no-repeat overflow-hidden rounded-xl" style={{
              backgroundImage: `url(${HeroImg})`
            }}>
            </div>
            <div className="min-w-[320px] flex-1 max-w-[480px] flex flex-col justify-center items-center">
              <div className="size-60 rounded-full bg-primary-200">

              </div>
              <div className="size-60 rounded-full bg-primary-600 relative -top-24 flex justify-center items-center">
                <div className="p-6">
                  <div className="text-white text-5xl text-center mb-3">
                    100K +
                  </div>
                  <div className="text-center text-white text-balance">
                    Happy Heatlhy Customer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="flex gap-32 justify-center items-center">
            <div className="max-w-[480px] flex-1">
              <IconSalad size={56} stroke={1.3} className="mb-5 text-primary-600" />
              <h2 className="text-primary-700 font-semibold">
                Lovely Services
                <br />
                <span className="text-4xl text-black text-balance">
                  We Provide Special For You!
                </span>
              </h2>
              <div className="text-gray-600">
                I want you to have a healthy life, that's why we have this services !
              </div>
            </div>
            <div className="max-w-[560px] flex-1">
              <div className="pb-3 mb-5 border-b border-gray-200">
                <h3 className="text-primary-700 font-semibold">
                  01.
                  <span className="text-2xl text-black text-balance inline-block ml-2">
                    Meal Customization.
                  </span>
                </h3>
                <div className="text-gray-600">
                  Kami menawarkan fleksibilitas tinggi untuk menciptakan pola makan yang benar-benar cocok untuk Anda.
                </div>
              </div>
              <div className="pb-3 mb-5 border-b border-gray-200">
                <h3 className="text-primary-700 font-semibold">
                  02.
                  <span className="text-2xl text-black text-balance inline-block ml-2">
                    Meal Customization.
                  </span>
                </h3>
                <div className="text-gray-600">
                  Kami melayani pengiriman ke berbagai kota besar di seluruh Indonesia dengan sistem logistik yang andal.
                </div>
              </div>
              <div className="pb-3 mb-5 border-b border-gray-200">
                <h3 className="text-primary-700 font-semibold">
                  03.
                  <span className="text-2xl text-black text-balance inline-block ml-2">
                    Detailed Nutritional Information.
                  </span>
                </h3>
                <div className="text-gray-600">
                  Setiap hidangan dilengkapi informasi nutrisi lengkap seperti kalori, protein, lemak, dan karbohidrat.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-screen py-24 flex justify-center items-center">
          <div>
            <div className="text-center">
              <h2 className="font-semibold mb-24">
                How to Use Our Service?
              </h2>
            </div>
            <ol class="items-center sm:flex">
              <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                  <div class="z-10 flex items-center justify-center size-12 text-white bg-primary-600 rounded-full ring-0 ring-base-white sm:ring-8 shrink-0">
                    01.
                  </div>
                  <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pe-8 ">
                  <h3 class="font-semibold text-gray-900">Daftar & Berlangganan</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Spill makanan seperti apa yang anda inginkan, alergi yang anda miliki, serta kapan dan dimana makanan mu ingin diantarkan!
                  </p>
                </div>
              </li>
              <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                  <div class="z-10 flex items-center justify-center size-12 text-white bg-primary-600 rounded-full ring-0 ring-base-white sm:ring-8 shrink-0">
                    02.
                  </div>
                  <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pe-8 ">
                  <h3 class="font-semibold text-gray-900">Pay The Bill</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Lakukan pembayaran dengan mudah dan aman melalui berbagai metode yang tersedia.
                  </p>
                </div>
              </li>
              <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                  <div class="z-10 flex items-center justify-center size-12 text-white bg-primary-600 rounded-full ring-0 ring-base-white sm:ring-8 shrink-0">
                    03.
                  </div>
                  <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pe-8 ">
                  <h3 class="font-semibold text-gray-900">Sit Back, Your Healthy Meal On Delivery!</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Duduk santai dan tunggu, makanan sehat Anda segera dikirim langsung ke depan pintu.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="py-24 min-h-screen">
          <div class="flex gap-20 justify-center items-center">
            <div className="min-w-[320px] flex-1 max-w-[40%]">
              <h2 className="text-balance">Yuk, Izinkan Kami Ngebantu Kamu Buat Hidup Sehat!</h2>
              <p className="text-gray-600 mb-12">
                Dengan menu yang bisa dikustom, pengiriman luas, dan info nutrisi lengkap, SEA Catering bantu kamu capai gaya hidup sehat yang konsisten dan menyenangkan.
              </p>
              <div className="w-96 mb-5">
                <Button isExtend={true} buttonType="primary">
                  Daftar Di Sini!
                </Button>
              </div>
              <div>sudah punya akun?
                <Link className="text-primary-700 border-b border-primary-700 ml-3">
                  Login Aja Sini!
                </Link>
              </div>
            </div>
            <div className="min-w-[320px] flex-1 max-w-[30%]">
              <h2 className="font-semibold text-balance">
                Atau Masih Mau Tanya-Tanya? Bolehhh
              </h2>
              <p className="mb-7 text-gray-600">
                Tanya Kami di Platform Berikut yaa:
              </p>
              <div>
                <button type="button" className="flex w-full mb-5 text-black bg-gray-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center ">
                  <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                    <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                  </svg>
                  ahmadhilmanlagi@gmail.com
                </button>
                <button type="button" className="bg-gray-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex w-full mb-5 items-center  text-black">
                  <IconX size={16} />
                  @lilbitmessy_
                </button>
                <button type="button" className="text-black bg-gray-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex w-full mb-5 items-center gap-2 ">
                  <IconBrandWhatsapp size={16} />
                  (+62) 81231988716
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="bg-primary-800">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                <img src={IconWhite} class="h-12 me-3" alt="FlowBite Logo" />
                <div>
                  <div className="font-bold text-white">SEA</div>
                  <div className="font-bold text-white">CATERING</div>
                </div>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6">
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">MENU</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline text-white">Home</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" class="hover:underline text-white">Lovely Services</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" class="hover:underline text-white">How to?</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" class="hover:underline text-white">Our Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">SERVICES</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline text-white">Meal Customization</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" class="hover:underline text-white">Delivery to Major Cities</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" class="hover:underline text-white">Detailed Nutritional Information</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-white">© 2025 <a href="https://flowbite.com/" class="hover:underline">SEA CATERING</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0 gap-3">
              <IconBrandGoogle size={16} className="text-white" />
              <IconX size={16} className="text-white" />
              <IconBrandWhatsapp size={16} className="text-white" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}