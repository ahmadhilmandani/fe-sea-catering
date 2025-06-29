import MealDeliveryCard from "../../components/subscription/MealDeliveryCard";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setLoader } from "../../redux/slices/loaderSlice";
import { toast } from "react-toastify";
import { getFoodMenu } from "../../api/getFoodMenu";


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

export default function MealDeliverySection({ foodBreakfast, foodLunch, foodDinner, setFoodBreakfast, setFoodLunch, setFoodDinner }) {
  const [foodMenu, setFoodMenu] = useState()

  const dispatch = useDispatch()

  const handleGetFoodMenu = async () => {
    dispatch(setLoader(true))

    const resp = await getFoodMenu()

    if (resp?.data?.is_error) {
      toast.error(resp.data.msg);
    } else {
      setFoodMenu(resp.data.result)
    }
    dispatch(setLoader(false))
  }

  useEffect(() => {
    handleGetFoodMenu()
  }, [])


  return (
    <>
      <MealDeliveryCard deliveryTime={1} foodMenu={foodMenu} onClickProp={setFoodBreakfast} selectedFood={foodBreakfast} />
      <MealDeliveryCard deliveryTime={2} foodMenu={foodMenu} onClickProp={setFoodLunch} selectedFood={foodLunch} />
      <MealDeliveryCard deliveryTime={3} foodMenu={foodMenu} onClickProp={setFoodDinner} selectedFood={foodDinner} />
    </>
  )
}