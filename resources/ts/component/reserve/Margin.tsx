import styled from 'styled-components'

const Margin = styled.span<{ top:string; right:string; bottom:string; left:string }>`
	display: inline-block;
	margin-top: ${({ top }) => (top ? top : `0`)};
	margin-right: ${({ right }) => (right ? right : `0`)};
	margin-bottom: ${({ bottom }) => (bottom ? bottom : `0`)};
	margin-left: ${({ left }) => (left ? left : `0`)};
`;

export default Margin