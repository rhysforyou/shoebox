// @flow
import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router'
import Header from './Header'
import { AllBookmarks, NewBookmark } from '../containers/bookmarks'

const Container = styled.div`
  max-width: 64rem;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 16rem;
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "header header"
    "content sidebar";

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
      "header"
      "sidebar"
      "content";
  }
`

const App = () =>
  <Container>
    <Header />
    <Switch>
      <Route exact path="/" component={AllBookmarks} />
      <Route exact path="/all" component={AllBookmarks} />
      <Route path="/add" component={NewBookmark} />
    </Switch>
  </Container>

export default App
