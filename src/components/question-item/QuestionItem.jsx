import { QuestionItemContainer, QuestionLink } from './QuestionItem.styles';

const QuestionItem = ({ children, title }) => {
	return (
		<>
			<QuestionItemContainer>
				<QuestionLink to={`/question/${title}`}>{children}</QuestionLink>
			</QuestionItemContainer>
		</>
	);
};

export default QuestionItem;
