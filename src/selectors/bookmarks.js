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

export const allBookmarksSelector = (state: State) => state.allBookmarks.toJS()

export const selectedBookmarkSelector = createSelector(
  bookmarksEntitiesSelector,
  bookmarkIdPropSelector,
  (bookmarkEntities, bookmarkId): ?Bookmark => bookmarkEntities.get(bookmarkId)
)

export const selectedBookmarkSiteSelector = createSelector(
  selectedBookmarkSelector,
  (bookmark): ?string => (bookmark ? bookmark.site : null)
)

export const selectedBookmarkTitleSelector = createSelector(
  selectedBookmarkSelector,
  (bookmark): string => (bookmark ? bookmark.title : '')
)

export const selectedBookmarkDescriptionSelector = createSelector(
  selectedBookmarkSelector,
  (bookmark): ?string => (bookmark ? bookmark.description : null)
)

export const selectedBookmarkURLSelector = createSelector(
  selectedBookmarkSelector,
  (bookmark): string => (bookmark ? bookmark.url : '#')
)

export const selectedBookmarkImageSelector = createSelector(
  selectedBookmarkSelector,
  (bookmark): ?string => (bookmark ? bookmark.image : null)
)
