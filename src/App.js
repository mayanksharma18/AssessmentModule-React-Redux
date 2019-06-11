import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import Form from'./components/Form'
import { BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'
import Quiz from './components/Quiz'
import {fetchData} from './actions/action'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware, bindActionCreators } from 'redux'
import reducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Allquestions from './components/Allquestions';

const Hello =()=>(
  <h1>hello</h1>
)
// const store=createStore(
//   reducer,
 
//   composeWithDevTools(applyMiddleware(thunk))
//   )
class App extends Component {


  render(){
    console.log(this.props)
  return (
   <div>
     
    <Quiz/>
   </div> 
  )
}
}


// const mapDispatchToProps = dispatch =>bindActionCreators({
//   fetchData
// },dispatch)

// function mapDispatchToProps(dispatch){

//   return bindActionCreators({ fetchData: fetchData },dispatch)
// }


export default connect()(App);