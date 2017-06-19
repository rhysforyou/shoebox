// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import Draft from '../lib/draft'

import shoebox from '../reducers/shoebox'

const composeEnhancers: typeof compose =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  const logger = createLogger({
    collapsed: true
  })

  const store = createStore(
    shoebox,
    composeEnhancers(applyMiddleware(thunk, logger), autoRehydrate())
  )

  persistStore(store, {
    transforms: [immutableTransform({ records: [Draft] })]
  })

  return store
}

export default configureStore
