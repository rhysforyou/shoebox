// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import shoebox from '../reducers/shoebox'

const composeEnhancers: typeof compose =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  const logger = createLogger({
    collapsed: true
  })

  const store = createStore(shoebox, composeEnhancers(applyMiddleware(logger)))
  return store
}

export default configureStore