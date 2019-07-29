import React, { Component } from "react";
import Content from "./components/Content";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
