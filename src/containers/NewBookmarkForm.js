import React from 'react'
import TextField from '../components/TextField'
import { SubmitButton } from '../components/Button'

const NewBookmarkForm = () =>
  <div>
    <h2>Add Bookmark</h2>
    <form>
      <TextField placeholder="Site" />
      <TextField placeholder="Title" />
      <TextField placeholder="URL" />
      <TextField placeholder="Description" />
      <TextField placeholder="Image" />
      <SubmitButton />
    </form>
  </div>

export default NewBookmarkForm
