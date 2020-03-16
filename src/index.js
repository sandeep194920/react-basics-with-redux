import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// importing createStore to have a central store
import { createStore } from "redux";
// import reducer to pass it to store
import reducer from "./containers/store/reducer";
// import Provider from react-redux to connect react to redux
import { Provider } from "react-redux";

// creating a central store
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
