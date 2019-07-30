import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Content from "./components/Content";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Registration from "./components/Registration";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route exact path="/" component={Content} />
          <Route path="/register" component={Registration} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
