import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton.js";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user1Username: "",
  //     user2Username: ""
  //   };
  // }
  render() {
    return (
      <div className="App">
        <Navbar />

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />

        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess>
          Button 2
        </CoolButton>
      </div>
    );
  }
}

export default App;
