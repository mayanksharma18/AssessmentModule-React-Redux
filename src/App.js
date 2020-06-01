import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import LearnFast from './components/Header/Header'
import Quiz from './components/Quiz';
class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <LearnFast />
        <Quiz />
      </div>
    );
  }
}

export default connect()(App);
