import styled, { css } from 'styled-components'

const TextField = styled.input.attrs({
  type: 'text'
})`
  color: #333;
  font-size: 1rem;
  border: 2px solid #ccc;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 3px;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-color: #4990E2;
  }

	${props =>
    props.block &&
    css`
			display: block;
			width: 100%;
	`}
`

export default TextField
