import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
const MusicView = require('./container/music/music-view.jsx');
import configureStore from './configureStore/configureStore'
import DevTools from './container/dev/devtools.jsx';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer/index'
//import promiseMiddleware from 'redux-promise'
const thunkMiddleware = require('redux-thunk').default;
var storeCreator = compose(applyMiddleware(thunkMiddleware), DevTools.instrument())(createStore),
  store = storeCreator(reducer);
render(
  <Provider store={store}>
    <div>
      <MusicView />
      <DevTools/>
    </div>

  </Provider>
  ,
  document.getElementById('root')
)