import { useDispatch, useSelector } from "react-redux"
import Modal from "../../components/Modal"
import { useEffect, useState } from "react"
import { setLoader } from "../../redux/slices/loaderSlice"
import { getSubscriptionByUserId } from "../../api/getSubscription"
import ScreenLoading from "../../components/ScreenLoading"
import Button from "../../components/Button"
import UserInfoSection from "./userInfoSection"

export default function DashboardIndex() {
  const [subscribeData, setSubscribeData] = useState()

  const dispatch = useDispatch()
  const authSlice = useSelector((state) => state.authSlice.userInfo)
  const isLoading = useSelector((state) => state.loaderSlice.isLoading)

  useEffect(() => {
    const getInitSubs = async () => {
      dispatch(setLoader(true))

      const res = await getSubscriptionByUserId(authSlice.user_id)
      setSubscribeData(res.data.result.subscription)
      dispatch(setLoader(false))
    }

    getInitSubs()
  }, [])

  return (
    <>
      {isLoading && <ScreenLoading />}
      <main className="w-full min-h-screen px-12">
        <div className="rounded-full bg-primary-100 py-2 px-4 flex items-center gap-3 w-fit">
          <span class="relative flex size-3">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-600 opacity-75"></span>
            <span class="relative inline-flex size-3 rounded-full bg-primary-700"></span>
          </span>
          <div className="font-semibold text-primary-800">
            DASHBOARD
          </div>
        </div>
        <h1 className="text-primary-700 text-balance">
          Selamat Datang, {authSlice.name} 👋!
        </h1>
        <div className="text-gray-500 mb-10">
          Pantau aktivitas, kelola langganan, dan temukan insight personal seputar pola makan sehatmu di satu tempat.
        </div>
        <div className="flex gap-10">
          <UserInfoSection />
          <div>
            <div>
              <div className="w-full px-5 py-8 rounded-lg bg-white border border-gray-300">
                <h3>Paket Layanan</h3>
                <div className="flex gap-10">
                  <div className="min-w-[320px] max-w-[400px] flex-1">
                    <div className={`bg-primary-100 border border-primary-800 shadow-xl w-full p-4 rounded-lg sm:p-8 cursor-pointer transition-all mb-10`}>
                      <div className="mb-8">
                        <h5 className="font-semibold capitalize">{subscribeData?.name}</h5>
                        <div className="text-[13.5px] text-primary-900 mt-[-8px]">
                          (Rp. {subscribeData?.subs_diet_type_price_meal} / Makanan)
                        </div>
                      </div>
                      <small className="text-gray-500">Total : </small>
                      <div className={`flex items-baseline text-primary-900`}>
                        <span className="text-3xl font-semibold">Rp. </span>
                        <span className="text-5xl font-semibold tracking-tight">{subscribeData?.total_bill}</span>
                      </div>
                    </div>

                    <div>
                      <Button isExtend={true} buttonType="secondary">
                        Pilih Paket Lain
                      </Button>
                    </div>
                  </div>

                  <div className="min-w-[320px] flex-1">
                    <div className="flex gap-3 items-center flex-wrap mb-3">
                      <strong>Hari Pengantaran</strong>
                      {subscribeData?.delivery_day.map((val) => {
                        return (
                          <>
                            <div className={`px-4 py-1.5 text-[13.5px] rounded-full border cursor-pointer capitalize bg-primary-50 border-primary-900 text-primary-900`}>
                              {val}
                            </div>
                          </>
                        )
                      })}
                    </div>
                    <div className="relative overflow-x-auto border border-gray-200 rounded-xl">
                      <table className="w-full text-sm text-left rtl:text-right">
                        <thead className="text-xs text-primary-900 uppercase bg-primary-50 border-b border-gray-200">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Jenis
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Makanan
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Nutrisi
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {subscribeData?.details.map((el) => {
                            return (
                              <>
                                <tr className="">
                                  <td className="px-6 py-4 capitalize">
                                    {el.food.meal_type.name}
                                  </td>
                                  <td className="px-6 py-4">
                                    {el.food.name}
                                  </td>
                                  <td className="px-6 py-4">
                                    <div className="flex gap-2 items-center flex-wrap">

                                      {el.food.nutritions.map((ele) => {
                                        return (
                                          <>
                                            <small className="px-4 py-1.5 bg-primary-50 capitalize font-semibold border border-primary-700 text-primary-700 rounded-full text-xs">
                                              {ele.name}: {ele.val} {ele.unit}
                                            </small>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}