// @flow
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import demoApp from '../reducers/shoebox'

const configureStore = () => {
  const store = createStore(demoApp, applyMiddleware(thunk))
  return store
}

export default configureStore
