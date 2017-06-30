/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-router'
import { injectGlobal } from 'styled-components'

import Header from '../components/Header'
import Button, { LinkButton } from '../components/Button'

import './forms'
import './bookmarks'

// eslint-disable-next-line no-unused-expressions
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
    <Button onClick={action('click')} primary>
      Button
    </Button>
  )
  .add('with the block style', () =>
    <Button onClick={action('click')} block>
      Button
    </Button>
  )

storiesOf('LinkButton', module)
  .addDecorator(StoryRouter())
  .add('with the default style', () =>
    <LinkButton to="#">LinkButton</LinkButton>
  )
  .add('with the primary style', () =>
    <LinkButton primary to="#">
      LinkButton
    </LinkButton>
  )
  .add('with the block style', () =>
    <LinkButton block to="#">
      LinkButton
    </LinkButton>
  )
