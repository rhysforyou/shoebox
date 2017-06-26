// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import Draft from '../lib/draft'
import Bookmark from '../lib/bookmark'
import demoApp from '../reducers/shoebox'

const configureStore = () => {
  const store = createStore(
    demoApp,
    compose(applyMiddleware(thunk), autoRehydrate())
  )

  persistStore(store, {
    blacklist: ['drafts'],
    transforms: [immutableTransform({ records: [Draft, Bookmark] })]
  })

  return store
}

export default configureStore
