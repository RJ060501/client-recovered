import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
// Store create here, make seperate index file?
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import finalFormReducer from './actions/finalForm';
// import 'semantic-ui-css/semantic.min.css';
import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
// const store = (typeof window !== 'undefined' && window.devToolsExtension
//   ? window.devToolsExtension()(createStore)
//   : createStore)(reducer)

//component.render only creates the virtual DOM. It does not add it to the actual browser DOM.

//ReactDOM.render does both. It creates (or updates) the virtual DOM, and then additionally adds it to the actual browser DOM.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
