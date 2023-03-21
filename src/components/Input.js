import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, placeholder, onChange, id } = this.props;
    return (
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
      />
    );
  }
}

export default Input;
