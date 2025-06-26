import { Link } from "react-router"
import LogoSEA from "../../assets/logo/logo-sea-catering.png"
import Button from "../../components/Button"
import Input from "../../components/Input"


export default function LoginIndex() {
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
              valueProp={"customerName"} labelProp={'Nama'} placeholderProp={'cth: Budi Andi'} typeProp={'text'} inputId={'customer-name'} onChangeProp={() => { }}
            />
          </div>
          <div className="mb-8">
            <Input
              valueProp={"customerOrigin"} labelProp={'Asal'} placeholderProp={'cth: Sumeep'} typeProp={'text'} inputId={'customer-origin'} onChangeProp={() => { }}
            />
          </div>
          <div className="mb-12 flex gap-2 items-center text-gray-500">
            Belum punya akun? <Link to={'/register'} className="text-primary-700">Register di sini!</Link>
          </div>
          <Button isExtend={true} buttonType="primary">
            Login
          </Button>
        </div>
      </div>
    </div >
  )
}