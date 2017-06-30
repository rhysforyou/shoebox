// @flow
import { Map } from 'immutable'
import Bookmark from '../lib/bookmark'
import { tagsNamesFromString } from '../lib/tag'

import type { Action } from '../actions/types'

export type State = Map<string, Bookmark>

function bookmarks(state: State = Map(), action: Action): State {
  switch (action.type) {
    case 'COMMIT_DRAFT':
      if (action.entityType !== 'bookmark') return state
      const bookmark: Bookmark = Bookmark({
        ...action.entity,
        tags: tagsNamesFromString(action.entity.tags),
        id: action.id
      })
      return state.set(action.id, bookmark)
    default:
      return state
  }
}

export default bookmarks
