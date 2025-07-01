import { IconLoader2 } from "@tabler/icons-react"

const BUTTON_TYPE = {
  'PRIMARY': 'primary',
  'SECONDARY': 'secondary',
  'DANGER': 'danger',
  'WARNING': 'warning',
  'DEFAULT': 'default'
}



export default function Button({ onClickProp = () => { }, buttonType = BUTTON_TYPE.DEFAULT, isExtend = false, children, isLoading = false }) {
  if (buttonType == BUTTON_TYPE.PRIMARY) {
    return (
      <>
        <button onClick={onClickProp} type="button" className={`flex justify-center items-center gap-3 text-light bg-linear-to-r from-primary-800 to-primary-700 hover:bg-primary-600 font-medium rounded-full px-10 py-2.5 text-base-white ring-0 focus:outline-none transition-all ${isExtend && 'w-full'} ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          {isLoading && <IconLoader2 className="animate-spin text-sm" />}
          {children}
        </button>
      </>
    )
  }
  else if (buttonType == BUTTON_TYPE.SECONDARY) {
    return (
      <>
        <button onClick={onClickProp} type="button" className={`flex justify-center items-center gap-3 text-primary-900 bg-primary-200 hover:bg-primary-100 hover:text-primary-600 font-medium rounded-full px-10 py-2.5 ring-0 focus:outline-none transition-all ${isExtend && 'w-full'} ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          {isLoading && <IconLoader2 className="animate-spin text-sm" />}
          {children}
        </button>
      </>
    )
  }
  else if (buttonType == BUTTON_TYPE.DANGER) {
    return (
      <>
        <button onClick={onClickProp} type="button" className={`flex justify-center items-center gap-3 bg-red-50 text-red-800 hover:bg-red-100 font-medium rounded-full text-sm px-10 py-2.5 ring-0 focus:outline-none transition-all ${isExtend && 'w-full'} ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          {isLoading && <IconLoader2 className="animate-spin text-sm" />}
          {children}
        </button>
      </>
    )
  }
  else if (buttonType == BUTTON_TYPE.WARNING) {
    return (
      <>
        <button onClick={onClickProp} type="button" className={`flex justify-center items-center gap-3 bg-yellow-50 text-yellow-700 hover:bg-yellow-100 font-medium rounded-full text-sm px-10 py-2.5 ring-0 focus:outline-none transition-all ${isExtend && 'w-full'} ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          {isLoading && <IconLoader2 className="animate-spin text-sm" />}
          {children}
        </button>
      </>
    )
  }
  else {
    return (
      <>
        <button onClick={onClickProp} type="button" className={`flex justify-center items-center gap-3 bg-gray-100 hover:bg-gray-50 text-gray-500 hover:text-gray-600 font-medium rounded-full px-10 py-2.5 ring-0 focus:outline-none transition-all ${isExtend && 'w-full'} ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          {isLoading && <IconLoader2 className="animate-spin text-sm" />}
          {children}
        </button>
      </>
    )
  }
}