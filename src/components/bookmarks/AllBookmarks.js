import React from 'react'
import { BookmarkQuickAdd } from '../../containers/bookmarks'
import BookmarkList from './BookmarkList'

export const AllBookmarks = ({ bookmarks }) => (
  <div>
    <BookmarkQuickAdd />
    <BookmarkList bookmarks={bookmarks} />
  </div>
)

export default AllBookmarks
