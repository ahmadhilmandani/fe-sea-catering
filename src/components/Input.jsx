export default function Input({ valueProp, labelProp, placeholderProp, typeProp, inputId, onChangeProp, isReadOnly = false, isRequired = false }) {
  return (
    <>
      <label htmlFor={inputId} className="block mb-2 font-semibold">{labelProp}
        {isRequired && <span className="text-red-500 inline-block ml-2">*</span>}
      </label>
      <input value={valueProp} onChange={(e) => {
        onChangeProp(e.target.value)
      }} placeholder={placeholderProp} type={typeProp} id={inputId} className="block w-full p-2 rounded-lg bg-gray-50 outline outline-gray-300 text-sm focus:outline-primary-700  transition-all" readOnly={isReadOnly} required={isRequired} />
    </>
  )
}