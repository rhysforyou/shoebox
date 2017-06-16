// @flow
import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
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

const Header = ({ children }: { children?: React$Element<*> }) =>
  <Container>
    <Title>
      <Logo><span role="img" aria-label="logo">📥</span></Logo> Shoebox
    </Title>
    {children}
  </Container>

export default Header
