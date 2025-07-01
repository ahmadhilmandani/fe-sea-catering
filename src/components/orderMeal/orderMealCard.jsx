// import HeroImg from "../../assets/img/hero-img-reduce.jpg"
import Button from "../Button"


export default function OrderMealCard({ cardTitle, price, description, nutrition, onClickButton2ndary }) {
  return (
    <div className="max-w-md w-full aspect-[7/6] bg-white border border-gray-200 rounded-xl relative">
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-balance line-clamp-2">
          {cardTitle}
        </h3>
        <div className="mb-3 text-primary-700 font-semibold mt-[-12px]">
          Rp. {price}
        </div>

        <p className="font-normal text-gray-700 line-clamp-1">{description}</p>
        <div className="pb-3 mb-5 border-b border-gray-300">

        </div>
        <div className="flex gap-1">
        <div className="flex mb-5 gap-2 overflow-hidden w-[90%]">
          {nutrition.map((element) => {
            return (
              <>
                <div className="rounded-full bg-primary-200 px-3 py-1 w-fit min-w-[130px]">
                  <div className="font-semibold text-primary-800 text-xs text-center">
                    {element?.name} :  {element?.value} {element?.unit}
                  </div>
                </div>
              </>
            )
          })}
          </div>
          <div className="flex mb-5 gap-2 overflow-hidden w-12">
            ....
            </div>
        </div>
        <div className="flex gap-5 flex-wrap absolute bottom-5 left-5 right-5">
          <div className="min-w-[200px] flex-1">
            <Button isExtend={true} buttonType="secondary" onClickProp={onClickButton2ndary}>
              Detail
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}