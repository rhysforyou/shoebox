// @flow
import styled, { css } from "styled-components"

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  input {
    flex-grow: 1;
    width: 100%;
  }

  ${props => props.inline && css`
    flex-direction: row;

    label {
      width: 8rem;
      margin-right: 1rem;
    }
  `}
`

export default FormGroup
