import Button from "../Button";

export default function MealPlanCard({ mealPlanType, price, children, isActive }) {
  return (
    <>
      <div className={`${isActive ? 'bg-primary-100 border border-primary-700' : 'bg-gray-50 border border-gray-300' } w-full max-w-sm p-4  rounded-lg sm:p-8`}>
        <div className="flex gap-8 justify-between">
          <h5 className="font-semibold text-gray-600 capitalize">{mealPlanType}</h5>
          <div className="size-6 rounded-full p-1 bg-white border border-gray-300 flex justify-center items-center">
            <div className={`${isActive ? 'bg-primary-700 size-3 rounded-full' : ''} `}>

            </div>
          </div>
        </div>
        <div className={`flex items-baseline ${isActive ? 'text-primary-700' : ''} `}>
          <span className="text-3xl font-semibold">Rp. </span>
          <span className="text-5xl font-semibold tracking-tight">{price}</span> / Makanan
        </div>
        <div className="mt-4 text-gray-600">
          {children}
        </div>
      </div>
    </>
  )
}