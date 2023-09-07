import React from "react";

const CustomInput = ({ title, type, name, value, placeholder, onChange }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label>{title}</label>
      <input
        type={type}
        className="p-3 border-2 rounded-lg"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;