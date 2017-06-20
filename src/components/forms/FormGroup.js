// @flow
import styled, { css } from 'styled-components'

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  input {
    flex-grow: 1;
    width: 100%;
  }

  ${props =>
    props.inline &&
    css`
    @media (min-width: 24rem) {
      flex-direction: row;

      label {
        width: 10rem;
        margin-right: 1rem;
      }
    `}
  }
`

export default FormGroup
