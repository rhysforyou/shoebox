// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'

import Bookmark from '../lib/bookmark'
import Tag from '../lib/tag'

import shoebox from '../reducers/shoebox'

const configureStore = () => {
  const store = createStore(
    shoebox,
    compose(applyMiddleware(thunk), autoRehydrate())
  )

  persistStore(store, {
    blacklist: ['drafts'],
    transforms: [immutableTransform({ records: [Bookmark, Tag] })]
  })

  return store
}

export default configureStore
