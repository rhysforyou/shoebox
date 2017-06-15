// @flow
import React from 'react'
import styled from 'styled-components'
import AllBookmarks from '../containers/AllBookmarks'

const Container = styled.div`
  max-width: 48rem;
  margin: auto;
`

const Header = styled.header`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 24rem) {
    flex-direction: column;
  }
`

const Title = styled.h1`
  font-weight: 800;
  vertical-align: middle;
`

const Logo = styled.span`
  font-size: 3rem;
  position: relative;
  top: 0.2rem;
`

const Button = styled.a`
	display: inline-block;
	border-radius: 3px;
	padding: 0.5rem 0.8rem;
	background: transparent;
	color: #4990E2;
	border: 2px solid #4990E2;
  text-align: center;
  text-decoration: none;
  margin-top: 0.6rem;

  :hover {
    background: #4990E2;
    color: white;
  }
`

const App = () =>
  <Container>
    <Header>
      <Title>
        <Logo><span role="img" aria-label="logo">📥</span></Logo> Shoebox
      </Title>
      <Button href="/add">Add Bookmark</Button>
    </Header>
    <AllBookmarks />
  </Container>

export default App
