import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// importing createStore to have a central store
import { createStore } from "redux";
// import reducer to pass it to store
import reducer from "./containers/store/reducer";

// creating a central store
store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
