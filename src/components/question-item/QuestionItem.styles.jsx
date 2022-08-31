import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const QuestionItemContainer = styled.div`
	border-radius: 50px;
	background-color: #e4e4e4;
	padding: 30px 60px;
	font-size: 20px;

	color: ${(props) => props.theme.primaryText};

	@media (max-width: 768px) {
		padding: 15px 30px;
		font-size: 16px;
	}
`;

export const QuestionLink = styled(Link)`
	color: #000;
	text-decoration: none;
`;
