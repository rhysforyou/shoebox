// @flow
import { Map, List } from 'immutable'
import Tag, { tagsNamesFromString } from '../lib/tag'

import type { Action } from '../actions/types'

export type State = Map<string, Tag>

function addTagsFromBookmark(
  state: State,
  bookmarkId: string,
  tags: string[]
): State {
  return tags.reduce((state: State, name: string) => {
    if (state.has(name)) {
      return state.updateIn([name, 'bookmarks'], (bookmarks: List<string>) =>
        bookmarks.push(bookmarkId)
      )
    } else {
      return state.set(
        name,
        Tag({
          name,
          bookmarks: List([bookmarkId])
        })
      )
    }
  }, state)
}

function tags(state: State = Map(), action: Action): State {
  switch (action.type) {
    case 'COMMIT_DRAFT':
      if (action.entityType === 'bookmark') {
        return addTagsFromBookmark(
          state,
          action.id,
          tagsNamesFromString(action.entity.tags)
        )
      }
      return state
    default:
      return state
  }
}

export default tags
