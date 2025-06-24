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
  // else if (buttonType == BUTTON_TYPE.DANGER) {
  //   return (
  //     <>
  //       <button onClick={onClickProp} type="button" className={`flex justify-center items-center gap-3 text-danger-500 dark:text-danger-50 bg-danger-50 hover:bg-danger-100 font-medium rounded-lg text-sm px-6 py-2 dark:bg-danger-700 dark:hover:bg-danger-600 ring-0 focus:outline-none transition-all ${isExtend && 'w-full'} ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
  //         {isLoading && <IconLoader2 className="animate-spin text-sm" />}
  //         {children}
  //       </button>
  //     </>
  //   )
  // }
  // else if (buttonType == BUTTON_TYPE.WARNING) {
  //   return (
  //     <>
  //       <button onClick={onClickProp} type="button" className={`flex justify-center items-center gap-3 text-warning-800 dark:text-warning-50 bg-warning-100 hover:bg-warning-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-warning-700 dark:hover:bg-warning-600 ring-0 focus:outline-none transition-all ${isExtend && 'w-full'} ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
  //         {isLoading && <IconLoader2 className="animate-spin text-sm" />}
  //         {children}
  //       </button>
  //     </>
  //   )
  // }
}