import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar sticky="top" expand="lg" className="bg-f lilita-one-regular" data-bs-theme="light">
            <Container fluid>
                <Navbar.Brand href="/home">Holy Sheep</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/wiki">Wiki</Nav.Link>
                        <Nav.Link href="/about">About us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
);
}

export default NavBar;