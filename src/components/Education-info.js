import React from "react";
import Input from "./Input";

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset>
        <legend>Education Informations</legend>
        <label htmlFor="school-name">School Name</label>
        <Input type="text" placeholder="School Name" id="school-name" />
        <label htmlFor="city-name">In which city that school was ?</label>
        <Input type="text" placeholder="The name of city" id="city-name" />
        <label htmlFor="date">When have you finish it ?</label>
        <Input type="date" id="date" />
      </fieldset>
    );
  }
}

export default Education;
