import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import '../style/registerlist.css';
export default props => {
return (
<Navbar bg="primary" variant="dark" className="Header">
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="http://localhost:3000/productlist">Products</Nav.Link>
      <Nav.Link href="#">Category</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
    <ButtonToolbar>
      <Button variant="primary">Welcome</Button>
    </ButtonToolbar>
</Navbar>
     )
};