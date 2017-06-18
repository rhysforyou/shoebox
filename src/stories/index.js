/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import StoryRouter from 'storybook-router'
import { injectGlobal } from 'styled-components'

import BookmarkSummary from '../components/bookmarks/BookmarkSummary'
import Header from '../components/Header'
import Button, { LinkButton } from '../components/Button'
import TextField from '../components/forms/TextField'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
`

storiesOf('Header', module)
  .addDecorator(StoryRouter())
  .add('with default content', () => <Header />)
  .add('with a child component', () =>
    <Header>
      <Button to="/add">Add Bookmark</Button>
    </Header>
  )

storiesOf('Button', module)
  .add('with the default style', () =>
    <Button onClick={action('click')}>Button</Button>
  )
  .add('with the primary style', () =>
    <Button onClick={action('click')} primary>Button</Button>
  )
  .add('with the block style', () =>
    <Button onClick={action('click')} block>Button</Button>
  )

storiesOf('LinkButton', module)
  .addDecorator(StoryRouter())
  .add('with the default style', () =>
    <LinkButton to="#">LinkButton</LinkButton>
  )
  .add('with the primary style', () =>
    <LinkButton primary to="#">LinkButton</LinkButton>
  )
  .add('with the block style', () =>
    <LinkButton block to="#">LinkButton</LinkButton>
  )

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

storiesOf('TextField', module)
  .add('with the default style', () =>
    <TextField onChange={action('change')} />
  )
  .add('with the block style', () =>
    <TextField onChange={action('change')} block />
  )
  .add('with value', () =>
    <TextField onChange={action('change')} value="A value" />
  )
  .add('with placeholder', () =>
    <TextField onChange={action('change')} placeholder="A placeholder" />
  )
