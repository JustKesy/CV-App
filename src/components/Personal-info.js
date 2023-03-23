import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import Input from "./Input";

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset className="personal-form">
        <legend>Personal Informations</legend>

        <Input
          type="text"
          placeholder="Your Name"
          id="name"
          htmlFor="name"
          labelText="Name :"
          onChange={this.props.getValue}
          name="name"
        />

        <Input
          type="text"
          placeholder="Your Surname"
          id="last-name"
          htmlFor="last-name"
          labelText="Last Name: "
          onChange={this.props.getValue}
          name="lastName"
        />

        <Input
          type="e-mail"
          placeholder="Your E-mail"
          id="e-mail"
          htmlFor="e-mail"
          labelText="E-mail: "
          onChange={this.props.getValue}
          name="eMail"
        />

        <Input
          type="tel"
          placeholder="Your Phone Number"
          id="phone"
          htmlFor="phone"
          labelText="Phone: "
          onChange={this.props.getValue}
          name="phone"
        />
      </fieldset>
    );
  }
}

export default PersonalInfo;
