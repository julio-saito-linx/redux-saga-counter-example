export default function counter(state = {counter: 0, showLoading: false}, action) {
  switch (action.type) {

  case 'INCREMENT':
    state.counter++;
    return state;

  case 'INCREMENT_IF_ODD':
    if (state.counter % 2 !== 0) {
      state.counter++;
    }
    return state;

  case 'DECREMENT':
    state.counter--;
    return state;

  case 'SHOW_LOADING':
    state.showLoading = true;
    return state;

  case 'HIDE_LOADING':
    state.showLoading = false;
    return state;

  default:
    return state;

  }
}
