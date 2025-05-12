import logo from './logo.svg';
import './App.css';
import Header from './Header';
import About from './About';
import Test from './Test';
import { Container, Row,Col } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { blog } from './Data/blog';
// ✅ CORRECT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Practice from './Practice';


function App() {
  // let name="shravan"
  // let status=true


let testName={
  name:"shravan",
  class:"ramakunja"
}




let myname={
  name:"shravan",
  last:"ramakunja"
}

  let headerinfo={
phonenummber:'6363',
email:'email.com'
  }
  return (
   
//     <div className="App">
//   <h1>{name}</h1>
//   {(status)?
//   <div style={{color:"red"}}>welcome to the js</div>
// :"it is false"}
//   </div>
<div className="main">hello
  <FontAwesomeIcon icon={faSearchengin}/>
  <Test myname={myname}>
    <h1>fuck this worldd off</h1>
  </Test>
<Header headerinfo={headerinfo} cname="shrvan"/> 
{/* <Container fluid>
<Container>
 
  <Row>
  <Col className='col-12 text-center py-4'>
  <h1>Our course</h1>
  </Col>
   </Row>
   <Row>
    <Col lg="3" md="6">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col classname="lg=3 md=6">
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col lg="3" md="6">
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
    <Col lg="3" md="6">
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
   </Row>
</Container>
</Container> */}
<Container>
  <Row>
    {blog.map((v,i)=>{
      return(
<ProductItems pitems={v} key={i}/>
      )
    })}

  </Row>
</Container>
<h1>hello world</h1>
<About name="shravan"/>

{/* <div className='card'>
<Card/>
<Card/>
<Card/>

</div> */}
<Practice practicename={testName} lastname="shravan"/>

</div>
);
}

export default App;


// function Card(){
//   return(
//     <div className='carditem'>hello world</div>
//   )
// }

function ProductItems({pitems,key}){
  return(
   <div className="col-lg-3 mb-4">
 <Card >
      <Card.Body>
        <Card.Title>{pitems.title}</Card.Title>
        <Card.Text>
         {pitems.body}
        </Card.Text>
        <Button variant="primary">Go somewhere{pitems.id}</Button>
      </Card.Body>
    </Card>
   </div>
  )

}