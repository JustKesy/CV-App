import React from "react";
import PersonalInfo from "./components/Personal-info";
import Education from "./components/Education-info";
import Work from "./components/Work-experienc";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <PersonalInfo />
        <Education />
        <Work />
      </div>
    );
  }
}

export default App;
