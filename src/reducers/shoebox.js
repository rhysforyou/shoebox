// @flow
import { combineReducers } from 'redux'
import bookmarks from './bookmarks'
import drafts from './drafts'
import allBookmarks from './allBookmarks'

import type { State } from './types'
import type { Action } from '../actions/types'

const shoebox: (state: State, action: Action) => State = combineReducers({
  entities: combineReducers({ bookmarks }),
  drafts,
  lists: combineReducers({ allBookmarks })
})

export default shoebox
