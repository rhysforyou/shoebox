// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.header`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  grid-area: header;

  @media (max-width: 32rem) {
    flex-direction: column;
  }
`

const TitleLink = styled(Link)`
  font-size: 2rem;
  font-weight: 800;
  vertical-align: middle;
  color: black;
  text-decoration: none;
`

const Logo = styled.span`
  font-size: 3rem;
  position: relative;
  top: 0.2rem;
`

const Header = ({ children }: { children?: React$Element<*> }) =>
  <Container>
    <TitleLink to="/">
      <Logo><span role="img" aria-label="logo">📥</span></Logo> Shoebox
    </TitleLink>
    {children}
  </Container>

export default Header
