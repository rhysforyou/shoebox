// @flow
import { Map } from 'immutable'
import Bookmark from '../lib/bookmark'

import type { Action } from '../actions/types'

export type State = Map<string, Bookmark>

function bookmarks(state: State = Map(), action: Action): State {
  switch (action.type) {
    case 'COMMIT_DRAFT':
      const bookmark: Bookmark = Bookmark({
        ...action.entity,
        id: action.id
      })
      return state.set(action.id, bookmark)
    default:
      return state
  }
}

export default bookmarks
