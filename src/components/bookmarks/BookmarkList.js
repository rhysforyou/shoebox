// @flow
import React from 'react'
import styled from 'styled-components'
import { BookmarkListItem } from '../../containers/bookmarks'

const Container = styled.div`
  padding: 1rem 0;
`

type Props = {
  bookmarks: string[]
}

export const BookmarkList = ({ bookmarks }: Props) =>
  <Container>
    {bookmarks.map(id => <BookmarkListItem key={id} bookmarkId={id} />)}
  </Container>

export default BookmarkList
