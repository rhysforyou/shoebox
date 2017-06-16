import styled, { css } from 'styled-components'

const Button = styled.a`
	display: inline-block;
	border-radius: 3px;
	padding: 0.5rem 0.8rem;
	background: transparent;
	color: #4990E2;
	border: 2px solid #4990E2;
  text-align: center;
  text-decoration: none;
  margin-top: 0.6rem;

  &:hover {
    background: #4990E2;
    color: white;
  }

	${props =>
    props.primary &&
    css`
		background: #4990E2;
		color: white;

		&:hover {
			background: #1B63B7;
			border-color: #1B63B7;
		}
	`}
`

export default Button
