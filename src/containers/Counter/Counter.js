import React, { Component } from "react";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
// connect functions that returns hoc helps this component to connect to the store of redux
import { connect } from "react-redux";

// Instead of these two below commented imports, we use index.js file which exports all these from various files into here
// import { increment, decrement, add, subtract } from "../store/actions/counter";
// import { storeResult, deleteResult } from "../store/actions/result";
import * as actionCreators from "../store/actions/index";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtractCounter(5)}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.results.map((result) => (
            <li
              onClick={() => this.props.onDeleteResult(result)}
              key={result.id}
            >
              {result.val}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: (value) => dispatch(actionCreators.add(value)),
    onSubtractCounter: (value) => dispatch(actionCreators.subtract(value)),
    // onStoreResult: (result) =>
    // dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: (value) => dispatch(actionCreators.deleteResult(value))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
