import QuestionItem from '../../components/question-item/QuestionItem';

import {
	SearchContainer,
	SearchText,
	SearchInput,
	SearchInputContainer,
	ExpandedSearch,
	FilteredQuestion,
	ErrorText,
	FAQContainer,
	FAQHeader,
	FAQQuestionContainer,
} from './Home.styles';

import data from '../../data.json';
import { useState } from 'react';

const Home = () => {
	const [searchValue, setSearchValue] = useState('');
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [filteredQuestions, setFilteredQuestions] = useState([]);

	const handleSearch = (e) => {
		setSearchValue(e.target.value);
		setDropdownVisible(true);
		if (e.target.value.length === 0) {
			setDropdownVisible(false);
		}
		let questions = data.questions.filter((question) =>
			question.title.toLowerCase().includes(e.target.value.toLowerCase()),
		);
		setFilteredQuestions(questions);
	};

	return (
		<>
			<SearchContainer>
				<SearchText>How can we help you?</SearchText>
				<SearchInputContainer>
					<SearchInput
						type='text'
						placeholder='Enter your query'
						value={searchValue}
						onChange={handleSearch}
					/>
					{dropdownVisible ? (
						<ExpandedSearch>
							{filteredQuestions.map((question) => (
								<FilteredQuestion to={question.link}>
									{question.title}
								</FilteredQuestion>
							))}
						</ExpandedSearch>
					) : (
						<></>
					)}
				</SearchInputContainer>

				<ErrorText>
					Couldn't find what you're looking for? Get in touch with us!
				</ErrorText>
			</SearchContainer>

			<FAQContainer>
				<FAQHeader>Frequently Asked Questions</FAQHeader>
				<FAQQuestionContainer>
					{data.questions.map((question, index) => {
						return (
							<QuestionItem key={index} title={question.markdown_name}>
								{question.title}
							</QuestionItem>
						);
					})}
				</FAQQuestionContainer>
			</FAQContainer>
		</>
	);
};

export default Home;
