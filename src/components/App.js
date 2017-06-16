// @flow
import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import AllBookmarks from '../containers/AllBookmarks'

const Container = styled.div`
  max-width: 48rem;
  margin: auto;
`

const App = () =>
  <Container>
    <Header />
    <AllBookmarks />
  </Container>

export default App
