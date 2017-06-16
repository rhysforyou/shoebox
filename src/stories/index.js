/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { injectGlobal } from 'styled-components'

import Bookmark from '../components/Bookmark'
import Header from '../components/Header'
import Button from '../components/Button'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
`

storiesOf('Header', module)
  .add('with default content', () => <Header />)
  .add('with a child component', () =>
    <Header>
      <Button href="/add">Add Bookmark</Button>
    </Header>
  )

storiesOf('Button', module)
  .add('with the default style', () => <Button href="#">Button</Button>)
  .add('with the primary style', () => <Button primary href="#">Button</Button>)

storiesOf('Bookmark', module)
  .add('with image', () =>
    <Bookmark
      site="An Example Website"
      title="An Example Bookmark"
      description="This is an example of what a bookmrk with an image might look like"
      url="https://facebook.github.io/react"
      image="https://facebook.github.io/react/img/logo_og.png"
    />
  )
  .add('without image', () =>
    <Bookmark
      site="An Example Website"
      title="An Example Bookmark"
      description="This is an example of what a bookmrk without an image might look like"
      url="https://facebook.github.io/react"
    />
  )
  .add('with Markdown content', () =>
    <Bookmark
      site="An Example Website"
      title="An Example Bookmark"
      description={
        'Bookmark descriptions can be provided as **Markdown**, and the component should _properly_ format them.\n\nThis includes paragraph breaks\n\n- Lists\n- of\n- Items\n\nand\n\n1. Numbered\n2. Lists\n\nand [Links](/)'
      }
      url="https://facebook.github.io/react"
      image="https://facebook.github.io/react/img/logo_og.png"
    />
  )
