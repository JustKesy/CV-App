import React from "react";
import Input from "./Input";

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset>
        <legend>Personal Informations</legend>
        <label htmlFor="name">Name: </label>
        <Input type="text" placeholder="Your Name" id="name" />
        <label htmlFor="last-name">Last Name: </label>
        <Input type="text" placeholder="Your Surname" id="last-name" />
        <label htmlFor="e-mail">E-mail: </label>
        <Input type="e-mail" placeholder="Your E-mail" id="e-mail" />
        <label htmlFor="phone">Phone: </label>
        <Input type="tel" placeholder="Your Phone Number" id="phone" />
      </fieldset>
    );
  }
}

export default PersonalInfo;
