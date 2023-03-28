import React from "react";

function Input(props) {
  const { type, placeholder, onChange, id, htmlFor, labelText, name } = props;

  return (
    <div className="input-div">
      <label htmlFor={htmlFor}>{labelText}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        name={name}
      />
    </div>
  );
}

export default Input;
