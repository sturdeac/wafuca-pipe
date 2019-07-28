import React, { Component } from "react";
import logo from "./logo.svg";
import { simpleAction1, simpleAction2 } from "./actions/simpleAction";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  simpleAction1 = e => {
    this.props.simpleAction1();
  };

  simpleAction2 = e => {
    this.props.simpleAction2();
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <pre>{JSON.stringify(this.props)}</pre>
        <pre>{this.props.test}</pre>
        <button onClick={this.simpleAction1}>Test redux action</button>
        <button onClick={this.simpleAction2}>Test redux action</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction1: () => dispatch(simpleAction1()),
  simpleAction2: () => dispatch(simpleAction2())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
