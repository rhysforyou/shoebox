// @flow
import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router'
import Header from './Header'
import { AllBookmarks, NewBookmark } from '../containers/bookmarks'

const Container = styled.div`
  max-width: 48rem;
  margin: auto;

  display: flex;
  flex-direction: column;
`

const App = () =>
  <Container>
    <Header />
    <Route exact path="/" component={AllBookmarks} />
    <Route path="/all" component={AllBookmarks} />
    <Route path="/add" component={NewBookmark} />
  </Container>

export default App
