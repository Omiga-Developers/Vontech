import styled from 'styled-components';
import { GlobalStyles } from './Global.style';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Router>
        <HomePage />
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div `
`