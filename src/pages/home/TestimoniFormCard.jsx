import { IconStar, IconStarFilled } from "@tabler/icons-react";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";
import { postTestimoni } from "../../api/postTestimoni";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../redux/slices/loaderSlice";
import { toast } from "react-toastify";
// import { getTestimoni } from "../../api/getTestimoni";
import Modal from "../../components/Modal";
import { setIsOpen } from "../../redux/slices/modalSlice";


export default function TestimoniFormCard({ handleRefetch }) {
  const [customerName, setCustomerName] = useState('')
  const [customerOrigin, setCustomerOrigin] = useState('')
  const [star, setStar] = useState('')
  const [customerTesti, setCustomerTesti] = useState('')
  const dispatch = useDispatch()
  const authSlice = useSelector((state) => state.authSlice.userInfo)


  const handleSubmitTestimoni = async () => {
    if ((!authSlice && !customerName && !customerOrigin) || !star || !customerTesti) {
      return toast.error(
        <span>
          (<span className="text-red-500">*</span>) Harus Diisi
        </span>
      );
    }

    dispatch(setLoader(true))

    const resp = await postTestimoni({
      name: authSlice.name || customerName,
      address: authSlice.address || customerOrigin,
      star: star,
      testimoni: customerTesti
    })


    if (resp?.data?.is_error) {
      toast.error(resp.data.msg);
    } else {
      dispatch(setIsOpen(false))
      toast.success('Terima Kasih Telah Mengisi Testimoni!');
      handleRefetch(true)
    }

    dispatch(setLoader(false))
  }


  return (
    <Modal
      modalTitle={'Testimonimu'}
      confrimButtonTxt='Kirim'
      confrimButtonClick={handleSubmitTestimoni}
    >
      <form className="w-full px-5 py-8 rounded-lg bg-white border border-gray-300">
        <h3 className="text-center mb-3">Beri Bintang! <span className="text-red-500">*</span></h3>
        <div className="mb-5 flex gap-3 justify-center items-center">
          <IconStar className={`${star >= 1 ? 'stroke-amber-300 fill-amber-300' : 'stroke-gray-500'}`} stroke={1.4} onClick={() => { setStar(1) }} />
          <IconStar className={`${star >= 2 ? 'stroke-amber-300 fill-amber-300' : 'stroke-gray-500'}`} stroke={1.4} onClick={() => { setStar(2) }} />
          <IconStar className={`${star >= 3 ? 'stroke-amber-300 fill-amber-300' : 'stroke-gray-500'}`} stroke={1.4} onClick={() => { setStar(3) }} />
          <IconStar className={`${star >= 4 ? 'stroke-amber-300 fill-amber-300' : 'stroke-gray-500'}`} stroke={1.4} onClick={() => { setStar(4) }} />
          <IconStar className={`${star >= 5 ? 'stroke-amber-300 fill-amber-300' : 'stroke-gray-500'}`} stroke={1.4} onClick={() => { setStar(5) }} />
        </div>
        <div className="mb-5">
          {
            authSlice ?
              <Input
                valueProp={authSlice.name} isReadOnly={true} labelProp={'Nama'} placeholderProp={'cth: Budi Andi'} typeProp={'text'} inputId={'customer-name'} isRequired={true} onChangeProp={setCustomerName}
              /> :
              <Input
                valueProp={customerName} isRequired={true} labelProp={'Nama'} placeholderProp={'cth: Budi Andi'} typeProp={'text'} inputId={'customer-name'} isRequired={true} onChangeProp={setCustomerName}
              />
          }
        </div>
        <div className="mb-5">
          {
            authSlice ?
              <Input
                valueProp={authSlice.address} isReadOnly={true} labelProp={'Asal'} placeholderProp={'cth: Sumenep'} typeProp={'text'} inputId={'customer-origin'} isRequired={true} onChangeProp={setCustomerOrigin}
              /> :
              <Input
                valueProp={customerOrigin} labelProp={'Asal'} placeholderProp={'cth: Sumeep'} typeProp={'text'} inputId={'customer-origin'} isRequired={true} onChangeProp={setCustomerOrigin}
              />
          }
        </div>

        <div className="mb-5">
          <Input
            valueProp={customerTesti} labelProp={'Testimoni'} placeholderProp={'cth: Saya Sangat Suka Dengan Makanan Tinggi Protein Di SEA Catering'} typeProp={'text'} inputId={'testimoni'} isRequired={true} onChangeProp={setCustomerTesti}
          />
        </div>

      </form>
    </Modal>

  )
}