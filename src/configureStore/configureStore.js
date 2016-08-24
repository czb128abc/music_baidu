import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './../reducer/index.js'
import DevTools from './../container/dev/devtools.jsx';
const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./../reducer', () => {
      const nextReducer = require('../reducer/index.js')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore;