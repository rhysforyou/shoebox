// @flow
import React from "react"
import styled from "styled-components"
import DraftTextField from "../../containers/forms/DraftTextField"
import { Button, SubmitButton } from "../Button"
import { Form, FormGroup, FormActions, Label } from "../forms"

const Container = styled.div`
  padding: 1rem;

  & > input {
    float: right;
  }
`

const Title = styled.h2`
  margin: 0;
  padding: 0 0 1rem 8rem;
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
      <Title>Add Bookmark</Title>
      <Form onSubmit={onSubmit}>
        <FormGroup inline>
          <Label htmlFor="site">Site</Label>
          <DraftTextField draft={draft} id="site" />
        </FormGroup>
        <FormGroup inline>
          <Label htmlFor="title">Title</Label>
          <DraftTextField draft={draft} id="title" />
        </FormGroup>
        <FormGroup inline>
          <Label htmlFor="url">URL</Label>
          <DraftTextField draft={draft} id="url" />
        </FormGroup>
        <FormGroup inline>
          <Label htmlFor="image">Image</Label>
          <DraftTextField draft={draft} id="image" />
        </FormGroup>
        <FormGroup inline>
          <Label htmlFor="description">Description</Label>
          <DraftTextField draft={draft} id="description" />
        </FormGroup>
        <FormActions>
          {onCancel && <Button onClick={onCancel}>Cancel</Button>}
          <SubmitButton primary value="Add Bookmark" />
        </FormActions>
      </Form>
    </Container>
  )
}

export default BookmarkForm
