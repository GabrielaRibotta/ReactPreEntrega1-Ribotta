// Styles
import './NavBar.css'

//Components
import CartWidget from './cartWidget/CartWidget.js'

// Components Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <nav>
            <Navbar variant="light" expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand className="brandLogo"><i className="fa-solid fa-book"></i> Byblos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Nosotros</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Ficción</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Académicos
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Infantiles</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Ver todos
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <CartWidget cantidad ="3" />
        </nav>
    );
}

export default NavBar;