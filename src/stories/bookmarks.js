import React from 'react'
import { storiesOf } from '@storybook/react'
import BookmarkSummary from '../components/bookmarks/BookmarkSummary'

storiesOf('BookmarkSummary', module)
  .add('with image', () =>
    <BookmarkSummary
      site="An Example Website"
      title="An Example Bookmark"
      description="This is an example of what a bookmrk with an image might look like"
      url="https://facebook.github.io/react"
      image="https://facebook.github.io/react/img/logo_og.png"
    />
  )
  .add('without image', () =>
    <BookmarkSummary
      site="An Example Website"
      title="An Example Bookmark"
      description="This is an example of what a bookmrk without an image might look like"
      url="https://facebook.github.io/react"
    />
  )
  .add('with Markdown content', () =>
    <BookmarkSummary
      site="An Example Website"
      title="An Example Bookmark"
      description={
        'Bookmark descriptions can be provided as **Markdown**, and the component should _properly_ format them.\n\nThis includes paragraph breaks\n\n- Lists\n- of\n- Items\n\nand\n\n1. Numbered\n2. Lists\n\nand [Links](/)'
      }
      url="https://facebook.github.io/react"
      image="https://facebook.github.io/react/img/logo_og.png"
    />
  )
  .add('with just a title', () =>
    <BookmarkSummary
      title="An Example Bookmark"
      url="https://facebook.github.io/react"
    />
  )
