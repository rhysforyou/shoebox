// @flow
import React from 'react'
import styled from 'styled-components'
import { ConnectedTextField } from '../../containers/forms'
import { Button, SubmitButton } from '../Button'
import { Form, FormGroup, FormActions, Label } from '../forms'

const Container = styled.div`
  padding: 1rem;

  & > input {
    float: right;
  }
`
type Props = {
  draft: string,
  draftExists: boolean,
  onSubmit: (e: Event) => any,
  onCancel: (e: Event) => any
}

export const BookmarkForm = ({
  draft,
  draftExists,
  onSubmit,
  onCancel
}: Props) => {
  if (!draftExists) {
    return <span>Loading…</span>
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label htmlFor="site">Site</Label>
          <ConnectedTextField draft={draft} id="site" name="site" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <ConnectedTextField draft={draft} id="title" name="title" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="url">URL</Label>
          <ConnectedTextField draft={draft} id="url" name="url" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="image">Image</Label>
          <ConnectedTextField draft={draft} id="image" name="image" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <ConnectedTextField
            draft={draft}
            id="description"
            name="description"
          />
        </FormGroup>
        <FormActions>
          <Button onClick={onCancel}>Cancel</Button>
          <SubmitButton primary value="Add Bookmark" />
        </FormActions>
      </Form>
    </Container>
  )
}

export default BookmarkForm
