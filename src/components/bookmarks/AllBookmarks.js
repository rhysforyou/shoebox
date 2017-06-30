import React from 'react'
import styled from 'styled-components'
import { BookmarkQuickAdd } from '../../containers/bookmarks'
import BookmarkList from './BookmarkList'

const Container = styled.div`
  grid-area: content;
`

export const AllBookmarks = ({ bookmarks }) =>
  <Container>
    <BookmarkQuickAdd />
    <BookmarkList bookmarks={bookmarks} />
  </Container>

export default AllBookmarks
