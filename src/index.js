import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './components/Form';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware } from 'redux'
import {rootReducer} from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Route, Link,} from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk';
const store= createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
    )

ReactDOM.render(
    <Provider store={store}>
     <App/>
       </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
