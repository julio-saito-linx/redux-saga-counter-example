import React, { PropTypes } from 'react';

const renderWait = (display) => {
  if (display) {
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

const Counter = ({ state, onIncrement, onDecrement, onIncrementIfOdd, onIncrementAsync }) => {
  const jsState = state.toJS();
  return (
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
        Counter : {jsState.counter.count}
      </h1>

      {renderWait(jsState.showLoading.display)}

      <br />
      <pre>
        jsState:
        {JSON.stringify(jsState, null, 2)}
      </pre>
    </div>
  );
};

Counter.propTypes = {
  state: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementIfOdd: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
};

export default Counter;
