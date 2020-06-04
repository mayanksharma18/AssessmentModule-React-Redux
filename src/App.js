import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { connect } from 'react-redux';
import LearnFast from './components/Header/Header'
// import Quiz from './components/ReusableComponents/Quiz';
import MainScreen from './components/QuizScreens/index'
class App extends Component {
  render() {
    return (
      <div>
        <LearnFast />
        <Router>
        <MainScreen/>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
