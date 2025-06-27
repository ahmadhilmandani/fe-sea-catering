import { IconStar, IconStarFilled } from "@tabler/icons-react";
import Input from "../../components/Input";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { getUserInfo } from "../../api/getUserInfo";
import { postTestimoni } from "../../api/postTestimoni";
import { useDispatch } from "react-redux";
import { setLoader } from "../../redux/slices/loaderSlice";
import { toast } from "react-toastify";
import { getTestimoni } from "../../api/getTestimoni";

export default function TestimoniFormCard() {
  const [userInfo, setUserInfo] = useState()
  const [customerName, setCustomerName] = useState('')
  const [customerOrigin, setCustomerOrigin] = useState('')
  const [star, setStar] = useState('')
  const [customerTesti, setCustomerTesti] = useState('')
  const dispatch = useDispatch()


  const handleSubmitTestimoni = async () => {
    dispatch(setLoader(true))

    const resp = await postTestimoni({
      name: userInfo.name || customerName,
      address: userInfo.address || customerOrigin,
      star: star,
      testimoni: customerTesti
    })

    if (resp?.data?.is_error) {
      toast.error(resp.data.msg);
    } else {
      toast.success('Terima Kasih Telah Mengisi Testimoni!');
      await getTestimoni(5)
    }
    

    dispatch(setLoader(false))
  }

  useEffect(() => {
    const handleGetUserInfo = async () => {
      const resp = await getUserInfo()
      setUserInfo(resp.data.result.user)
    }

    handleGetUserInfo()
  }, [])

  return (
    <>
      <form className="w-full px-5 py-8 rounded-lg bg-white border border-gray-300">
        <h3 className="text-center mb-3"> Testimonimu</h3>
        <div className="mb-5 flex gap-3 justify-center items-center">
          <IconStar className={`${star >= 1 ? 'stroke-amber-300 fill-amber-300' : 'stroke-gray-500'}`} stroke={1.4} onClick={()=>{setStar(1)}} />
          <IconStar className={`${star >= 2 ? 'stroke-amber-300 fill-amber-300' : 'stroke-gray-500'}`} stroke={1.4} onClick={()=>{setStar(2)}} />
          <IconStar className={`${star >= 3 ? 'stroke-amber-300 fill-amber-300' : 'stroke-gray-500'}`} stroke={1.4} onClick={()=>{setStar(3)}} />
          <IconStar className={`${star >= 4 ? 'stroke-amber-300 fill-amber-300' : 'stroke-gray-500'}`} stroke={1.4} onClick={()=>{setStar(4)}} />
          <IconStar className={`${star >= 5 ? 'stroke-amber-300 fill-amber-300' : 'stroke-gray-500'}`} stroke={1.4} onClick={()=>{setStar(5)}} />
        </div>
        <div className="mb-5">
          {
            userInfo ?
              <Input
                valueProp={userInfo.name} isReadOnly={true} labelProp={'Nama'} placeholderProp={'cth: Budi Andi'} typeProp={'text'} inputId={'customer-name'} onChangeProp={setCustomerName}
              /> :
              <Input
                valueProp={customerName} isRequired={true} labelProp={'Nama'} placeholderProp={'cth: Budi Andi'} typeProp={'text'} inputId={'customer-name'} onChangeProp={setCustomerName}
              />
          }
        </div>
        <div className="mb-5">
          {
            userInfo ?
              <Input
                valueProp={userInfo.address} isReadOnly={true} labelProp={'Asal'} placeholderProp={'cth: Sumenep'} typeProp={'text'} inputId={'customer-origin'} onChangeProp={setCustomerOrigin}
              /> :
              <Input
                valueProp={customerOrigin} labelProp={'Asal'} placeholderProp={'cth: Sumeep'} typeProp={'text'} inputId={'customer-origin'} onChangeProp={setCustomerOrigin}
              />
          }
        </div>

        <div className="mb-5">
          <Input
            valueProp={customerTesti} labelProp={'Testimoni'} placeholderProp={'cth: Saya Sangat Suka Dengan Makanan Tinggi Protein Di SEA Catering'} typeProp={'text'} inputId={'testimoni'} onChangeProp={setCustomerTesti}
          />
        </div>
        <div className="w-72 mx-auto">
          <Button isExtend={true} buttonType="primary" onClickProp={handleSubmitTestimoni}>
            Kirim
          </Button>
        </div>
      </form>
    </>
  )
}