import { IconCancel, IconCheck, IconPennant2Filled, IconSunFilled } from "@tabler/icons-react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import OrderMealCard from "../../components/orderMeal/orderMealCard";
import MealPlanCard from "../../components/subscription/mealPlanCard";
import MealDeliverySection from "./MealDeliverySection";
import ModalLocked from "../../components/subscription/modalLocked";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { postSubsciption } from "../../api/postSubscription";
import { setLoader } from "../../redux/slices/loaderSlice";
import { toast } from "react-toastify";
import { Link, useNavigate, useSearchParams } from "react-router";
import { getSubscriptionByUserId } from "../../api/getSubscription";
import ScreenLoading from "../../components/ScreenLoading";
import { softDeleteSubscription } from "../../api/softDeleteSubscription";



const FILTER_OPT = {
  balanced: {
    id: 2,
    name: 'diet seimbang',
    price: 35000,
    description: 'Diet dengan gizi seimbang sesuai panduan KEMENKES'
  },
  lowCalorie:
  {
    id: 3,
    name: 'rendah kalori',
    price: 30000,
    description: 'Cocok untuk penurunan berat badan, rendah kalori.'
  },
  id: 4,
  highProtein: {
    name: 'tinggi protein',
    price: 40000,
    description: 'Fokus pada makanan tinggi protein (biasanya untuk membentuk otot).'
  },
  royal: {
    id: 5,
    name: 'royal',
    price: 60000,
    description: 'Menu premium, biasanya porsinya lebih besar dan bahan lebih eksklusif.'
  }
}

const DAY_OPT = [
  {
    id: 1,
    day: 'senin'
  },
  {
    id: 2,
    day: 'selasa'
  },
  {
    id: 3,
    day: 'rabu'
  },
  {
    id: 4,
    day: 'kamis'
  },
  {
    id: 5,
    day: 'jumat'
  },
  {
    id: 6,
    day: 'sabtu'
  },
  {
    id: 7,
    day: 'minggu'
  }
]


export default function SubscriptionIndex() {
  const [searchParams] = useSearchParams()
  const isChooseAnotherPlan = searchParams.get('chooseAnotherPlan')
  console.log(isChooseAnotherPlan)

  const [isSubsAlready, setIsSubsAlready] = useState({ status: false, name: '' })
  const [selectPlan, setSelectPlan] = useState(2)
  const [planPrice, setPlanPrice] = useState(35000)
  const [foodBreakfast, setFoodBreakfast] = useState()
  const [foodLunch, setFoodLunch] = useState()
  const [foodDinner, setFoodDinner] = useState()
  const [selectDay, setSelectDay] = useState([])
  const [numMealType, setNumMealType] = useState()
  const [numDayDeliver, setNumDayDeliver] = useState()
  const [totalBill, setTotalBill] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()



  const authSlice = useSelector((state) => state.authSlice.userInfo)
  const isLoading = useSelector((state) => state.loaderSlice.isLoading)

  const handlePostSubs = async () => {
    if (!selectPlan || selectDay.length == 0) {
      return toast.error('Tolong Lengkapi Semuanya')
    }
    if (!foodBreakfast && !foodLunch && !foodDinner) {
      return toast.error('Tolong Pilih Minimal Satu Makanan baik untuk sarapan, makan siang, ataupun makan malam')
    }

    if (isChooseAnotherPlan) {
      await softDeleteSubscription(isSubsAlready.id)
    }

    dispatch(setLoader(true))

    const payload = {
      "id_user": authSlice.user_id,
      "id_diet_type": selectPlan,
      "status_subs": "active",
      "food": [],
      "delivery_days": selectDay,
      "total_bill": totalBill,
    }

    if (foodBreakfast) {
      payload.food.push({
        "id_food_menu": foodBreakfast.id_food_menu,
        "id_meal_type": foodBreakfast.id_meal_type
      })
    }
    if (foodLunch) {
      payload.food.push({
        "id_food_menu": foodLunch.id_food_menu,
        "id_meal_type": foodLunch.id_meal_type
      })
    }
    if (foodDinner) {
      payload.food.push({
        "id_food_menu": foodDinner.id_food_menu,
        "id_meal_type": foodDinner.id_meal_type
      })
    }
    const res = await postSubsciption(payload)
    if (res?.data?.is_error) {
      toast.error(res.data.msg);
    } else {
      toast.success('Terima Kasih Telah Berlangganan Dengan Kami!')
      navigate('/')
    }
    dispatch(setLoader(false))


  }


  useEffect(() => {
    const getInitSubs = async () => {
      dispatch(setLoader(true))

      const res = await getSubscriptionByUserId(authSlice.user_id)
      const objectLength = Object.keys(res.data.result).length
      console.log(res)
      if (objectLength > 0) {
        setIsSubsAlready({ status: res.data.result.subscription.status, id: res.data.result.subscription.id, name: res.data.result.subscription.name })
      }
      dispatch(setLoader(false))
    }

    getInitSubs()
  }, [authSlice, dispatch])

  useEffect(() => {
    setFoodBreakfast(null)
    setFoodLunch(null)
    setFoodDinner(null)
    setSelectDay([])
    setNumMealType(null)
    setNumDayDeliver(null)
  }, [selectPlan])


  useEffect(() => {
    setNumDayDeliver(selectDay.length)

    let temptMealTypeAmount = 0
    if (foodBreakfast) {
      temptMealTypeAmount = temptMealTypeAmount + 1
    }
    if (foodLunch) {
      temptMealTypeAmount = temptMealTypeAmount + 1
    }
    if (foodDinner) {
      temptMealTypeAmount = temptMealTypeAmount + 1
    }

    setNumMealType(temptMealTypeAmount)

  }, [foodBreakfast, foodLunch, foodDinner, selectDay])

  useEffect(() => {
    setTotalBill(planPrice * numMealType * numDayDeliver)
  }, [planPrice, numMealType, numDayDeliver])

  return (
    <>
      {isLoading && <ScreenLoading />}

      {
        !authSlice && <ModalLocked />
      }

      <div className="w-full min-h-screen px-12">
        <header className="mb-8">
          <h1 className="text-8xl text-primary-700 text-balance">
            Subscribe
          </h1>
          <div className="text-gray-500">
            Pilih rencana diet mu dengan paket langganan yang kami sediakan dan nikmati makanan bergizi langsung ke rumah tanpa repot.
          </div>
        </header>
        {isSubsAlready.id && !isChooseAnotherPlan ?
          <>
            <div className="w-full py-16 flex justify-center items-center">
              <div className="min-w-[329px] max-w-[640px] w-full">
                <div class="w-full bg-white border border-gray-200 rounded-xl shadow-sm py-12 px-8">
                  <div class="flex flex-col pb-10">
                    <div className="flex flex-col items-center">
                      <div className={`p-3 rounded-full flex justify-center items-center aspect-square mb-8 ${isSubsAlready?.status == 'active' ? 'bg-primary-100' : isSubsAlready?.status == 'pending' ? 'bg-yellow-50' : isSubsAlready?.status == 'canceled' ? 'bg-red-100' : ''}`}>
                        <div class={`relative w-24 h-24 overflow-hidden rounded-full flex justify-center items-center ${isSubsAlready?.status == 'active' ? 'bg-primary-200' : isSubsAlready?.status == 'pending' ? 'bg-yellow-100' : isSubsAlready?.status == 'canceled' ? 'bg-red-200' : ''}`}>
                          {isSubsAlready?.status == 'active' ? <>
                            <IconCheck size={32} className="text-primary-900" stroke={3} />
                          </> :
                            isSubsAlready?.status == 'pending' ? <>
                              <IconPennant2Filled size={32} className="text-yellow-600" stroke={3} />
                            </> :
                              isSubsAlready?.status == 'canceled' ? <>
                                <IconCancel size={32} className="text-red-900" stroke={3} />
                              </> : ''}
                        </div>
                      </div>
                      <h5 class={`mb-1 text-xl font-medium capitalize flex gap-2 items-center ${isSubsAlready?.status == 'active' ? 'text-primary-900' : isSubsAlready?.status == 'pending' ? 'text-yellow-700' : isSubsAlready?.status == 'canceled' ? 'text-red-700' : ''} `}>
                        {isSubsAlready.name}
                        <small class={`px-4 py-1 rounded-full ${isSubsAlready?.status == 'active' ? 'bg-primary-100 text-primary-900' : isSubsAlready?.status == 'pending' ? 'bg-yellow-100 text-yellow-700' : isSubsAlready?.status == 'canceled' ? 'bg-red-100 text-red-700' : ''} `}>
                          {isSubsAlready?.status}
                        </small>
                      </h5>
                      <span class="text-sm text-gray-500 ">Terima Kasih karena Telah Berlangganan Dengan Kami.</span>
                    </div>
                    <div className="mt-8">
                      <Link to={'/dashboard'} className="max-w-lg block mx-auto">
                        <Button isExtend={true} buttonType={isSubsAlready?.status == 'active' ? "secondary" : isSubsAlready?.status == 'pending' ? 'warning' : isSubsAlready?.status == 'canceled' ? 'danger' : ''}>Lihat Detail Langganan</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
          :
          <>
            <div className="flex gap-10 justify-start items-start">
              <form className="w-full px-5 py-8 rounded-lg bg-white border border-gray-300">
                <div className="mb-8 flex gap-5 items-center ">
                  <div className="min-w-[320px] flex-1">
                    <Input
                      valueProp={authSlice.name} labelProp={'Nama'} placeholderProp={'cth: Budi Andi'} typeProp={'text'} inputId={'customer-name'} onChangeProp={() => { }}
                    />
                  </div>
                  <div className="min-w-[320px] flex-1">
                    <Input
                      valueProp={authSlice.address} labelProp={'Asal'} placeholderProp={'cth: Sumeep'} typeProp={'text'} inputId={'customer-origin'} onChangeProp={() => { }}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <Input
                    valueProp={authSlice.alergy} labelProp={'Alergi'} placeholderProp={'cth: Saya Sangat Suka Dengan Makanan Tinggi Protein Di SEA Catering'} typeProp={'text'} inputId={'alergi'} onChangeProp={() => { }}
                  />
                </div>


                <div className="mb-8">
                  <div className="block mb-2 font-semibold">Pilih Paket Layanan</div>
                  <div className="mb-5 flex gap-3 justify-center items-center flex-wrap">
                    <MealPlanCard
                      onClickProp={() => {
                        setSelectPlan(2)
                        setPlanPrice(35000)
                      }}
                      isActive={selectPlan == 2 ? true : false}
                      mealPlanType={FILTER_OPT.balanced.name}
                      price={FILTER_OPT.balanced.price}
                    >
                      {FILTER_OPT.balanced.description}
                    </MealPlanCard>
                    <MealPlanCard
                      onClickProp={() => {
                        setSelectPlan(3)
                        setPlanPrice(30000)
                      }}
                      isActive={selectPlan == 3 ? true : false}
                      mealPlanType={FILTER_OPT.lowCalorie.name}
                      price={FILTER_OPT.lowCalorie.price}
                    >
                      {FILTER_OPT.lowCalorie.description}
                    </MealPlanCard>
                    <MealPlanCard
                      onClickProp={() => {
                        setSelectPlan(4)
                        setPlanPrice(40000)
                      }}
                      isActive={selectPlan == 4 ? true : false}
                      mealPlanType={FILTER_OPT.highProtein.name}
                      price={FILTER_OPT.highProtein.price}
                    >
                      {FILTER_OPT.highProtein.description}
                    </MealPlanCard>
                    <MealPlanCard
                      onClickProp={() => {
                        setSelectPlan(5)
                        setPlanPrice(60000)
                      }}
                      isActive={selectPlan == 5 ? true : false}
                      mealPlanType={FILTER_OPT.royal.name}
                      price={FILTER_OPT.royal.price}
                    >
                      {FILTER_OPT.royal.description}
                    </MealPlanCard>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="block mb-2 font-semibold">Pilih Makanan & Jadwal Pengantaran</div>
                  <MealDeliverySection foodBreakfast={foodBreakfast} foodLunch={foodLunch} foodDinner={foodDinner} setFoodBreakfast={setFoodBreakfast} setFoodLunch={setFoodLunch} setFoodDinner={setFoodDinner} selectPlan={selectPlan} />
                </div>

                <div className="mb-8">
                  <div className="block mb-2 font-semibold">Pilih Hari</div>
                  <div className="flex gap-3 items-center flex-wrap">
                    {DAY_OPT.map((element) => {
                      return (
                        <>
                          <div className={`px-4 py-1.5 text-[13.5px] rounded-full border cursor-pointer capitalize ${selectDay.findIndex(e => e.id_delivery_day == element.id) != -1 ? 'bg-primary-50 border-primary-900 text-primary-900' : 'border-gray-300 bg-gray-50'}`} onClick={() => {
                            const findIndexOfVal = selectDay.findIndex(e => element.id == e.id_delivery_day)
                            if (findIndexOfVal != -1) {
                              let temptArr = selectDay.filter(e => e.id_delivery_day !== element.id);
                              setSelectDay(temptArr)
                            } else {
                              setSelectDay((prevVal) => { return [...prevVal, { id_delivery_day: element.id }] }
                              )
                            }
                          }}>
                            {element.day}
                          </div>
                        </>
                      )
                    })}
                  </div>
                </div>
              </form>
              <div className="w-full px-5 py-8 rounded-lg bg-white border border-gray-300 sticky top-32 right-0 max-w-[480px] min-w-[400px] flex-1">
                <div className="block mb-8 text-gray-400 font-semibold py-2 px-2 border-b border-gray-300 ">Detail Harga</div>
                <div className="flex flex-wrap mb-5">
                  <div className="font-semibold min-w-[64px] flex-1">
                    Paket
                  </div>
                  <div className="min-w-[64px] flex-1">
                    Rp.{planPrice}
                  </div>
                </div>
                <div className="flex flex-wrap mb-5">
                  <div className="font-semibold min-w-[64px] flex-1">
                    Jenis Waktu
                  </div>
                  <div className="min-w-[64px] flex-1">
                    {foodBreakfast ? 'Pagi  ' : null}
                    {foodLunch ? 'Siang  ' : null}
                    {foodDinner ? 'Malam  ' : null}
                    ({numMealType} Jenis)
                  </div>
                </div>
                <div className="flex flex-wrap mb-5">
                  <div className="font-semibold min-w-[64px] flex-1">
                    Hari
                  </div>
                  <div className="min-w-[64px] flex-1">
                    {selectDay.map((element) => {
                      return element.id_delivery_day == 1 ? 'Senin  ' :
                        element.id_delivery_day == 2 ? 'Selasa  ' :
                          element.id_delivery_day == 3 ? 'Rabu  ' :
                            element.id_delivery_day == 4 ? 'Kamis  ' :
                              element.id_delivery_day == 5 ? 'Jumat  ' :
                                element.id_delivery_day == 6 ? 'Sabtu  ' :
                                  element.id_delivery_day == 7 ? 'Minggu  ' :
                                    null;
                    })}
                    ({numDayDeliver} Jenis)
                  </div>
                </div>
                <div className="mb-5">
                  <div className="font-semibold min-w-[64px] flex-1">
                    Total
                  </div>
                  <div className="min-w-[64px] flex-1">
                    {planPrice ? planPrice : '-'} × {numMealType} × {numDayDeliver} × 4,3 = <strong>Rp. {totalBill ? totalBill : '00'}</strong>
                  </div>
                </div>

                <div className="w-full mx-auto">
                  <Button isExtend={true} buttonType="primary" onClickProp={handlePostSubs}>
                    Pesan
                  </Button>
                </div>

              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}