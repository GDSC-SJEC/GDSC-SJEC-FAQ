import styled from 'styled-components';

export const QuestionContainer = styled.div`
	padding: 1rem 14rem;
	display: flex;
	background-color: ${(props) => props.theme.primaryBackground};
	color: ${(props) => props.theme.primaryText};
	gap: 40px;

	a {
		color: ${(props) => props.theme.primaryText};
		transition: all ease-in-out 200ms;
	}

	transition: all ease-in-out 200ms;

	@media (max-width: 1268px) {
		padding: 1rem 2rem;
		display: block;
	}
`;

export const Container = styled.div`
	width: 50%;

	@media (max-width: 1268px) {
		width: 100%;
	}
`;

export const VideoTitle = styled.div`
	padding-top: 30px;
	font-size: 18px;
	font-weight: bold;
`;

export const Video = styled.iframe`
	min-width: 100%;
	min-height: 400px;
	border: 0;
`;
