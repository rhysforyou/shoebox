import React from 'react'
import { BookmarkQuickAdd } from '../../containers/bookmarks'
import BookmarkList from './BookmarkList'

export const AllBookmarks = ({ bookmarks }) =>
  <section>
    <BookmarkQuickAdd />
    <BookmarkList bookmarks={bookmarks} />
  </section>

export default AllBookmarks
