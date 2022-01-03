import React from "react";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="input"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default Input;
