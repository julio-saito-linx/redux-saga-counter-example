export function counter(state, action) {
  switch (action.type) {

  case 'INCREMENT':
    return state.set('count', state.get('count') + 1);

  case 'DECREMENT':
    return state.set('count', state.get('count') - 1);

  case 'INCREMENT_IF_ODD':
    if (state.get('count') % 2 !== 0) {
      return state.set('count', state.get('count') + 1);
    }
    return state;

  default:
    return state;

  }
}

export function showLoading(state, action) {
  switch (action.type) {

  case 'SHOW_LOADING':
    return state.set('display', true);

  case 'HIDE_LOADING':
    return state.set('display', false);

  default:
    return state;

  }
}
