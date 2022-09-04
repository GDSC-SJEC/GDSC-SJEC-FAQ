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
					{item.video_url || item.video_url?.length !== 0 ? (
						<Video
							src={item.video_url}
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></Video>
					) : (
						<p>No video found.</p>
					)}
				</Container>
			</QuestionContainer>
		</>
	);
};

export default Question;
