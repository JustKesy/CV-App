import React from "react";
import Input from "./Input";

function Education(props) {
  return (
    <fieldset className="education-form">
      <legend>Education Informations</legend>

      <Input
        type="text"
        placeholder="School Name"
        id="school-name"
        htmlFor="school-name"
        labelText="School Name: "
        onChange={props.getValue}
        name="school"
      />

      <Input
        type="text"
        placeholder="The name of city"
        id="city-name"
        htmlFor="city-name"
        labelText="In which city that school was: "
        onChange={props.getValue}
        name="city"
      />

      <Input
        type="date"
        id="date"
        htmlFor="date"
        labelText="When have you finish it: "
        onChange={props.getValue}
        name="date"
      />
    </fieldset>
  );
}

export default Education;
