import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../contexts/themeContext';

import GDSCLogo from '../../assets/logo.png';

import {
	NavigationContainer,
	Heading,
	Title,
	CollegeTitle,
	Logo,
	DarkModeContainer,
	DarkmodeText,
	Switch,
	Input,
	Slider,
} from './Navigation.styles.jsx';

const Navigation = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const changeTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<>
			<NavigationContainer>
				<Heading>
					<Logo src={GDSCLogo} alt='GDSC' className='logo' />
					<div>
						<Title>Google Developer Student Clubs</Title>
						<CollegeTitle>
							St Joseph Engineering College, Mangaluru
						</CollegeTitle>
					</div>
				</Heading>
				<DarkModeContainer>
					<DarkmodeText>Dark Mode</DarkmodeText>
					<Switch>
						<Input type='checkbox' value={theme} onChange={changeTheme} />
						<Slider></Slider>
					</Switch>
				</DarkModeContainer>
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
