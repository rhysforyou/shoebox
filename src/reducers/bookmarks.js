// @flow
import uuid from 'uuid'

import type { Action } from '../actions/types'

export type Bookmark = {
  id: string,
  site?: string,
  title: string,
  url: string,
  description: string,
  image?: string
}
export type State = { [id: string]: Bookmark }

function bookmarks(state: State = {}, action: Action): State {
  switch (action.type) {
    case 'COMMIT_DRAFT':
      const bookmark: Bookmark = {
        ...action.entity,
        id: uuid.v4()
      }
      return {
        ...state,
        [bookmark.id]: bookmark
      }
    default:
      return state
  }
}

export default bookmarks
