import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import {
  TextField,
  Form,
  Label,
  FormGroup,
  FormActions
} from "../components/forms"
import { Button, SubmitButton } from "../components/Button"

storiesOf("TextField", module)
  .add("with the default style", () => (
    <TextField onChange={action("change")} />
  ))
  .add("with the block style", () => (
    <TextField onChange={action("change")} block />
  ))
  .add("with value", () => (
    <TextField onChange={action("change")} value="A value" />
  ))
  .add("with placeholder", () => (
    <TextField onChange={action("change")} placeholder="A placeholder" />
  ))

storiesOf("Form")
  .add("with the default appearance", () => (
    <Form
      onSubmit={e => {
        e.preventDefault()
        action("submitted")(e)
      }}
    >
      <FormGroup>
        <Label htmlFor="one">Text Field</Label>
        <TextField id="ome" placeholder="Placeholder" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="twp">Text Field</Label>
        <TextField id="twp" placeholder="Placeholder" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="three">Text Field</Label>
        <TextField id="three" placeholder="Placeholder" />
      </FormGroup>
      <FormActions>
        <Button>Cancel</Button>
        <SubmitButton primary value="Submit" />
      </FormActions>
    </Form>
  ))
  .add("with the inline style", () => (
    <Form
      onSubmit={e => {
        e.preventDefault()
        action("submitted")(e)
      }}
    >
      <FormGroup inline>
        <Label htmlFor="one">Text Field</Label>
        <TextField id="ome" placeholder="Placeholder" />
      </FormGroup>
      <FormGroup inline>
        <Label htmlFor="twp">Text Field With a Long Label</Label>
        <TextField id="twp" placeholder="Placeholder" />
      </FormGroup>
      <FormGroup inline>
        <Label htmlFor="three">Text Field</Label>
        <TextField id="three" placeholder="Placeholder" />
      </FormGroup>
      <FormActions>
        <Button>Cancel</Button>
        <SubmitButton primary value="Submit" />
      </FormActions>
    </Form>
  ))
