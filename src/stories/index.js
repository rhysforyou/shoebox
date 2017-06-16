/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Bookmark from '../components/Bookmark'
import Header from '../components/Header'
import Button from '../components/Button'
import Welcome from './Welcome'

import '../index.css'

storiesOf('Welcome', module).add('to Storybook', () =>
  <Welcome showApp={linkTo('Button')} />
)

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
      title="An Example Bookmark"
      description="This is an example of what a bookmrk with an image might look like"
      url="https://facebook.github.io/react"
      image="https://facebook.github.io/react/img/logo_og.png"
    />
  )
  .add('without image', () =>
    <Bookmark
      title="An Example Bookmark"
      description="This is an example of what a bookmrk without an image might look like"
      url="https://facebook.github.io/react"
    />
  )
  .add('with Markdown content', () =>
    <Bookmark
      title="An Example Bookmark"
      description={
        'Bookmark descriptions can be provided as **Markdown**, and the component should _properly_ format them.\n\nThis includes paragraph breaks\n\n- Lists\n- of\n- Items\n\nand\n\n1. Numbered\n2. Lists\n\nand [Links](/)'
      }
      url="https://facebook.github.io/react"
      image="https://facebook.github.io/react/img/logo_og.png"
    />
  )
