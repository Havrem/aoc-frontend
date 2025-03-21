import './App.css'
import { Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Snow from './Snowfall'
import Tree from './Tree'
import Chimes from './Chimes'

function App() {
  return (
    <Container className="main-container" fluid>
      <h1>Testar cicd</h1>
          <div className="position-relative w-100">
            <Tree className="svg-image-map" />
            <div className="position-absolute top-0 end-0 p-2 z-3">
              <Chimes />
            </div>
            <Snow />
          </div>
    </Container>
  );
}

export default App
