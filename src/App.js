import React from "react";
import Form from "./components/Form";
import Output from "./components/Output-view";
import "./style/App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "-----",
      lastName: "--------",
      eMail: "------",
      phone: "-------",
      school: "-------",
      city: "--------",
      date: "--------",
      company: "-------",
      position: "-------",
      experience: "-------",
      aboutU: "----------",
    };
    this.getValue = this.getValue.bind(this);
  }

  getValue(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Form getValue={this.getValue} />
        <Output state={this.state} />
      </div>
    );
  }
}

export default App;
