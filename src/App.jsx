import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Snow from './Snowfall'
import Tree from './Tree'
import Chimes from './Chimes'

function App() {
  return (
    <Container className='main-container' fluid>
      <Row >
        <Col xs={3} className='notes-container'>
          <Chimes></Chimes>
        </Col>
        <Col xs={9}>
          <Tree className='svg-image-map'></Tree>
          <Snow></Snow>
        </Col>
      </Row>
    </Container>
  );
}

export default App
