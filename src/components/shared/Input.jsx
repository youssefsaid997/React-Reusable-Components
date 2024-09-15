import React from "react";

/**
 *
 * @param {} input label:string ,type:string , placeholder:string,value:string,onChange:()=>void,onKeyUp:()=>void
 * @returns jsx of our component
 */
function Input({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  onBlur,
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {/* here we will add the validation for our input */}
      {/* but first we need to understand how to validate values in react */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Input;
