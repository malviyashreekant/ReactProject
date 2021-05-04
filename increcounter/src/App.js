import React, { Component } from "react";
import Button from "./components/Button";
import "./assets/css/style.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  
  
  

  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <div>
          <div class="count">
          
          <h3>Click on Button</h3>
          </div>
          <div class="buttons">
           <Button title={count} action={this.incrementCount} />
         </div>
        </div>
      </div>
    );
  }
}
