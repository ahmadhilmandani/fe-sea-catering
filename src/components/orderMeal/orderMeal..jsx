import HeroImg from "../../assets/img/hero-img-reduce.jpg"
import Button from "../Button"


export default function OrderMealCard() {
  return (
    <div class="max-w-md w-full bg-white border border-gray-200 rounded-xl">
      <div className="w-full aspect-[16_/_9] bg-red-100 bg-cover bg-center bg-no-repeat overflow-hidden rounded-t-xl" style={{
        backgroundImage: `url(${HeroImg})`
      }}>
      </div>
      <div class="p-5">
        <h3 class="text-2xl font-semibold text-balance">
          Tahu Tek
        </h3>
        <div className="mb-3 text-primary-700 font-semibold mt-[-12px]">
          Rp. 10.0000, 00
        </div>

        <p class="border-b border-gray-300 py-3 mb-5 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <div className="flex mb-5 gap-2 flex-wrap">
          <div className="rounded-full bg-primary-200 px-3 py-1 w-fit">
            <div className="font-semibold text-primary-800 text-xs">
              Sarapan
            </div>
          </div>
          <div className="rounded-full bg-primary-200 px-3 py-1 w-fit">
            <div className="font-semibold text-primary-800 text-xs">
              Kalori : 200 kkal
            </div>
          </div>
          <div className="rounded-full bg-primary-200 px-3 py-1 w-fit">
            <div className="font-semibold text-primary-800 text-xs">
              Protein : 10 g
            </div>
          </div>
          <div className="rounded-full bg-primary-200 px-3 py-1 w-fit">
            <div className="font-semibold text-primary-800 text-xs">
              Kabrohidrat : 10 g
            </div>
          </div>
          <div className="rounded-full bg-primary-200 px-3 py-1 w-fit">
            <div className="font-semibold text-primary-800 text-xs">
              Lemak : 10 g
            </div>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap">
          <div className="min-w-[200px] flex-1">
            <Button isExtend={true} buttonType="secondary">
              Detail
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Button>
          </div>
          <div className="min-w-[200px] flex-1">
            <Button isExtend={true} buttonType="primary">
              Pesan
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}