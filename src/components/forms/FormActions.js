import styled from 'styled-components'

export const FormActions = styled.div`
  display: flex;
  flex-direction: row;
  grid-column: 2 / 3;

  button, input[type="submit"] {
    margin-left: 1rem;

    &:first-child {
      margin-left: 0;
    }
  }

  @media (max-width: 32rem) {
    flex-direction: column-reverse;

    button, input[type="submit"] {
      margin-left: 0;
      margin-bottom: 1rem;

      &:first-child {
        margin-bottom: 0;
      }
    }
  }
`

export default FormActions
