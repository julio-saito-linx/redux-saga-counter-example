import React, { PropTypes } from 'react';
import styles from './styles';

const renderWait = (display) => {
  if (display) {
    return <span>(loading...)</span>;
  }
  return null;
};

const Counter = ({
  state,
  onReset,
  onIncrement,
  onDecrement,
  onIncrementIfOdd,
  onIncrementAsync,
}) => {
  const jsState = state.toJS();
  return (
    <div>
      <div style={styles.container}>
        <button
          style={styles.bigButton}
          onClick={onReset}
        >
          RESET
        </button>

        <button
          style={styles.bigButton}
          onClick={onDecrement}
        >
          -
        </button>

        <button
          style={styles.bigButton}
          onClick={onIncrement}
        >
          +
        </button>

        <button
          style={styles.bigButton}
          onClick={onIncrementIfOdd}
        >
          + (if odd)
        </button>

        <button
          style={styles.bigButton}
          onClick={onIncrementAsync}
        >
          + (async)
        </button>
      </div>

      <div style={styles.container}>
        <div style={styles.containerResults}>
          {renderWait(jsState.showLoading.display)}
          <h1 style={styles.resultTitle}>
            Counter : {jsState.counter.count}
          </h1>
          {renderWait(jsState.showLoading.display)}
        </div>
      </div>

      <div style={styles.containerPre}>
        <pre>
          jsState:
          {JSON.stringify(jsState,
           null, 2)}
        </pre>
      </div>
    </div>
  );
};

Counter.propTypes = {
  state: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementIfOdd: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
};

export default Counter;
