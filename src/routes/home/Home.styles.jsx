import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) => props.theme.secondaryBackground};
	color: ${(props) => props.theme.primaryText};
	padding: 4rem 0;
	position: relative;

	transition: all ease-in-out 200ms;

	@media (max-width: 768px) {
		padding: 4rem 2rem;
	}
`;

export const SearchText = styled.div`
	font-size: 32px;
	font-weight: bold;
	margin-bottom: 20px;

	@media (max-width: 768px) {
		font-size: 22px;
	}
`;

export const SearchInputContainer = styled.div`
	position: relative;
`;

export const SearchInput = styled.input`
	width: 600px;
	height: 50px;
	border-radius: 50px;
	border: 1px solid #ccc;
	padding: 10px 40px;
	font-size: 20px;

	&::placeholder {
		color: #696868;
		font-size: 20px;
	}

	@media (max-width: 768px) {
		width: 250px;
	}
`;

export const ExpandedSearch = styled.div`
	width: 600px;
	background-color: #fff;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);

	@media (max-width: 768px) {
		width: 250px;
	}
`;

export const FilteredQuestion = styled(Link)`
	display: block;
	color: #000;
	text-decoration: none;
	width: 590px;
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	padding: 10px 5px;

	&:hover {
		background-color: #f5f5f5;
	}

	@media (max-width: 768px) {
		width: 240px;
	}
`;

export const ErrorText = styled.div`
	font-size: 18px;
	margin-top: 20px;
	text-decoration: underline;

	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

export const FAQContainer = styled.div`
	color: ${(props) => props.theme.primaryText};
	padding: 4rem 14rem;

	transition: all ease-in-out 200ms;

	@media (max-width: 768px) {
		padding: 4rem 2rem;
	}
`;

export const FAQHeader = styled.div`
	font-size: 32px;
	font-weight: bold;
	margin-bottom: 20px;

	@media (max-width: 768px) {
		font-size: 22px;
	}
`;

export const FAQQuestionContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 30px;
`;
