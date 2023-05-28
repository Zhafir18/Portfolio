import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Navbars() {
  return (
    <BrowserRouter>
      <Navbar className="navbar" sticky="top">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="nav justify-content-end mt-3 me-5">
            <Link to="#" className="link me-5">
              Home
            </Link>
            <Link to="#About" className="link me-5">
              About
            </Link>
            <Link to="#Project" className="link me-5">
              Project
            </Link>
            <Link to="#Contact" className="link me-5">
              Get in Touch
            </Link>
            <img src="/Zhafir-Logo.png" width="50" height="50" className="d-inline-block align-top" alt="React Bootstrap logo" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
  );
}

export default Navbars;
