import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { useContext } from 'react';

import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Question from './routes/question/Question';

import './App.css';
import { themes } from './data/ThemeData';
import { ThemeContext } from './contexts/themeContext';

import GlobalStyle from './globalStyles';

function App() {
  const { theme: themeValue } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themes[themeValue]}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/question/:title" element={<Question />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
