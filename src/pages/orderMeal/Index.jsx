import { useState } from "react"
import HeroImg from "../../assets/img/hero-img-reduce.jpg"
import OrderMealCard from "../../components/orderMeal/orderMeal."
import Modal from "../../components/Modal"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setIsOpen } from "../../redux/slices/modalSlice"


const FILTER_OPT = {
  all: 'semua',
  balanced: 'diet seimbang',
  keto: 'diet keto',
  vegetarian: 'vegetarian',
  lowCalorie: 'rendah kalori',
  highProtein: 'tinggi protein'
}


export default function OrderMealIndex() {
  const [activeFilter, setActiveFilter] = useState('all')
  const dispatch = useDispatch()
  const isModalOpen = useSelector((state) => state.modalSlice.isOpen)

  return (

    <>
      {isModalOpen &&

        <Modal />
      }
      <div className="px-12">
        <header className="mb-8">
          <h1 className="text-8xl text-primary-700 text-balance">
            Pemesanan Diet
          </h1>
          <div className="text-gray-500">
            Pilih dan pesan paket diet sesuai kebutuhan nutrisi dan gaya hidup Anda, siap antar langsung ke rumah!
          </div>
        </header>
        <main>
          <div className="font-medium text-center text-gray-500 border-b border-gray-200 mb-12">
            <ul className="flex flex-wrap gap-2">
              <li>
                <div onClick={() => { setActiveFilter(FILTER_OPT.all) }} className={`${activeFilter == FILTER_OPT.all ? 'font-semibold border-b-2 border-primary-700 text-primary-700' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 cursor-pointer'} capitalize inline-block p-4 rounded-t-lg`}>{FILTER_OPT.all}</div>
              </li>
              <li>
                <div onClick={() => { setActiveFilter(FILTER_OPT.balanced) }} className={`${activeFilter == FILTER_OPT.balanced ? 'font-semibold border-b-2 border-primary-700 text-primary-700' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 cursor-pointer'} capitalize inline-block p-4 rounded-t-lg`}>{FILTER_OPT.balanced}</div>
              </li>
              <li>
                <div onClick={() => { setActiveFilter(FILTER_OPT.keto) }} className={`${activeFilter == FILTER_OPT.keto ? 'font-semibold border-b-2 border-primary-700 text-primary-700' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 cursor-pointer'} capitalize inline-block p-4 rounded-t-lg`}>{FILTER_OPT.keto}</div>
              </li>
              <li>
                <div onClick={() => { setActiveFilter(FILTER_OPT.vegetarian) }} className={`${activeFilter == FILTER_OPT.vegetarian ? 'font-semibold border-b-2 border-primary-700 text-primary-700' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 cursor-pointer'} capitalize inline-block p-4 rounded-t-lg`}>{FILTER_OPT.vegetarian}</div>
              </li>
              <li>
                <div onClick={() => { setActiveFilter(FILTER_OPT.lowCalorie) }} className={`${activeFilter == FILTER_OPT.lowCalorie ? 'font-semibold border-b-2 border-primary-700 text-primary-700' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 cursor-pointer'} capitalize inline-block p-4 rounded-t-lg`}>{FILTER_OPT.lowCalorie}</div>
              </li>
              <li>
                <div onClick={() => { setActiveFilter(FILTER_OPT.highProtein) }} className={`${activeFilter == FILTER_OPT.highProtein ? 'font-semibold border-b-2 border-primary-700 text-primary-700' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 cursor-pointer'} capitalize inline-block p-4 rounded-t-lg`}>{FILTER_OPT.highProtein}</div>
              </li>
            </ul>
          </div>
          <div className="flex gap-12">
            <OrderMealCard onClickButton2ndary={() => { dispatch(setIsOpen(true)) }} />
          </div>
        </main>
      </div>
    </>
  )

}