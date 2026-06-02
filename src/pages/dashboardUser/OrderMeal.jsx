import { useDispatch, useSelector } from "react-redux"
import Modal from "../../components/Modal"
import { useEffect, useState } from "react"
import { setLoader } from "../../redux/slices/loaderSlice"
import ScreenLoading from "../../components/ScreenLoading"
import Button from "../../components/Button"
import UserInfoSection from "./UserInfoSection"
import { Link } from "react-router"
import SidebarNav from "./SidebarNav"
import { getOrderMealReg } from "../../api/getOrderMealReg"

export default function DashboardUserOrderMeal() {
  const [orderMeal, setOrderMeal] = useState(null)

  const dispatch = useDispatch()
  const authSlice = useSelector((state) => state.authSlice.userInfo)

  useEffect(() => {
    const getInitSubs = async () => {
      dispatch(setLoader(true))

      const res = await getOrderMealReg()
      if (res?.data?.result) {
        console.log(res.data.result)
        setOrderMeal(res.data.result[0])
      }

      dispatch(setLoader(false))

    }

    getInitSubs()
  }, [dispatch, authSlice])

  return (
    <>
      <div>
        {orderMeal ?
          <>
            <h3>Order Meal History</h3>
            <div class="relative overflow-x-auto sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-primary-100">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Nama
                    </th>
                    <th scope="col" class="w-80 px-6 py-3">
                      Pesanan Diantarkan
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Harga
                    </th>
                    <th scope="col" class="w-96 px-6 py-3">
                      Nutrisi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderMeal?.order.map((data) => {
                    return (
                      <>
                        <tr class="bg-white border-b border-gray-200 hover:bg-primary-50">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {data.name}
                          </th>
                          <td class="px-6 py-4">
                            <div className="flex gap-3 items-center">
                              <span>
                                {data.must_deliver_date}
                              </span>
                              <span>
                                |
                              </span>
                              <span>
                                {data.meal_type.name}
                              </span>
                            </div>
                          </td>
                          <td class="px-6 py-4">
                            {data.price}
                          </td>
                          <td class="px-6 py-4">
                            <div className="flex gap-3 items-center flex-wrap">
                              {data?.nutritions.map((dataChild) => {
                                return (
                                  <>
                                    <div className="rounded-full bg-primary-200 px-3 py-1 w-fit">
                                      <div className="font-semibold text-primary-800 text-xs">
                                        {dataChild?.name} :  {dataChild?.value} {dataChild?.unit}
                                      </div>
                                    </div>
                                  </>
                                )
                              })}
                            </div>
                          </td>
                        </tr>
                      </>
                    )
                  })}
                </tbody>
              </table>
            </div>


          </>
          :
          <div className="flex justify-center items-center flex-col gap-5 w-full h-full">
            Anda Belum Pernah Memesan Makanan secara Satuan.
            <Link to={'/order-meal'}>
              <Button buttonType="primary">
                Pilih Makanan
              </Button>
            </Link>
          </div>
        }
      </div>
    </>
  )
}