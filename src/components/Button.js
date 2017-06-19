// @flow
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

const sharedStyles = css`
	background: transparent;
	border-radius: 3px;
	border: 2px solid #4990E2;
	box-sizing: border-box;;
	color: #4990E2;
	cursor: pointer;
	display: inline-block;
	font-size: 1rem;
	padding: 0.5rem 0.8rem;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: #E5F1FF;
  }

	${props => props.primary && css`
			background: #4990E2;
			color: white;

			&:hover {
				background: #1B63B7;
				border-color: #1B63B7;
			}
	`}

	${props => props.block && css`
			display: block;
			width: 100%;
	`}

	${props => props.alignEnd && css`
			align-self: flex-end;
	`}
`

export const Button = styled.button`
	${sharedStyles}
`

export const LinkButton = styled(Link)`
${sharedStyles}
`

export const SubmitButton = styled.input.attrs({
  type: "submit"
})`
	${sharedStyles}
`

export default Button
