import { useSelector } from "react-redux"
import ScreenLoading from "../../components/ScreenLoading"

export default function UserInfoSection() {
  // const [subscribeData, setSubscribeData] = useState()

  // const dispatch = useDispatch()
  const authSlice = useSelector((state) => state.authSlice.userInfo)
  const isLoading = useSelector((state) => state.loaderSlice.isLoading)

  return (
    <>
      {isLoading && <ScreenLoading />}

      <section>
        <div className="min-w-[329px] flex-1 rounded-lg ">
          <div>
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm py-12 px-8">
              <div class="flex flex-col pb-10">
                <div className="flex flex-col items-center">
                  <div class="relative w-24 h-24 overflow-hidden bg-gray-100 rounded-full mb-8">
                    <svg class="absolute w-full text-gray-400 bottom-[-10px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  </div>
                  <h5 class="mb-1 text-xl font-medium text-gray-900 capitalize">{authSlice.name}</h5>
                  <span class="text-sm text-gray-500 ">{authSlice.email}</span>
                </div>
                <div className="mt-8">
                  <div className="flex gap-3 justify-between mb-5">
                    <div className="font-semibold min-w-[80px] flex-1">
                      Address
                    </div>
                    <div className=" min-w-[80px] max-w-[120px] flex-1 text-right">
                      {authSlice.address}
                    </div>
                  </div>
                  <div className="flex gap-3 justify-between mb-5">
                    <div className="font-semibold min-w-[80px] flex-1">
                      Alergi
                    </div>
                    <div className=" min-w-[80px] max-w-[120px] flex-1 text-right">
                      {authSlice.alergy}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}