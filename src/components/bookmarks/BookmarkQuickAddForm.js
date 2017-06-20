// @flow
import React from 'react'
import styled from 'styled-components'
import { SubmitButton } from '../Button'
import { TextField } from '../forms'

const Form = styled.form`
  display: flex;
  flex-direction: row;
  padding: 1rem;

  input { margin-bottom: 0; }

  input[type="text"] {
    flex-grow: 1;
    margin-right: 1rem;
  }


  @media (max-width: 24rem) {
    flex-direction: column;

    input[type="text"] {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`

type Props = {
  url: string,
  onChange: (value: string) => any,
  onSubmit: (event: Event) => any
}

export const BookmarkQuickAddForm = ({ onChange, onSubmit, url }: Props) =>
  <Form onSubmit={onSubmit}>
    <TextField
      name="url"
      id="url"
      placeholder="Enter a URL to quickly add a bookmark…"
      value={url}
      onChange={onChange}
    />
    <SubmitButton primary value="Quick Add" />
  </Form>

export default BookmarkQuickAddForm
