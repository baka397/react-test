/**
 * app
 */
import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware} from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

// React component
class Counter extends React.Component {
  render () {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = {type: 'increase'}

// Reducer
function counter (state = {count: 0}, action) {
  let count = state.count
  switch (action.type) {
    case 'increase':
      return {count: count + 1}
    default:
      return state
  }
}

//插入中间件
let createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

//载入redux debug插件
function configureStore(reducer,initialState) {
  const store = createStoreWithMiddleware(reducer, initialState, 
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}
// Store
//let store = createStore(counter);
let store = configureStore(counter,{count:0});

// Map Redux state to component props
function mapStateToProps (state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('page')
)