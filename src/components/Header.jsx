import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="warning" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"> ghibli galeria</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">CASA</Nav.Link>
            <Nav.Link as={Link} to="/entities">TODOS GHLIBLIS</Nav.Link>
            <Nav.Link as={Link} to="/contact">CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;