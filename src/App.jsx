import React, { Component } from "react";
const test = "https://th.bing.com/th/id/OIP.wwbJP3JFCHfGY8MfmuEjAAHaEK?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const link = "https://www.amazon.co.uk/";
export default class App extends Component {
  render() {
    return (
      <div>
        <img src={test} alt="" />
        <a href={link} target="_blank" rel="noreferrer">
          link
        </a>
      </div>
    );
  }
}
