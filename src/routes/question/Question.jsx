import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
	QuestionContainer,
	Container,
	VideoTitle,
	Video,
} from './Question.styles';

import data from '../../data.json';

const Question = () => {
	const params = useParams();
	const [question, setQuestion] = useState('');

	const item = data.questions.filter(
		(question) => question.markdown_name === params.title,
	)[0];

	useEffect(() => {
		import(`../../templates/${params.title}.md`).then((res) => {
			fetch(res.default)
				.then((response) => response.text())
				.then((response) => setQuestion(response))
				.catch((err) => console.log(err));
		});
	}, [params.title]);

	return (
		<>
			<QuestionContainer>
				<Container>
					<Markdown>{question}</Markdown>
				</Container>
				<Container>
					<VideoTitle>Video Tutorial</VideoTitle>
					{item.video_path || item.video_path?.length !== 0 ? (
						<Video controls>
							<source src={item.video_path} type='video/mp4' />
							Sorry, your browser doesn't support embedded videos.
						</Video>
					) : (
						<p>No video found.</p>
					)}
				</Container>
			</QuestionContainer>
		</>
	);
};

export default Question;
