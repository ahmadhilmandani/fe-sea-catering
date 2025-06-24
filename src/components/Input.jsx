export default function Input({ valueProp, labelProp, placeholderProp, typeProp, inputId, onChangeProp, isReadOnly = false }) {
  return (
    <>
      <label htmlFor={inputId} className="block mb-2 text-sm font-medium">{labelProp}</label>
      <input value={valueProp} onChange={(e) => {
        onChangeProp(e.target.value)
      }} placeholder={placeholderProp} type={typeProp} id={inputId} className="block w-full p-2 rounded-lg bg-gray-50 outline outline-gray-300 text-sm focus:outline-primary-700  transition-all" readOnly={isReadOnly} />
    </>
  )
}