import { useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { setLoader } from "../../redux/slices/loaderSlice"
import { login } from "../../api/login"
import { setUserInfo } from "../../redux/slices/authSlice"
import Button from "../Button"
import Input from "../Input"
import { Link } from "react-router"

export default function ModalLocked() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const loginHandle = async () => {
    if (!email || !password) {
      return toast.error("Tolong Isi Semua Kolom");
    }

    dispatch(setLoader(true))

    const payload = {
      'email': email,
      'password': password
    }
    const res = await login(payload)
    if (res?.data?.is_error) {
      toast.error(res.data.msg);
    } else {
      localStorage.setItem('userId', res.data.result.user_id)
      localStorage.setItem('token', res.data.result.token)

      dispatch(setUserInfo({
        user_id: res.data.result.user_id,
        name: res.data.result.name,
        email: res.data.result.email,
        address: res.data.result.address,
      }))

      toast.success('Selamat Datang!')
    }
    dispatch(setLoader(false))
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/90 z-[10000] p-8">
      <div className={`bg-white border border-gray-300 w-full max-w-lg px-6 py-12 rounded-lg`}>
        <h3 className="mx-auto text-center mb-8">Login Dulu, yaa!</h3>
        <div className="mb-8">
          <Input
            isRequired={true} valueProp={email} labelProp={'Nama'} placeholderProp={'cth: Budi Andi'} typeProp={'text'} inputId={'customer-name'} onChangeProp={setEmail}
          />
        </div>
        <div className="mb-8">
          <Input
            isRequired={true} valueProp={password} labelProp={'Password'} placeholderProp={'cth: Sumeep'} typeProp={'password'} inputId={'customer-origin'} onChangeProp={setPassword}
          />
        </div>
        <div className="mb-12 flex gap-2 items-center text-gray-500">
          Belum punya akun? <Link to={'/register'} className="text-primary-700">Register di sini!</Link>
        </div>
        <Button isExtend={true} buttonType="primary" onClickProp={loginHandle}>
          Login
        </Button>
      </div>
    </div>
  )
}