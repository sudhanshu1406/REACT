import { Container,Col,Row,Button } from 'react-bootstrap'
import './App.css'


function App() {

  return (
    <>
    <Container>
      <Row>
        <Col lg={4} md={4} sm={12} className='bg-primary text-white p-3'><h1>first column</h1></Col>
        <Col lg={4} md={4} sm={12} className='bg-danger text-white p-3'><h1>second column</h1></Col>
        <Col lg={4} md={4} sm={12} className='bg-success text-white p-3'><h1>third column</h1></Col>
      </Row>
      <Button variant='danger'>click me</Button>
    </Container>

    {/* <Container fluid>
      <h1>This is first container fluid</h1>
    </Container> */}
    </>
  )
}

export default App
