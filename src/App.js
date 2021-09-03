
import './App.css';
import React from "react";
import Form from "./Form"
class App extends React.Component {
  styles = {
    fontstyle: "bold",
    color: "green"
  };
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome</h1>
        <Form />
      </div>
    );
  }
}
export default App;

