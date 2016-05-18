/* eslint-disable no-unused-vars */

import React, { Component, PropTypes } from 'react';

const renderWait = (state) => {
  if (state.showLoading) {
    return <span>loading...</span>;
  }
  return null;
};

const styles = {
  bigButton: {
    fontSize: 20,
    margin: 10,
  }
};

const Counter = ({ state, onIncrement, onDecrement, onIncrementIfOdd, onIncrementAsync }) =>
  <div>
    <p>
      <button
        style={styles.bigButton}
        onClick={onIncrement}
      >
        PLUS 1
      </button>

      <button
        style={styles.bigButton}
        onClick={onDecrement}
      >
        MINUS 1
      </button>

      <button
        style={styles.bigButton}
        onClick={onIncrementIfOdd}
      >
        PLUS 1 (if odd)
      </button>

      <button
        style={styles.bigButton}
        onClick={onIncrementAsync}
      >
        PLUS 1 (async)
      </button>


    </p>
    <h1>
      Counter: {state.counter}
    </h1>
    {renderWait(state)}

    <br />
    <pre>
      state:
      {JSON.stringify(state, null, 2)}
    </pre>
  </div>;

Counter.propTypes = {
  state: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementIfOdd: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
};

export default Counter;
