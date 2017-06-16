// @flow
import React from 'react'
import styled from 'styled-components'
import DraftTextField from '../containers/DraftTextField'
import { SubmitButton } from './Button'

const Container = styled.div`
  padding: 0 1rem;
`

type Props = {
  draft: string,
  draftExists: boolean,
  commitDraft: () => any
}

const BookmarkForm = ({ draft, draftExists, commitDraft }: Props) =>
  <Container>
    <h2>Add Bookmark</h2>
    {draftExists &&
      <form
        onSubmit={e => {
          e.preventDefault()
          commitDraft()
        }}
      >
        <DraftTextField draft={draft} placeholder="Site" name="site" />
        <DraftTextField draft={draft} placeholder="Title" name="title" />
        <DraftTextField draft={draft} placeholder="URL" name="url" />
        <DraftTextField
          draft={draft}
          placeholder="Description"
          name="description"
        />
        <DraftTextField draft={draft} placeholder="Image" name="image" />
        <SubmitButton />
      </form>}
  </Container>

export default BookmarkForm
