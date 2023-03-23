import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, placeholder, onChange, id, htmlFor, labelText, name } =
      this.props;
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
}

export default Input;
