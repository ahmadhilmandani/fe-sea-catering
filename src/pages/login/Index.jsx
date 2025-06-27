import { Link, useNavigate } from "react-router"
import LogoSEA from "../../assets/logo/logo-sea-catering.png"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useState } from "react"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { setLoader } from "../../redux/slices/loaderSlice"
import { login } from "../../api/login"


export default function LoginIndex() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
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
      toast.success('Selamat Datang!');
      navigate('/')
    }
    dispatch(setLoader(false))
  }

  return (
    <div className="w-full px-12 py-12">
      <div className="flex items-center gap-3 w-fit mx-auto mb-12">
        <img src={LogoSEA} className="w-16" />
        <div>
          <div className="font-bold text-xl">SEA</div>
          <div className="font-bold text-xl">CATERING</div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className={`bg-white border border-gray-300 w-full max-w-lg px-6 py-12 rounded-lg`}>
          <h3 className="mx-auto text-center mb-8">Login</h3>
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
    </div >
  )
}