import { useDispatch } from "react-redux"
import { setIsOpen } from "../redux/slices/modalSlice";

export default function Modal() {
  const dispatch = useDispatch()

  return (
    <div onClick={() => {
      dispatch(setIsOpen(false))
    }} className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/80 z-[100] p-8">
      <div onClick={(e) => {
        e.stopPropagation();
      }} className="rounded-2xl max-w-2xl w-full border border-gray-300 bg-base-white aspect-video">
      </div>
    </div>
  )
}