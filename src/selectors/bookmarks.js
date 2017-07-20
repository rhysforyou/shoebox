// @flow
import { createSelector } from 'reselect'

import type { State } from '../reducers/types'
import type Bookmark from '../lib/bookmark'

export const bookmarksEntitiesSelector = (state: State) =>
  state.entities.bookmarks

export const bookmarkIdPropSelector = (
  state: State,
  props: { bookmarkId: string }
): string => props.bookmarkId

export const allBookmarksSelector = (state: State): string[] =>
  state.lists.allBookmarks.toArray()

export const bookmarkSelector = createSelector(
  bookmarksEntitiesSelector,
  bookmarkIdPropSelector,
  (bookmarkEntities, bookmarkId): ?Bookmark => bookmarkEntities.get(bookmarkId)
)

export const bookmarkSiteSelector = createSelector(
  bookmarkSelector,
  (bookmark): ?string => (bookmark ? bookmark.site : null)
)

export const bookmarkTitleSelector = createSelector(
  bookmarkSelector,
  (bookmark): string => (bookmark ? bookmark.title : '')
)

export const bookmarkDescriptionSelector = createSelector(
  bookmarkSelector,
  (bookmark): ?string => (bookmark ? bookmark.description : null)
)

export const bookmarkURLSelector = createSelector(
  bookmarkSelector,
  (bookmark): string => (bookmark ? bookmark.url : '#')
)

export const bookmarkImageSelector = createSelector(
  bookmarkSelector,
  (bookmark): ?string => (bookmark ? bookmark.image : null)
)
