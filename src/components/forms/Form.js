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

  @media (max-width: 32rem) {
    display: flex;
    flex-direction: column;

    label {
      line-height: inherit;
      text-align: inherit;
    }

    input[type="text"] {
      margin: 0.4rem 0 1rem;
    }
  }
`
export default Form
