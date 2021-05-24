import styled from 'styled-components';
import { GlobalStyles } from './Global.style';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <HomePage />
    </Container>
  );
}

export default App;

const Container = styled.div `
`