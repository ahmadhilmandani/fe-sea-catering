import { Link, useNavigate } from "react-router"
import LogoSEA from "../../assets/logo/logo-sea-catering.png"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useState } from "react"
import { register } from "../../api/register"
import { useDispatch, useSelector } from "react-redux"
import { setLoader } from "../../redux/slices/loaderSlice"
import { toast } from "react-toastify"
import ScreenLoading from "../../components/ScreenLoading"


export default function RegisterIndex() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [alergies, setAlergies] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.loaderSlice.isLoading)
  const navigate = useNavigate()

  const submitRegister = async () => {

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!regexEmail.test(email)) {
      return toast.error("Format Email Tidak Benar");
    }
    
    if (!regexPassword.test(password)) {
      return toast.error("Password Harus Mengandung Min. 8 karakter, Huruf Besar, Huruf Kecil, dan Karakter Tanda Baca");
    }
    

    if (!name || !email || !password || !confirmPassword || !address || !alergies) {
      return toast.error("Tolong Isi Semua Kolom");
    }

    if (password != confirmPassword) {
      return toast.error("Password dan Konfirmasi Password Tidak sama");
    }

    dispatch(setLoader(true))
    const payload = {
      'name': name,
      'email': email,
      'password': password,
      'address': address,
      'alergies': alergies
    }
    const res = await register(payload)
    if (res?.data?.is_error) {
      toast.error(res.data.msg);
    } else {
      toast.success('Sekarang, Tolong Login pakai Akun yang dibuat barusan, thanks!');
      navigate('/login')
    }

    dispatch(setLoader(false))
  }


  return (
    <>
      {isLoading && <ScreenLoading /> }
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
            <h3 className="mx-auto text-center mb-8">Register</h3>
            <div className="mb-8">
              <Input
                isRequired={true} valueProp={name} labelProp={'Nama'} placeholderProp={'cth: Budi Andi'} typeProp={'text'} inputId={'customer-name'} onChangeProp={setName}
              />
            </div>
            <div className="mb-8">
              <Input
                isRequired={true} valueProp={address} labelProp={'Alamat'} placeholderProp={'cth: Sumeep'} typeProp={'text'} inputId={'customer-origin'} onChangeProp={setAddress}
              />
            </div>
            <div className="mb-8">
              <Input
                isRequired={true} valueProp={alergies} labelProp={'Alergi'} placeholderProp={'cth: Sumeep'} typeProp={'text'} inputId={'customer-origin'} onChangeProp={setAlergies}
              />
            </div>
            <div className="mb-8">
              <Input
                isRequired={true} valueProp={email} labelProp={'Email'} placeholderProp={'cth: bud@andi.com'} typeProp={'email'} inputId={'customer-origin'} onChangeProp={setEmail}
              />
            </div>
            <div className="mb-8">
              <Input
                isRequired={true} valueProp={password} labelProp={'Password'} placeholderProp={'cth: Password123!'} typeProp={'password'} inputId={'customer-origin'} onChangeProp={setPassword}
              />
            </div>
            <div className="mb-8">
              <Input
                isRequired={true} valueProp={confirmPassword} labelProp={'Konfirmasi Password'} placeholderProp={'cth: Password123!'} typeProp={'password'} inputId={'customer-origin'} onChangeProp={setConfirmPassword}
              />
            </div>
            <div className="mb-12 flex gap-2 items-center text-gray-500">
              Sudah punya akun? <Link to={'/login'} className="text-primary-700">Login di sini!</Link>
            </div>
            <Button isExtend={true} buttonType="primary" onClickProp={submitRegister}>
              Register
            </Button>
          </div>
        </div>
      </div >
    </>
  )
}