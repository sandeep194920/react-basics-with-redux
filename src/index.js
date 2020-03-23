import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// importing createStore to have a central store, combine reducers combines two reducers here, applyMiddleware is used to introduce middleware
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import reducers, combine them and then pass it to store
import counterReducer from "./containers/store/reducers/counter";
import resultReducer from "./containers/store/reducers/result";

// import Provider from react-redux to connect react to redux
import { Provider } from "react-redux";

// Adding redux middleware, redux-thunk
import thunk from "redux-thunk";

// combining reducers
const rootReducers = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

// Adding a middleware
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[MIDDLEWARE] DISPATCHING");
      console.log(action);
      // At this point the action is built but not passed yet into reducer. next() does that.
      // next() passes the action further to reach reducer. The idea is to modify the action and then pass it further
      // to the reducer. We should be careful while modifying action here because that can stop the app or cause unexpected behavior.
      // Generally, at this point (before we pass action to reducer) we can include side-effects like getting something from backend (async code).
      console.log("[MIDDLEWARE] current state ");
      console.log(store.getState());

      const result = next(action); // line 1
      // we can directly return next(action) --line 1, without assigning it to result -- line 2. But here let me show next state below
      console.log("[MIDDLEWARE] next state ");
      console.log(store.getState());
      return result; // line 2

      // The question is, what do we get after executing line 1 - next(action). Do we get the result of current or next state?
      // So the answer is simple. It basically means, once the action is passed further into the reducer, this is the output we
      // will be getting.

      // The bottom line is, once the next(action) is executed then the action reaches reducer and the store gets updated as you see the console logs.
    };
  };
};

// For redux devtools (devtools is used to see the state before and after an action is dispatched)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// creating a central store
const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
); // FYI :applyMW can take multiple middlewares like logger(manually defined middleware) Or thunk(redux middleware), and they will be executed one after the other.

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
