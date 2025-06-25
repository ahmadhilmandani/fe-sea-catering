import Button from "../../components/Button";
import Input from "../../components/Input";

export default function SubscriptionIndex() {
  return (
    <div className="w-full min-h-screen px-12">
      <header className="mb-8">
        <h1 className="text-8xl text-primary-700 text-balance">
          Subsribe
        </h1>
        <div className="text-gray-500">
          Pilih dan pesan paket diet sesuai kebutuhan nutrisi dan gaya hidup Anda, siap antar langsung ke rumah!
        </div>
      </header>

      <form className="w-full px-5 py-8 rounded-lg bg-white border border-gray-300">
        <h3 className="text-center mb-3"> Testimonimu</h3>
        <div className="mb-5 flex gap-3 justify-center items-center">
          {/* <IconStar className="stroke-gray-500" stroke={1.4} /> */}
          {/* <IconStar className="stroke-gray-500" stroke={1.4} /> */}
          {/* <IconStar className="stroke-gray-500" stroke={1.4} /> */}
          {/* <IconStar className="stroke-gray-500" stroke={1.4} /> */}
          {/* <IconStar className="stroke-gray-500" stroke={1.4} /> */}
        </div>
        <div className="mb-5">
          <Input
            valueProp={"customerName"} labelProp={'Nama'} placeholderProp={'cth: Budi Andi'} typeProp={'text'} inputId={'customer-name'} onChangeProp={()=>{}}
          />
        </div>
        <div className="mb-5">
          <Input
            valueProp={"customerOrigin"} labelProp={'Asal'} placeholderProp={'cth: Sumeep'} typeProp={'text'} inputId={'customer-origin'} onChangeProp={()=>{}}
          />
        </div>

        <div className="mb-5">
          <Input
            valueProp={"customerTesti"} labelProp={'Testimoni'} placeholderProp={'cth: Saya Sangat Suka Dengan Makanan Tinggi Protein Di SEA Catering'} typeProp={'text'} inputId={'testimoni'} onChangeProp={()=>{}}
          />
        </div>
        <div className="w-72 mx-auto">
          <Button isExtend={true} buttonType="primary">
            Kirim
          </Button>
        </div>
      </form>
    </div>
  )
}