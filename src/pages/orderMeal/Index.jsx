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
  const [detailMealIndex, setDetailMealIndex] = useState(null)
  const dispatch = useDispatch()
  const isModalOpen = useSelector((state) => state.modalSlice.isOpen)
  const meals = [
    // === Diet Seimbang ===
    {
      title: "Gado-gado",
      price: 30000,
      desciption: "Campuran sayuran rebus, telur, tempe, dan bumbu kacang",
      diet: FILTER_OPT.balanced,
      dietTypeTime: ["makan siang"],
      nutrition: {
        protein: { value: 14, unit: "g" },
        calorie: { value: 320, unit: "kkal" }
      },
      dietGoodFor: ["Menjaga pola makan sehat", "Vegan-friendly"]
    },
    {
      title: "Nasi Merah + Ayam Panggang + Sayur Rebus",
      price: 35000,
      desciption: "Karbohidrat kompleks, protein tanpa lemak, dan serat tinggi",
      diet: FILTER_OPT.balanced,
      dietTypeTime: ["makan siang", "makan malam"],
      nutrition: {
        protein: { value: 26, unit: "g" },
        calorie: { value: 420, unit: "kkal" }
      },
      dietGoodFor: ["Menjaga pola makan sehat"]
    },
    {
      title: "Oatmeal + Buah + Telur Rebus",
      price: 25000,
      desciption: "Menu lengkap untuk sarapan bernutrisi seimbang",
      diet: FILTER_OPT.balanced,
      dietTypeTime: ["sarapan"],
      nutrition: {
        protein: { value: 20, unit: "g" },
        calorie: { value: 390, unit: "kkal" }
      },
      dietGoodFor: ["Menjaga pola makan sehat"]
    },
    {
      title: "Ikan Bakar + Tumis Brokoli + Ubi Rebus",
      price: 40000,
      desciption: "Sumber protein, serat, dan karbo sehat",
      diet: FILTER_OPT.balanced,
      dietTypeTime: ["makan malam"],
      nutrition: {
        protein: { value: 30, unit: "g" },
        calorie: { value: 450, unit: "kkal" }
      },
      dietGoodFor: ["Menjaga pola makan sehat"]
    },
    {
      title: "Smoothie Alpukat + Roti Gandum",
      price: 28000,
      desciption: "Lemak sehat dan karbo kompleks untuk energi pagi",
      diet: FILTER_OPT.balanced,
      dietTypeTime: ["sarapan"],
      nutrition: {
        protein: { value: 10, unit: "g" },
        calorie: { value: 330, unit: "kkal" }
      },
      dietGoodFor: ["Menjaga energi harian"]
    },

    // === Diet Keto ===
    {
      title: "Telur Orak-Arik + Alpukat",
      price: 35000,
      desciption: "Telur ditumis ringan dengan alpukat segar",
      diet: FILTER_OPT.keto,
      dietTypeTime: ["sarapan"],
      nutrition: {
        protein: { value: 20, unit: "g" },
        calorie: { value: 280, unit: "kkal" }
      },
      dietGoodFor: ["Menurunkan berat badan", "Keto-friendly"]
    },
    {
      title: "Salmon Panggang + Asparagus",
      price: 55000,
      desciption: "Kaya lemak sehat dan rendah karbo",
      diet: FILTER_OPT.keto,
      dietTypeTime: ["makan malam"],
      nutrition: {
        protein: { value: 30, unit: "g" },
        calorie: { value: 400, unit: "kkal" }
      },
      dietGoodFor: ["Keto-friendly"]
    },
    {
      title: "Dada Ayam + Saus Keju + Sayur Kukus",
      price: 42000,
      desciption: "Menu tinggi protein dan lemak sehat",
      diet: FILTER_OPT.keto,
      dietTypeTime: ["makan siang"],
      nutrition: {
        protein: { value: 35, unit: "g" },
        calorie: { value: 450, unit: "kkal" }
      },
      dietGoodFor: ["Keto-friendly"]
    },
    {
      title: "Beef Patty + Keju + Telur",
      price: 50000,
      desciption: "Menu tinggi protein dan tanpa karbohidrat",
      diet: FILTER_OPT.keto,
      dietTypeTime: ["makan siang"],
      nutrition: {
        protein: { value: 40, unit: "g" },
        calorie: { value: 500, unit: "kkal" }
      },
      dietGoodFor: ["Keto-friendly"]
    },
    {
      title: "Tumis Jamur dan Keju Parmesan",
      price: 32000,
      desciption: "Menu vegetarian keto dengan rasa gurih",
      diet: FILTER_OPT.keto,
      dietTypeTime: ["makan malam"],
      nutrition: {
        protein: { value: 15, unit: "g" },
        calorie: { value: 350, unit: "kkal" }
      },
      dietGoodFor: ["Keto-friendly", "Rendah karbo"]
    },

    // === Diet Vegetarian ===
    {
      title: "Nasi Putih + Tempe + Capcay",
      price: 30000,
      desciption: "Menu vegetarian lengkap dengan sayur dan protein nabati",
      diet: FILTER_OPT.vegetarian,
      dietTypeTime: ["makan siang"],
      nutrition: {
        protein: { value: 18, unit: "g" },
        calorie: { value: 400, unit: "kkal" }
      },
      dietGoodFor: ["Vegetarian", "Vegan-friendly"]
    },
    {
      title: "Sup Sayur + Roti Gandum",
      price: 25000,
      desciption: "Sayur berkuah segar dengan tambahan serat dari roti",
      diet: FILTER_OPT.vegetarian,
      dietTypeTime: ["makan malam"],
      nutrition: {
        protein: { value: 8, unit: "g" },
        calorie: { value: 200, unit: "kkal" }
      },
      dietGoodFor: ["Vegan-friendly"]
    },
    {
      title: "Smoothie Pisang + Oats",
      price: 22000,
      desciption: "Menu sarapan cepat saji dan bergizi",
      diet: FILTER_OPT.vegetarian,
      dietTypeTime: ["sarapan"],
      nutrition: {
        protein: { value: 10, unit: "g" },
        calorie: { value: 280, unit: "kkal" }
      },
      dietGoodFor: ["Vegan-friendly"]
    },
    {
      title: "Salad Quinoa + Edamame + Jagung",
      price: 32000,
      desciption: "Salad vegetarian tinggi protein nabati",
      diet: FILTER_OPT.vegetarian,
      dietTypeTime: ["makan siang"],
      nutrition: {
        protein: { value: 16, unit: "g" },
        calorie: { value: 340, unit: "kkal" }
      },
      dietGoodFor: ["Vegetarian", "Rendah kolesterol"]
    },
    {
      title: "Tumis Tahu Brokoli",
      price: 28000,
      desciption: "Tahu sebagai sumber protein utama, brokoli untuk serat",
      diet: FILTER_OPT.vegetarian,
      dietTypeTime: ["makan malam"],
      nutrition: {
        protein: { value: 14, unit: "g" },
        calorie: { value: 260, unit: "kkal" }
      },
      dietGoodFor: ["Vegetarian", "Menurunkan kolesterol"]
    },

    // === Diet Menambah Massa Otot ===
    {
      title: "Dada Ayam + Nasi Putih + Telur Rebus",
      price: 45000,
      desciption: "Sumber protein tinggi untuk bantu pertumbuhan otot",
      diet: FILTER_OPT.highProtein,
      dietTypeTime: ["makan siang"],
      nutrition: {
        protein: { value: 40, unit: "g" },
        calorie: { value: 520, unit: "kkal" }
      },
      dietGoodFor: ["Meningkatkan massa otot"]
    },
    {
      title: "Steak Daging Sapi + Kentang Rebus",
      price: 60000,
      desciption: "Sumber kalori dan protein tinggi untuk otot",
      diet: FILTER_OPT.highProtein,
      dietTypeTime: ["makan malam"],
      nutrition: {
        protein: { value: 45, unit: "g" },
        calorie: { value: 600, unit: "kkal" }
      },
      dietGoodFor: ["Meningkatkan massa otot"]
    },
    {
      title: "Protein Shake + Roti Gandum",
      price: 35000,
      desciption: "Shake whey protein dan karbo cepat serap",
      diet: FILTER_OPT.highProtein,
      dietTypeTime: ["snack"],
      nutrition: {
        protein: { value: 30, unit: "g" },
        calorie: { value: 380, unit: "kkal" }
      },
      dietGoodFor: ["Meningkatkan massa otot"]
    },
    {
      title: "Tempe Goreng + Nasi Merah + Sayur Bening",
      price: 30000,
      desciption: "Protein nabati untuk otot dan serat tinggi",
      diet: FILTER_OPT.highProtein,
      dietTypeTime: ["makan siang"],
      nutrition: {
        protein: { value: 25, unit: "g" },
        calorie: { value: 450, unit: "kkal" }
      },
      dietGoodFor: ["Meningkatkan massa otot", "Vegetarian"]
    },
    {
      title: "Salmon + Telur + Brokoli",
      price: 55000,
      desciption: "Kombinasi superfood untuk pembentukan otot",
      diet: FILTER_OPT.highProtein,
      dietTypeTime: ["makan malam"],
      nutrition: {
        protein: { value: 42, unit: "g" },
        calorie: { value: 480, unit: "kkal" }
      },
      dietGoodFor: ["Meningkatkan massa otot"]
    },

    // === Diet Rendah Kalori ===
    {
      title: "Salad Ayam + Minyak Zaitun",
      price: 30000,
      desciption: "Salad rendah kalori dengan ayam tanpa kulit dan dressing zaitun",
      diet: FILTER_OPT.lowCalorie,
      dietTypeTime: ["makan malam"],
      nutrition: {
        protein: { value: 18, unit: "g" },
        calorie: { value: 220, unit: "kkal" }
      },
      dietGoodFor: ["Menurunkan berat badan", "Gluten-free"]
    },
    {
      title: "Oatmeal + Potongan Apel",
      price: 22000,
      desciption: "Sarapan ringan kaya serat dan vitamin",
      diet: FILTER_OPT.lowCalorie,
      dietTypeTime: ["sarapan"],
      nutrition: {
        protein: { value: 6, unit: "g" },
        calorie: { value: 180, unit: "kkal" }
      },
      dietGoodFor: ["Menurunkan berat badan"]
    },
    {
      title: "Dada Ayam Rebus + Sayur Rebus",
      price: 32000,
      desciption: "Menu tanpa minyak, tinggi protein, rendah kalori",
      diet: FILTER_OPT.lowCalorie,
      dietTypeTime: ["makan siang"],
      nutrition: {
        protein: { value: 28, unit: "g" },
        calorie: { value: 260, unit: "kkal" }
      },
      dietGoodFor: ["Cutting", "Menurunkan berat badan"]
    },
    {
      title: "Sup Bening Tofu + Wortel",
      price: 25000,
      desciption: "Sup ringan dan bergizi untuk malam hari",
      diet: FILTER_OPT.lowCalorie,
      dietTypeTime: ["makan malam"],
      nutrition: {
        protein: { value: 12, unit: "g" },
        calorie: { value: 180, unit: "kkal" }
      },
      dietGoodFor: ["Menurunkan berat badan", "Vegan-friendly"]
    },
    {
      title: "Smoothie Strawberry + Susu Almond",
      price: 28000,
      desciption: "Minuman rendah kalori tapi tetap lezat",
      diet: FILTER_OPT.lowCalorie,
      dietTypeTime: ["sarapan", "snack"],
      nutrition: {
        protein: { value: 8, unit: "g" },
        calorie: { value: 170, unit: "kkal" }
      },
      dietGoodFor: ["Menurunkan berat badan", "Lactose-free"]
    }
  ];


  return (

    <>
      {isModalOpen &&
        <Modal modalTitle={"Detail Makanan"} confrimButtonTxt={'Pesan'} confrimButtonClick={() => {
          dispatch(setIsOpen(false))
        }}>
          <div className="p-5">
            <h3 className="text-2xl font-semibold text-balance">
              {meals[detailMealIndex]?.title}
            </h3>
            <div className="mb-3 text-primary-700 font-semibold mt-[-12px]">
              Rp. {meals[detailMealIndex]?.price}
            </div>

            <p className="mb-5 font-normal text-gray-700">{meals[detailMealIndex]?.desciption}</p>

            <div className="flex mb-5 gap-2 flex-wrap">
              {meals[detailMealIndex]?.dietTypeTime?.map((val) => {
                return (
                  <div className="rounded-full bg-primary-200 px-3 py-1 w-fit">
                    <div className="font-semibold text-primary-800 text-xs">
                      {val}
                    </div>
                  </div>
                )
              })}
              <div className="rounded-full bg-primary-200 px-3 py-1 w-fit">
                <div className="font-semibold text-primary-800 text-xs">
                  protein: {meals[detailMealIndex]?.nutrition?.protein?.value} {meals[detailMealIndex]?.nutrition?.protein?.unit}
                </div>
              </div>
              <div className="rounded-full bg-primary-200 px-3 py-1 w-fit">
                <div className="font-semibold text-primary-800 text-xs">
                  protein: {meals[detailMealIndex]?.nutrition?.calorie?.value} {meals[detailMealIndex]?.nutrition?.calorie?.unit}
                </div>
              </div>
            </div>

            <div className="mb-3 font-semibold">
              Cocok Untuk :
            </div>
            <div className="">
              {meals[detailMealIndex]?.dietGoodFor?.map((val) => {
                return (
                  <ol className="list-disc list-inside">
                    <li className="text-xs mb-3">
                      {val}
                    </li>
                  </ol>
                )
              })}
            </div>
          </div>
        </Modal>
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
          <div className="flex gap-12 flex-wrap justify-center">
            {meals.map((val, index) => {
              return (
                <OrderMealCard
                  cardTitle={val.title}
                  price={val.price}
                  description={val.desciption}
                  dietTypeTime={val.dietTypeTime}
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