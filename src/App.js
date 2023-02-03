import './styles/index.sass';
import { MainPage } from './components/index';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <h1 className='main__title'>Find Your Course</h1>
      <MainPage />
    </Container>
  );
}

export default App;
