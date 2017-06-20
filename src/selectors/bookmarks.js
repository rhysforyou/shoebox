// @flow
import { createSelector } from 'reselect'

import type { State } from '../reducers/types'
import type { Bookmark } from '../reducers/bookmarks'

export const bookmarksEntitiesSelector = (
  state: State
) => state.entities.bookmarks

export const allBookmarksSelector = createSelector(
  bookmarksEntitiesSelector,
  (bookmarkEntities): Bookmark[] => Array.from(bookmarkEntities.values())
)
