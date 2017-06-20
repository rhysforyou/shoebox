// @flow
import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router'
import Header from './Header'
import { AllBookmarks, NewBookmark } from '../containers/bookmarks'

const Container = styled.div`
  max-width: 48rem;
  margin: auto;
`

const App = () =>
  <Container>
    <Header />
    <Switch>
      <Route exact path="/" component={AllBookmarks} />
      <Route path="/add" component={NewBookmark} />
    </Switch>
  </Container>

export default App
