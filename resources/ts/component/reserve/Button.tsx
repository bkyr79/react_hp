import React from 'react'
import styled from 'styled-components'

const Button = styled.button<{ isDisabled: string; size: {fontSize: string} }>`
	background-color: ${({ theme }) => (theme && theme.background) || "lightgray"};
	border: none;
	border-radius: 0.6vmin;
	cursor: ${({ isDisabled }) => (isDisabled ? "cursor" : "pointer")};
	color: ${({ theme }) => (theme && theme.color) || "#333333"};
	font-size: ${({ size }) => (size && size.fontSize) || "1em"};
	outline: none;
	opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
	padding: ${({ size }) => (size && size.fontSize) || "1em 2em"};
	pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
	user-select: none;
`;

export default Button