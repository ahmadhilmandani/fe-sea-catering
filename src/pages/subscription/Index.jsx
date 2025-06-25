import { IconSunFilled } from "@tabler/icons-react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import OrderMealCard from "../../components/orderMeal/orderMealCard";
import MealPlanCard from "../../components/subscription/mealPlanCard";
import MealDeliverySection from "./MealDeliverySection";


const FILTER_OPT = {
  all: 'semua',
  balanced: {
    name: 'diet seimbang',
    price: 35000,
    description: 'Diet dengan gizi seimbang sesuai panduan KEMENKES'
  },
  lowCalorie:
  {
    name: 'rendah kalori',
    price: 30000,
    description: 'Cocok untuk penurunan berat badan, rendah kalori.'
  },
  highProtein: {
    name: 'tinggi protein',
    price: 40000,
    description: 'Fokus pada makanan tinggi protein (biasanya untuk membentuk otot).'
  },
  royal: {
    name: 'royal',
    price: 60000,
    description: 'Menu premium, biasanya porsinya lebih besar dan bahan lebih eksklusif.'
  }
}


export default function SubscriptionIndex() {
  return (
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
            <div className="block mb-2 font-semibold">Pilih Paket Layanan</div>
            <div className="mb-5 flex gap-3 justify-center items-center flex-wrap">
              <MealPlanCard
                mealPlanType={FILTER_OPT.balanced.name}
                price={FILTER_OPT.balanced.price}
              >
                {FILTER_OPT.balanced.description}
              </MealPlanCard>
              <MealPlanCard
                mealPlanType={FILTER_OPT.lowCalorie.name}
                price={FILTER_OPT.lowCalorie.price}
              >
                {FILTER_OPT.lowCalorie.description}
              </MealPlanCard>
              <MealPlanCard
                mealPlanType={FILTER_OPT.highProtein.name}
                price={FILTER_OPT.highProtein.price}
              >
                {FILTER_OPT.highProtein.description}
              </MealPlanCard>
              <MealPlanCard
                mealPlanType={FILTER_OPT.royal.name}
                price={FILTER_OPT.royal.price}
                isActive={true}
              >
                {FILTER_OPT.royal.description}
              </MealPlanCard>
            </div>
          </div>

          <div className="mb-8">
            <div className="block mb-2 font-semibold">Pilih Makanan & Jadwal Pengantaran</div>
            <MealDeliverySection />
          </div>


          <div className="mb-8">
            <Input
              valueProp={"customerTesti"} labelProp={'Alergi'} placeholderProp={'cth: Saya Sangat Suka Dengan Makanan Tinggi Protein Di SEA Catering'} typeProp={'text'} inputId={'alergi'} onChangeProp={() => { }}
            />
          </div>

        </form>
        <div className="w-full px-5 py-8 rounded-lg bg-white border border-gray-300 sticky top-32 right-0 max-w-[480px] min-w-[400px] flex-1">
          <div className="block mb-2 font-semibold">Detail Harga</div>

          <div className="w-full mx-auto">
            <Button isExtend={true} buttonType="primary">
              Pesan
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}