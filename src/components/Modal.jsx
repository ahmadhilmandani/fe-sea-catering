import { useDispatch } from "react-redux"
import { setIsOpen } from "../redux/slices/modalSlice";
import Button from "./Button";

export default function Modal({ modalTitle, children, confrimButtonTxt, confrimButtonClick }) {
  const dispatch = useDispatch()

  return (
    <div onClick={() => {
      dispatch(setIsOpen(false))
    }} className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/80 z-[100] p-8">
      <div onClick={(e) => {
        e.stopPropagation()
      }} className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              {modalTitle}
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="static-modal" onClick={() => {
              dispatch(setIsOpen(false))

            }}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            {children}
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b gap-2">
            <div className="min-w-[200px] flex-1">
              <Button isExtend={true} buttonType="secondary" onClickProp={() => {
                dispatch(setIsOpen(false))
              }}>
                Tutup Modal
              </Button>
            </div>
            <div className="min-w-[200px] flex-1">
              <Button onClickProp={confrimButtonClick} isExtend={true} buttonType="primary">
                {confrimButtonTxt}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}