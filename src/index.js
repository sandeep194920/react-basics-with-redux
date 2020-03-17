import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// importing createStore to have a central store
import { createStore, combineReducers } from "redux";
// import reducers, combine them and then pass it to store
import counterReducer from "./containers/store/reducers/counter";
import resultReducer from "./containers/store/reducers/result";

// import Provider from react-redux to connect react to redux
import { Provider } from "react-redux";

// combining reducers
const rootReducers = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

// creating a central store
const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
