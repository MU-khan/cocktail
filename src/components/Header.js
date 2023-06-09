import {Container, Nav, Navbar} from 'react-bootstrap';

function Header() {
  return (
    <header>
        <Navbar className='py-3 fixed-top' collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>                        
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    </header>
  )
}

export default Header