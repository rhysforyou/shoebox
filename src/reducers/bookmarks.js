// @flow
import { Map } from 'immutable'

import type { Action } from '../actions/types'

export type Bookmark = {
  id: string,
  site?: string,
  title: string,
  url: string,
  description: string,
  image?: string
}
export type State = Map<string, Bookmark>

function bookmarks(state: State = Map(), action: Action): State {
  switch (action.type) {
    case 'COMMIT_DRAFT':
      const bookmark: Bookmark = {
        ...action.entity,
        id: action.id
      }
      return state.set(action.id, bookmark)
    default:
      return state
  }
}

export default bookmarks
