// An action will receive the store as the first argument.
// Since we are only interested in the dispatch (and optionally the state)
// we can pull those two parameters using the ES6 destructuring feature
export const incrementCounter = function ({ dispatch, state }) {
  console.log('HERE')
  dispatch('INCREMENT', 1)
}
