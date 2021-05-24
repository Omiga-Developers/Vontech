import styled from 'styled-components';
import Navbar from './shared-components/Navbar';
import TopbarContactUs from './shared-components/TopbarContactUs';

function App() {
  return (
    <Container>
      <TopbarContactUs />
      <Navbar />
    </Container>
  );
}

export default App;

const Container = styled.div `
`