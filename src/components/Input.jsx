import React from 'react'

const Input = ({ label, placeholder, type, required = false, onChange }) => {
  return (
    <div className="relative w-full">
      <label className="absolute text-[13px] top-0 left-3 font-semibold -translate-y-1/2 bg-base px-[4px] text-[#6C25FF] bg-white">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        onChange={onChange}
        required={required}
        className="border border-neutral-400 rounded-md p-[14px] w-full text-md text-black placeholder:text-gray-600 focus:outline-none focus:border-purple-600 transition pt-5"
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

export default Input
