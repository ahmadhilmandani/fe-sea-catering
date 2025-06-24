import { IconStar, IconStarFilled } from "@tabler/icons-react";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";

export default function TestimoniFormCard() {
  const [customerName, setCustomerName] = useState('')
  const [customerOrigin, setCustomerOrigin] = useState('')
  const [customerTesti, setCustomerTesti] = useState('')

  return (
    <>
      <form className="w-full px-5 py-8 rounded-lg bg-white border border-gray-300">
        <h3 className="text-center mb-3"> Testimonimu</h3>
        <div className="mb-5 flex gap-3 justify-center items-center">
          <IconStar className="stroke-gray-500" stroke={1.4} />
          <IconStar className="stroke-gray-500" stroke={1.4} />
          <IconStar className="stroke-gray-500" stroke={1.4} />
          <IconStar className="stroke-gray-500" stroke={1.4} />
          <IconStar className="stroke-gray-500" stroke={1.4} />
        </div>
        <div className="mb-5">
          <Input
            valueProp={customerName} labelProp={'Nama'} placeholderProp={'cth: Budi Andi'} typeProp={'text'} inputId={'customer-name'} onChangeProp={setCustomerName}
          />
        </div>
        <div className="mb-5">

          <Input
            valueProp={customerOrigin} labelProp={'Asal'} placeholderProp={'cth: Sumeep'} typeProp={'text'} inputId={'customer-origin'} onChangeProp={setCustomerOrigin}
          />
        </div>

        <div className="mb-5">

          <Input
            valueProp={customerTesti} labelProp={'Testimoni'} placeholderProp={'cth: Saya Sangat Suka Dengan Makanan Tinggi Protein Di SEA Catering'} typeProp={'text'} inputId={'testimoni'} onChangeProp={setCustomerTesti}
          />
        </div>

        <div className="w-72 mx-auto">
          <Button isExtend={true} buttonType="primary">
            Kirim
          </Button>
        </div>

      </form>
    </>
  )
}