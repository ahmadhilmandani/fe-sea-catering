import { IconSunFilled } from "@tabler/icons-react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import OrderMealCard from "../../components/orderMeal/orderMealCard";
import MealPlanCard from "../../components/subscription/mealPlanCard";
import MealDeliverySection from "./MealDeliverySection";
import ModalLocked from "../../components/subscription/modalLocked";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { postTestimoni } from "../../api/postSubscription";
import { setLoader } from "../../redux/slices/loaderSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";



const FILTER_OPT = {
  all: 'semua',
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
  const [selectPlan, setSelectPlan] = useState()
  const [foodBreakfast, setFoodBreakfast] = useState()
  const [foodLunch, setFoodLunch] = useState()
  const [foodDinner, setFoodDinner] = useState()
  const [selectDay, setSelectDay] = useState([])

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const authSlice = useSelector((state) => state.authSlice.userInfo)

  const handlePostSubs = async () => {
    if (!selectPlan || !selectDay) {
      return toast.error('Tolong Lengkapi Semuanya')
    }
    if (!foodBreakfast && !foodLunch && !foodDinner) {
      return toast.error('Tolong Pilih Minimal Satu Makanan baik untuk sarapan, makan siang, ataupun makan malam')
    }

    dispatch(setLoader(true))
    const payload = {
      "id_user": authSlice.user_id,
      "id_diet_type": selectPlan,
      "status_subs": "active",
      "food": [],
      "delivery_days": selectDay
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
    const res = await postTestimoni(payload)
    if (res?.data?.is_error) {
      toast.error(res.data.msg);
    } else {
      toast.success('Terima Kasih Telah Berlangganan Dengan Kami!')
      navigate('/')
    }
    dispatch(setLoader(false))


  }

  return (
    <>
      {
        !authSlice && <ModalLocked />
      }

      <div className="w-full min-h-screen px-12">
        <header className="mb-8">
          <h1 className="text-8xl text-primary-700 text-balance">
            Subsribe
          </h1>
          <div className="text-gray-500">
            Pilih dan pesan paket diet sesuai kebutuhan nutrisi dan gaya hidup Anda, siap antar langsung ke rumah!
          </div>
        </header>

        <div className="flex gap-10 justify-start items-start">
          <form className="w-full px-5 py-8 rounded-lg bg-white border border-gray-300">
            <div className="mb-8 flex gap-5 items-center ">
              <div className="min-w-[320px] flex-1">
                <Input
                  valueProp={"customerName"} labelProp={'Nama'} placeholderProp={'cth: Budi Andi'} typeProp={'text'} inputId={'customer-name'} onChangeProp={() => { }}
                />
              </div>
              <div className="min-w-[320px] flex-1">
                <Input
                  valueProp={"customerOrigin"} labelProp={'Asal'} placeholderProp={'cth: Sumeep'} typeProp={'text'} inputId={'customer-origin'} onChangeProp={() => { }}
                />
              </div>
            </div>

            <div className="mb-8">
              <Input
                valueProp={"customerTesti"} labelProp={'Alergi'} placeholderProp={'cth: Saya Sangat Suka Dengan Makanan Tinggi Protein Di SEA Catering'} typeProp={'text'} inputId={'alergi'} onChangeProp={() => { }}
              />
            </div>


            <div className="mb-8">
              <div className="block mb-2 font-semibold">Pilih Paket Layanan</div>
              <div className="mb-5 flex gap-3 justify-center items-center flex-wrap">
                <MealPlanCard
                  onClickProp={() => { setSelectPlan(2) }}
                  isActive={selectPlan == 2 ? true : false}
                  mealPlanType={FILTER_OPT.balanced.name}
                  price={FILTER_OPT.balanced.price}
                >
                  {FILTER_OPT.balanced.description}
                </MealPlanCard>
                <MealPlanCard
                  onClickProp={() => { setSelectPlan(3) }}
                  isActive={selectPlan == 3 ? true : false}
                  mealPlanType={FILTER_OPT.lowCalorie.name}
                  price={FILTER_OPT.lowCalorie.price}
                >
                  {FILTER_OPT.lowCalorie.description}
                </MealPlanCard>
                <MealPlanCard
                  onClickProp={() => { setSelectPlan(4) }}
                  isActive={selectPlan == 4 ? true : false}
                  mealPlanType={FILTER_OPT.highProtein.name}
                  price={FILTER_OPT.highProtein.price}
                >
                  {FILTER_OPT.highProtein.description}
                </MealPlanCard>
                <MealPlanCard
                  onClickProp={() => { setSelectPlan(5) }}
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
              <MealDeliverySection foodBreakfast={foodBreakfast} foodLunch={foodLunch} foodDinner={foodDinner} setFoodBreakfast={setFoodBreakfast} setFoodLunch={setFoodLunch} setFoodDinner={setFoodDinner} />
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
            <div className="block mb-2 font-semibold">Detail Harga</div>

            <div className="w-full mx-auto">
              <Button isExtend={true} buttonType="primary" onClickProp={handlePostSubs}>
                Pesan
              </Button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}