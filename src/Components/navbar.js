import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'; // You can put section styling here

function CustomNavbar() {
  return (
    <>
      {/* <Navbar bg="primary" data-bs-theme="dark" expand="lg" fixed="top"> */}
      {/* <Navbar id="main-navbar" bg="primary" data-bs-theme="dark" expand="lg" fixed="top"> */}
      <Navbar id="main-navbar" bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          {/* Toggle for mobile view */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="custom-nav mx-auto d-flex justify-content-center gap-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              {/* <Nav.Link href="#resume">Resume</Nav.Link> */}
              <Nav.Link href="#projects">Projects</Nav.Link>
              {/* <Nav.Link href="#teaching">Teaching</Nav.Link> */}
              {/* <Nav.Link href="#development">Development</Nav.Link> */}
              <Nav.Link href="#consulting">Consulting</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#book">Book Session</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
