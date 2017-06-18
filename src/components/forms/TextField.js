// @flow
import React from 'react'
import styled, { css } from 'styled-components'

type InputEvent = { target: HTMLInputElement } & Event

const TextField = styled.input.attrs({
  type: 'text'
})`
  color: #333;
  font-size: 1rem;
  border: 2px solid #eee;
  padding: 0.6rem;
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

const NormalizedTextField = ({
  onChange,
  ...props
}: {
  onChange: string => any
}) =>
  <TextField
    onChange={(e: InputEvent) => onChange(e.target.value)}
    {...props}
  />

export default NormalizedTextField
