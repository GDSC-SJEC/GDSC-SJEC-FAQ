import styled from 'styled-components';

export const NavigationContainer = styled.div`
	padding: 2rem 14rem;
	display: flex;
	justify-content: space-between;

	background-color: ${(props) => props.theme.primaryBackground};
	color: ${(props) => props.theme.primaryText};

	transition: all ease-in-out 200ms;

	@media (max-width: 1268px) {
		padding: 2rem 2rem;
	}
`;

export const Heading = styled.div`
	display: flex;
	align-items: center;
`;

export const Title = styled.div`
	font-size: 32px;
	font-weight: 600;

	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

export const CollegeTitle = styled.div`
	font-size: 18px;

	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

export const Logo = styled.img`
	width: 110px;
	height: 80px;
	transform: scale(1.2);
	margin-right: 20px;

	@media (max-width: 768px) {
		width: 40px;
		height: 20px;
		transform: scale(2);
	}
`;

export const DarkModeContainer = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const DarkmodeText = styled.div`
	font-size: 18px;
	margin-right: 14px;

	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

export const Switch = styled.label`
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;

	@media (max-width: 768px) {
		width: 40px;
		height: 24px;
	}
`;

export const Input = styled.input`
	opacity: 0;
	:checked {
		background-color: #2196f3;
	}
	:focus {
		box-shadow: 0 0 1px #2196f3;
	}
`;

export const Slider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: 0.4s;
	transition: 0.4s;
	border-radius: 34px;
	:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		@media (max-width: 768px) {
			height: 16px;
			width: 16px;
		}
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
		${Input}:checked + & {
			transform: translateX(26px);

			@media (max-width: 768px) {
				transform: translateX(16px);
			}
		}
	}
	${Input}:checked + & {
		background-color: #2196f3;
	}
`;
