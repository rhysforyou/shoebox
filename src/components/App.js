// @flow
import React from 'react'
import styled from 'styled-components'
import BookmarkList from './BookmarkList'

const BOOKMARKS = [
  {
    title: 'styled-components',
    description:
      '**Visual primitives for the component age.**\n\nUse the best bits of ES6 and CSS to style your apps without stress 💅',
    url: 'https://www.styled-components.com/',
    image: 'https://www.styled-components.com/static/atom.png'
  },
  {
    title: 'chjj/marked',
    description: 'marked - A markdown parser and compiler. Built for speed.',
    url: 'https://github.com/chjj/marked',
    image: 'https://avatars2.githubusercontent.com/u/470564?v=3&s=400'
  },
  {
    title: 'Jest · 🃏 Delightful JavaScript Testing',
    description: '🃏 Delightful JavaScript Testing',
    url: 'https://facebook.github.io/jest/index.html',
    image: 'https://facebook.github.io/jest/img/opengraph.png'
  },
  {
    title: 'Atom • A hackable text editor for the 21st Century',
    description:
      'At GitHub, we’re building the text editor we’ve always wanted: hackable to the core, but approachable on the first day without ever touching a config file. We can’t wait to see what you build with it.',
    url: 'https://atom.io/',
    image: 'http://og.github.com/atom-mark/atom-mark@1200x630.png'
  }
]

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
      <Title><Logo role="img" aria-label="logo">📥</Logo> Shoebox</Title>
      <Button href="/add">Add Bookmark</Button>
    </Header>
    <BookmarkList bookmarks={BOOKMARKS} />
  </Container>

export default App
