import { useDispatch, useSelector } from "react-redux"
import Modal from "../../components/Modal"
import { useEffect, useState } from "react"
import { setLoader } from "../../redux/slices/loaderSlice"
import { getSubscriptionByUserId } from "../../api/getSubscription"
import ScreenLoading from "../../components/ScreenLoading"
import Button from "../../components/Button"
import UserInfoSection from "./userInfoSection"
import { updateSubsciption } from "../../api/updateSubscription"
import { toast } from "react-toastify"
import { Link } from "react-router"

export default function DashboardIndex() {
  const [subscribeData, setSubscribeData] = useState()

  const dispatch = useDispatch()
  const authSlice = useSelector((state) => state.authSlice.userInfo)
  const isLoading = useSelector((state) => state.loaderSlice.isLoading)

  const handleUpdateStatus = async (status, isReactivation) => {
    dispatch(setLoader(true))

    const payload = {
      id_diet_type: subscribeData.id_diet_type,
      status_subs: status,
      is_reactivation: isReactivation
    }

    const res = await updateSubsciption(subscribeData.id, payload)
    if (res?.data?.is_error) {
      toast.error(res.data.msg);
    } else {
      const res = await getSubscriptionByUserId(authSlice.user_id)
      setSubscribeData(res.data.result.subscription)

      toast.success('Berhasil!')
    }
    dispatch(setLoader(false))

  }

  useEffect(() => {
    const getInitSubs = async () => {
      dispatch(setLoader(true))

      const res = await getSubscriptionByUserId(authSlice.user_id)
      setSubscribeData(res.data.result?.subscription || null)
      dispatch(setLoader(false))
    }

    getInitSubs()
  }, [dispatch, authSlice])

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
        <div className="flex gap-10 flex-wrap">
          <UserInfoSection />
          <div className="min-w-[320px] flex-1 px-5 py-8 rounded-lg bg-white border border-gray-300">
            {subscribeData ?
              <>
                <h3>Paket Layanan</h3>
                <div className="flex gap-10 flex-wrap">
                  <div className="min-w-[280px] max-w-[400px] flex-1">
                    <div className={`${subscribeData?.status == 'active' ? 'bg-primary-700' : subscribeData?.status == 'pending' ? 'bg-yellow-500' : subscribeData?.status == 'canceled' ? 'bg-red-500' : ''} rounded-xl`}>
                      <div className="px-8 py-3 font-bold text-white capitalize">
                        {subscribeData?.status}
                      </div>
                      <div className={`${subscribeData?.status == 'active' ? 'bg-primary-50 border border-primary-700' : subscribeData?.status == 'pending' ? 'bg-yellow-50 border border-yellow-500' : subscribeData?.status == 'canceled' ? 'bg-red-50 border border-red-500' : ''} shadow-xl w-full p-4 rounded-lg sm:p-8 cursor-pointer transition-all mb-10 py-8`}>
                        <div className="mb-8">
                          <h5 className="font-semibold capitalize">{subscribeData?.name}</h5>
                          <div className={`${subscribeData?.status == 'active' ? 'text-primary-900' : subscribeData?.status == 'pending' ? 'text-yellow-900' : subscribeData?.status == 'canceled' ? 'text-red-900' : ''} text-[13.5px]  mt-[-8px]`}>
                            (Rp. {subscribeData?.subs_diet_type_price_meal} / Makanan)
                          </div>
                        </div>
                        <small className="text-gray-500">Total : </small>
                        <div className={`${subscribeData?.status == 'active' ? 'text-primary-900' : subscribeData?.status == 'pending' ? 'text-yellow-700' : subscribeData?.status == 'canceled' ? 'text-red-700' : ''} flex items-baseline`}>
                          <span className="text-3xl font-semibold">Rp. </span>
                          <span className="text-5xl font-semibold tracking-tight">{subscribeData?.total_bill}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <Link to={'/subscription?chooseAnotherPlan=true'}>
                        <Button isExtend={true} buttonType="secondary">
                          Pilih Paket Lain
                        </Button>
                      </Link>
                    </div>
                    {subscribeData?.status == 'active' ?

                      <>
                        <div className="mb-5">
                          <Button isExtend={true} buttonType="warning" onClickProp={() => {
                            handleUpdateStatus('pending', null)
                          }}>
                            Jeda Langganan
                          </Button>
                        </div>
                        <div className="mb-5">
                          <Button isExtend={true} buttonType="danger" onClickProp={() => {
                            handleUpdateStatus('canceled', null)
                          }}>
                            Berhenti
                          </Button>
                        </div>
                      </>
                      :
                      <>
                        <div className="mb-5">
                          <Button isExtend={true} buttonType="primary" onClickProp={() => {
                            handleUpdateStatus('active', true)
                          }}>
                            Lanjutkan Langganan
                          </Button>
                        </div>
                      </>
                    }
                  </div>

                  <div className="min-w-[280px] flex-1">
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
              </>
              :
              <div className="flex justify-center items-center flex-col gap-5 w-full h-full">
                Anda Belum Berlangganan
                <Link to={'/subscription'}>
                  <Button buttonType="primary">
                    Pilih Langganan
                  </Button>
                </Link>
              </div>
            }

          </div>
        </div>
      </main>
    </>
  )
}