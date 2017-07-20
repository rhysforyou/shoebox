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
    background: #e5f1ff;
    color: white;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  display: inline-block;
  color: #4990e2;
`

const SiteName = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-top: 0.2rem;
  display: inline-block;
  color: #999;
`

const Thumbnail = styled.img`
  min-height: 1rem;
  max-height: 5rem;
  width: 5rem;
  margin-right: 1rem;

  @media (max-width: 32rem) {
    max-width: 4rem;
  }
`

const Description = styled.div`
  color: #999;
  margin-top: 1rem;

  p {
    margin: 0 0 1rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

type Props = {
  title: string,
  url: string,
  site: ?string,
  description: ?string,
  image: ?string
}

export const BookmarkSummary = ({
  site,
  title,
  description,
  url,
  image
}: Props) =>
  <LinkedContainer href={url}>
    {image && <Thumbnail src={image} />}
    <Content>
      <Title>
        {title}
      </Title>
      {site &&
        <SiteName>
          {site}
        </SiteName>}
      {description &&
        <Description
          dangerouslySetInnerHTML={{ __html: marked(description) }}
        />}
    </Content>
  </LinkedContainer>

export default BookmarkSummary
