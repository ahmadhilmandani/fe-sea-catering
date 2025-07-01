import { useEffect, useState } from "react"
import OrderMealCard from "../../components/orderMeal/orderMealCard"
import Modal from "../../components/Modal"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setIsOpen } from "../../redux/slices/modalSlice"
import { getFoodMenu } from "../../api/getFoodMenu"
import Input from "../../components/Input"
import { postOrderMealReg } from "../../api/postOrderMealReg"
import { setLoader } from "../../redux/slices/loaderSlice"
import { toast } from "react-toastify"
import ScreenLoading from "../../components/ScreenLoading"
import { postOrderMealUnreg } from "../../api/postOrderMealUnreg"


const FILTER_OPT = {
  all: 'semua',
  balanced: 'diet seimbang',
  lowCalorie: 'rendah kalori',
  highProtein: 'tinggi protein',
  royal: 'royal',
}


export default function OrderMealIndex() {
  const [activeFilter, setActiveFilter] = useState(0)
  const [detailMealIndex, setDetailMealIndex] = useState(0)
  const [foodMenu, setFoodMenu] = useState([])
  const [name, setName] = useState()
  const [address, setAddress] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [mealType, setMealType] = useState(1)
  const [timeDeliver, setTimeDeliver] = useState()
  const authSlice = useSelector((state) => state.authSlice.userInfo)

  const dispatch = useDispatch()
  const isModalOpen = useSelector((state) => state.modalSlice.isOpen)

  const handlePostFoodMenu = async () => {
    dispatch(setLoader(true))

    const payload = {
      "name": name,
      "address": address,
      "phone_number": phoneNumber,
      "id_user": authSlice?.user_id,
      "id_meal_type": mealType,
      "id_food_menu": foodMenu[detailMealIndex]?.id_food_menu,
      "deliver_date_schedule": timeDeliver,
      "is_send": 0
    }
    
    let resp

    if (!authSlice) {
      resp = await postOrderMealUnreg(payload)
    } else {
      resp = await postOrderMealReg(payload)
    }

    if (resp?.data?.is_error) {
      toast.error(resp.data.msg);
    } else {
      toast.success("Terima Kasih, Pesanan Anda Sedang Diproses")
      dispatch(setIsOpen(false))
    }
    dispatch(setLoader(false))
  }

  const handleGetFoodMenu = async () => {
    dispatch(setLoader(true))
    
    let resp
    if (activeFilter == 0) {     
      resp = await getFoodMenu()
    } else {
      resp = await getFoodMenu(activeFilter)

    }

    if (resp?.data?.is_error) {
      toast.error(resp.data.msg);
    } else {
      setFoodMenu(resp.data.result)
    }
    dispatch(setLoader(false))
  }

  useEffect(() => {
    handleGetFoodMenu()
  }, [activeFilter])

  const isLoading = useSelector((state) => state.loaderSlice.isLoading)


  return (

    <>
      {isLoading && <ScreenLoading />}

      {
        isModalOpen &&
        <Modal modalTitle={"Detail Makanan"} confrimButtonTxt={'Pesan'} confrimButtonClick={handlePostFoodMenu}>
          <div className="p-5">
            <h3 className="text-2xl font-semibold text-balance">
              {foodMenu[detailMealIndex]?.title}
            </h3>
            <div className="mb-3 text-primary-700 font-semibold mt-[-12px]">
              Rp. {foodMenu[detailMealIndex]?.price}
            </div>

            <p className="mb-5 font-normal text-gray-700">{foodMenu[detailMealIndex]?.desciption}</p>

            <div className="flex mb-5 gap-2 flex-wrap">
              {foodMenu[detailMealIndex]?.nutrition.map((element) => {
                return (
                  <>
                    <div className="rounded-full bg-primary-200 px-3 py-1 w-fit">
                      <div className="font-semibold text-primary-800 text-xs">
                        {element?.name} :  {element?.value} {element?.unit}
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
            <div className="mb-3 font-semibold">
              Cocok Untuk :
            </div>
            <div className="mb-10">
              <ol className="list-disc list-inside">
                <li className="text-xs mb-3">
                  {foodMenu[detailMealIndex]?.recomended_for}
                </li>
              </ol>
            </div>
            <div className="mx-[-32px] border-t border-gray-200 pt-5">
              {
                !authSlice &&
                <div className="flex flex-wrap gap-2 items-center px-8 mb-2">
                  <div className="min-w-[200px] flex-1">
                    <Input valueProp={name} labelProp={"Nama"} placeholderProp={'cth: budi andi'} typeProp={'text'} inputId={'nama'} onChangeProp={setName} isRequired={true} />
                  </div>
                  <div className="min-w-[200px] flex-1">
                    <Input valueProp={address} labelProp={"Alamat"} placeholderProp={'cth: budi andi'} typeProp={'text'} inputId={'alamat'} onChangeProp={setAddress} isRequired={true} />
                  </div>
                  <div className="min-w-[200px] flex-1">
                    <Input valueProp={phoneNumber} labelProp={"Alamat"} placeholderProp={'cth: budi andi'} typeProp={'text'} inputId={'alamat'} onChangeProp={setPhoneNumber} isRequired={true} />
                  </div>
                </div>
              }
              <div className="flex flex-wrap gap-2 items-center px-8">
                <div className="min-w-[200px] flex-1">
                  <label className="block mb-2 font-semibold">{"Jenis Makanan"} <span className="text-red-500 inline-block ml-2">*</span></label>
                  <select id="" className="py-2 px-3 border border-gray-300 bg-gray-50 rounded-lg w-full" onChange={(e) => { setMealType(e.target.value) }}>
                    <option value="1">Sarapan</option>
                    <option value="2">Makan Siang</option>
                    <option value="2">Makan Malam</option>
                  </select>
                </div>
                <div className="min-w-[200px] flex-1">
                  <Input labelProp={'Tgl Untuk Diantarkan'} typeProp={'date'} isRequired={true} valueProp={timeDeliver} onChangeProp={setTimeDeliver} />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      }

      <div className="px-12">
        <header className="mb-8">
          <h1 className="text-6xl xl:text-8xl text-primary-700 text-balance">
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
                <div onClick={() => { setActiveFilter(0) }} className={`${activeFilter == 0 ? 'font-semibold border-b-2 border-primary-700 text-primary-700' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 cursor-pointer'} capitalize inline-block p-4 rounded-t-lg`}>{FILTER_OPT.all}</div>
              </li>
              <li>
                <div onClick={() => { setActiveFilter(2) }} className={`${activeFilter == 2 ? 'font-semibold border-b-2 border-primary-700 text-primary-700' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 cursor-pointer'} capitalize inline-block p-4 rounded-t-lg`}>{FILTER_OPT.balanced}</div>
              </li>
              <li>
                <div onClick={() => { setActiveFilter(3) }} className={`${activeFilter == 3 ? 'font-semibold border-b-2 border-primary-700 text-primary-700' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 cursor-pointer'} capitalize inline-block p-4 rounded-t-lg`}>{FILTER_OPT.lowCalorie}</div>
              </li>
              <li>
                <div onClick={() => { setActiveFilter(4) }} className={`${activeFilter == 4 ? 'font-semibold border-b-2 border-primary-700 text-primary-700' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 cursor-pointer'} capitalize inline-block p-4 rounded-t-lg`}>{FILTER_OPT.highProtein}</div>
              </li>
              <li>
                <div onClick={() => { setActiveFilter(5) }} className={`${activeFilter == 5 ? 'font-semibold border-b-2 border-primary-700 text-primary-700' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 cursor-pointer'} capitalize inline-block p-4 rounded-t-lg`}>{FILTER_OPT.royal}</div>
              </li>
            </ul>
          </div>
          <div className="flex gap-12 flex-wrap justify-center">
            {foodMenu?.map((val, index) => {
              return (
                <OrderMealCard
                  cardTitle={val.title}
                  price={val.price}
                  description={val.desciption}
                  nutrition={val.nutrition}
                  onClickButton2ndary={() => {
                    setDetailMealIndex(index)
                    dispatch(setIsOpen(true))
                  }} />
              )
            })}
          </div>
        </main>
      </div>
    </>
  )

}