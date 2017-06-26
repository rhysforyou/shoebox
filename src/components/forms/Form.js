// @flow
import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 6rem 1fr;
  grid-gap: 1rem;

  input[type="text"] {
    width: 100%;
  }

  label {
    line-height: 42px;
    text-align: right;
  }
`
export default Form
