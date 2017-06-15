// @flow
import React from 'react'
import styled from 'styled-components'
import Bookmark from './Bookmark'

const Container = styled.div`
  padding: 1rem 0;
`

type Props = {
  bookmarks: Array<{
    title: string,
    description: string,
    url: string,
    image?: string
  }>
}

const BookmarkList = ({ bookmarks }: Props) =>
  <Container>
    {bookmarks.map(({ title, description, url, image }) =>
      <Bookmark
        key={url}
        title={title}
        description={description}
        url={url}
        image={image}
      />
    )}
  </Container>

export default BookmarkList
