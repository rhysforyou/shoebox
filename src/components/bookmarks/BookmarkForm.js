// @flow
import React from 'react'
import styled from 'styled-components'
import DraftTextField from '../../containers/forms/DraftTextField'
import { SubmitButton } from '../Button'

const Container = styled.div`
  padding: 0 1rem;

  & > input {
    float: right;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  input {
    flex-grow: 1;
    width: 100%;
  }
`

const Label = styled.span`
  margin-bottom: 0.4rem;
  color: #666;
  flex-basis: 1
  display: inline-block;
  text-align: right;
`

type Props = {
  draft: string,
  draftExists: boolean,
  onSubmit: (e: Event) => any
}

const BookmarkForm = ({ draft, draftExists, onSubmit }: Props) =>
  <Container>
    <h2>Add Bookmark</h2>
    {draftExists &&
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Site</Label>
          <DraftTextField draft={draft} name="site" />
        </FormGroup>
        <FormGroup>
          <Label>Title</Label>
          <DraftTextField draft={draft} name="title" />
        </FormGroup>
        <FormGroup>
          <Label>URL</Label>
          <DraftTextField draft={draft} name="url" />
        </FormGroup>
        <FormGroup>
          <Label>Image</Label>
          <DraftTextField draft={draft} name="image" />
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <DraftTextField draft={draft} name="description" />
        </FormGroup>
        <SubmitButton alignEnd value="Add Bookmark" />
      </Form>}
  </Container>

export default BookmarkForm
