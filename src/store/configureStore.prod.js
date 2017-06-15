// @flow
import { createStore, applyMiddleware } from 'redux'
import demoApp from '../reducers/shoebox'

const configureStore = () => {
  const store = createStore(demoApp)
  return store
}

export default configureStore
