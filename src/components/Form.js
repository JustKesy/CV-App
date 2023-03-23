import React from "react";
import PersonalInfo from "./Personal-info";
import Education from "./Education-info";
import Work from "./Work-experienc";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form">
        <PersonalInfo getValue={this.props.getValue} />
        <Education getValue={this.props.getValue} />
        <Work getValue={this.props.getValue} />
      </form>
    );
  }
}

export default Form;
