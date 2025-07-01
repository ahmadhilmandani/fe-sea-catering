import { useDispatch, useSelector } from "react-redux"
import Modal from "../../components/Modal"
import { useEffect, useState } from "react"
import { setLoader } from "../../redux/slices/loaderSlice"
import ScreenLoading from "../../components/ScreenLoading"
import Button from "../../components/Button"
import { toast } from "react-toastify"
import { Link } from "react-router"
import { IconCoinFilled, IconRosetteDiscountCheckFilled, IconSeedlingFilled, IconUserFilled } from "@tabler/icons-react"
import { getAdminDashboardData } from "../../api/getAdminDashboardData"
import dayjs from "dayjs"

export default function DashboardAdminIndex() {
  const [startDate, setStartDate] = useState(dayjs().subtract(1, 'day').format('YYYY-MM-DD'))
  const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [newSubs, setNewSubs] = useState()
  const [totalReactivation, setTotalReactivation] = useState()
  const [totalBill, setTotalBill] = useState()
  const [totalSub, setTotalSub] = useState()

  const dispatch = useDispatch()
  const authSlice = useSelector((state) => state.authSlice.userInfo)
  const isLoading = useSelector((state) => state.loaderSlice.isLoading)


  useEffect(() => {
    const getData = async () => {
      dispatch(setLoader(true))

      const res = await getAdminDashboardData(startDate, endDate)
      setNewSubs(res.data.result[0].new_subs)
      setTotalReactivation(res.data.result[0].total_reactivation)
      setTotalBill(res.data.result[0].sum_total_bill)
      setTotalSub(res.data.result[0].total_sub)

      dispatch(setLoader(false))

      console.log(res)
    }
    getData()
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
            DASHBOARD ADMIN
          </div>
        </div>
        <h1 className="text-primary-700 text-balance">
          Selamat Datang, {authSlice.name} 👋!
        </h1>
        <div className="text-gray-500 mb-10">
          Pantau aktivitas, kelola langganan, dan temukan insight personal seputar pola makan sehatmu di satu tempat.
        </div>
        <div>
          <div>
            <div className="flex gap-3 justify-center items-center mb-5 flex-wrap">
              <div className="w-[100px]">
                Cari Dari Tgl
              </div>
              <div className="min-w-[120px] max-w-[320px]">
                <input
                  value={startDate}
                  type="date"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Select date"
                  onChange={(e) => {
                    setStartDate(e.target.value)
                  }}
                />
              </div>
              <div className="w-[60px]">
                Sampai
              </div>
              <div className="min-w-[120px] max-w-[320px]">
                <input
                  value={endDate}
                  type="date"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Select date"
                  onChange={(e) => {
                    setEndDate(e.target.value)
                  }}
                />
              </div>
            </div>
            <div className="w-full max-w-7xl mx-auto px-5 py-8 rounded-lg bg-white border border-gray-300">
              <div className="grid mb-8 md:mb-12 md:grid-cols-2">
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                  <div className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                    <div className="bg-primary-100 mb-8 mx-auto max-w-[120px] aspect-square w-full flex justify-center items-center rounded-full">
                      <IconUserFilled className="fill-primary-800" size={32} />
                    </div>
                    <h2 className="mb-2 font-semibold text-primary-700">{newSubs}</h2>
                    <h3 className="text-lg font-medium text-gray-900">New Subscriptions</h3>
                  </div>
                </figure>

                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg">
                  <div className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                    <div className="bg-primary-100 mb-8 mx-auto max-w-[120px] aspect-square w-full flex justify-center items-center rounded-full">
                      <IconCoinFilled className="fill-primary-800" size={32} />
                    </div>
                    <h2 className="mb-2 font-semibold text-primary-700">Rp. {totalBill}</h2>
                    <h3 className="text-lg font-medium text-gray-900">Monthly Recurring Revenue (MRR)</h3>
                  </div>
                </figure>

                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e">
                  <div className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                    <div className="bg-primary-100 mb-8 mx-auto max-w-[120px] aspect-square w-full flex justify-center items-center rounded-full">
                      <IconRosetteDiscountCheckFilled className="fill-primary-800" size={32} />

                    </div>
                    <h2 className="mb-2 font-semibold text-primary-700">{totalReactivation}</h2>
                    <h3 className="text-lg font-medium text-gray-900">Reactivations</h3>
                  </div>
                </figure>

                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg">
                  <div className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                    <div className="bg-primary-100 mb-8 mx-auto max-w-[120px] aspect-square w-full flex justify-center items-center rounded-full">
                      <IconSeedlingFilled className="fill-primary-800" size={32} />

                    </div>
                    <h2 className="mb-2 font-semibold text-primary-700">{totalSub}</h2>
                    <h3 className="text-lg font-medium text-gray-900">Subscription Growth</h3>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}