// @flow
import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router'
import Header from './Header'
import { LinkButton } from './Button'
import AllBookmarks from '../containers/AllBookmarks'
import NewBookmarkForm from '../containers/NewBookmarkForm'

const Container = styled.div`
  max-width: 48rem;
  margin: auto;
`

const App = () =>
  <Container>
    <Header>
      <Route
        exact
        path="/"
        render={() => <LinkButton to="/add">Add Bookmark</LinkButton>}
      />
    </Header>
    <Switch>
      <Route exact path="/" component={AllBookmarks} />
      <Route path="/add" component={NewBookmarkForm} />
    </Switch>
  </Container>

export default App