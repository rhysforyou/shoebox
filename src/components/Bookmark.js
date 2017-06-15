// @flow
import React from 'react'
import styled from 'styled-components'
import marked from 'marked'

const LinkedContainer = styled.a`
  padding: 1rem;
  display: block;
  text-decoration: none;
  border-radius: 3px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 48rem) {
    border-radius: 0;
  }

  &:hover {
    background: #E5F1FF;
    color: white;
  }
`

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1rem;
  display: inline-block;
  color: #4990E2;
  text-decoration: none;
`

const Thumbnail = styled.img`
  max-height: 5rem;
  max-width: 5rem;
  margin-right: 1rem;

  @media (max-width: 24rem) {
    max-width: 4rem;
  }
`

const Description = styled.div`
  color: #999;

  p {
    margin: 0 0 1rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

type Props = {
  title: string,
  description: string,
  url: string,
  image?: string
}

const Bookmark = ({ title, description, url, image }: Props) =>
  <LinkedContainer href={url}>
    {image && <Thumbnail src={image} />}
    <div>
      <Title>{title}</Title>
      <Description dangerouslySetInnerHTML={{ __html: marked(description) }} />
    </div>
  </LinkedContainer>

export default Bookmark
