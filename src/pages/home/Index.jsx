import { Link } from "react-router";
import Navbar from "../../components/Navbar";
import { IconArrowDown, IconBrandGoogle, IconBrandWhatsapp, IconChevronDown, IconChevronUp, IconSalad, IconStarFilled, IconX } from "@tabler/icons-react";
import HeroImg from "../../assets/img/hero-img-reduce.jpg"
import Button from "../../components/Button";
import TestimoniCard from "./TestimoniCard";
import Input from "../../components/Input";
import TestimoniFormCard from "./TestimoniFormCard";
import { useEffect, useState } from "react";
import { getTestimoni } from "../../api/getTestimoni";

export default function HomeIndex() {
  const [isTestiFormOpen, setIsTestiFormOpen] = useState(false)
  const [testimonies, setTestimonies] = useState()

  const handleGetTestimonies = async () => {
    const resp = await getTestimoni(5)
    setTestimonies(resp.data.result)
  }
  
  useEffect(() => {
    handleGetTestimonies()
  }, [])


  return (
    <div className="relative">
      <main className="px-12">
        <section className="pb-24">
          <div className="flex gap-4 xl:gap-20 justify-between mb-20 flex-wrap">
            <div className="min-w-[320px] flex-1">
              <div className="rounded-full bg-primary-100 p-2 flex items-center gap-3 w-fit">
                <span class="relative flex size-3">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-600 opacity-75"></span>
                  <span class="relative inline-flex size-3 rounded-full bg-primary-700"></span>
                </span>
                <div className="font-semibold text-primary-800">
                  SEA CATERING
                </div>
              </div>
              <h1 className="text-6xl xl:text-8xl text-primary-700 text-balance">
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
          <div className="flex gap-20 justify-between mb-20 flex-wrap">
            <div className="min-w-[320px] hidden xl:block flex-1 aspect-[16_/_8] bg-gray-200 bg-cover bg-center bg-no-repeat overflow-hidden rounded-xl" style={{
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
        <section id="service" className="py-36">
          <div className="flex gap-12 xl:gap-32 justify-center items-center flex-wrap">
            <div className="min-w-[320px] max-w-[480px] flex-1">
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
            <div className="min-w-[320px] max-w-[560px] flex-1">
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
        <section id="howto" className="h-screen py-36 flex justify-center items-center">
          <div>
            <div className="text-center">
              <h2 className="font-semibold mb-24">
                How to Use Our Service?
              </h2>
            </div>
            <ol className="items-center sm:flex">
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center size-12 text-white bg-primary-600 rounded-full ring-0 ring-base-white sm:ring-8 shrink-0">
                    01.
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8 ">
                  <h3 className="font-semibold text-gray-900">Daftar & Berlangganan</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Spill makanan seperti apa yang anda inginkan, alergi yang anda miliki, serta kapan dan dimana makanan mu ingin diantarkan!
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center size-12 text-white bg-primary-600 rounded-full ring-0 ring-base-white sm:ring-8 shrink-0">
                    02.
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8 ">
                  <h3 className="font-semibold text-gray-900">Pay The Bill</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Lakukan pembayaran dengan mudah dan aman melalui berbagai metode yang tersedia.
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center size-12 text-white bg-primary-600 rounded-full ring-0 ring-base-white sm:ring-8 shrink-0">
                    03.
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8 ">
                  <h3 className="font-semibold text-gray-900">Sit Back, Your Healthy Meal On Delivery!</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Duduk santai dan tunggu, makanan sehat Anda segera dikirim langsung ke depan pintu.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section id="testimoni" className="min-h-screen py-24">
          <h2 className="font-semibold mb-8 text-center">
            Testimonial
          </h2>
          <div className="max-w-6xl w-full overflow-x-auto flex pl-10 gap-12 mb-12 mx-auto pb-8">
            {testimonies?.map((element) => {
              return (
                <TestimoniCard address={element.address} name={element.name} star={element.star} testimoni={element.testimoni} />
              )
            })}
          </div>
          <p className="mb-2 text-center">Kalau kamu pernah menggunakan layanan kami, maka apresiasi yang besar bila kamu juga memberikan testimoni ! </p>
          {isTestiFormOpen ?
            <>
              <div className="mx-auto max-w-3xl w-full mb-5">
                <TestimoniFormCard />
              </div>
              <div className="w-72 mx-auto">
                <Button buttonType="secondary" isExtend={true} onClickProp={() => { setIsTestiFormOpen(false) }}>
                  Tutup Form
                  <IconChevronUp className="text-primary-900" />
                </Button>
              </div>
            </>
            :
            <div className="w-72 mx-auto">
              <Button buttonType="primary" isExtend={true} onClickProp={() => { setIsTestiFormOpen(true) }}>
                Beri Testimonimu
                <IconChevronDown color="white" />
              </Button>
            </div>
          }
        </section>
        <section className="py-24 min-h-screen">
          <div className="flex gap-12 xl:gap-20 justify-center items-center flex-wrap">
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
    </div>
  )
}