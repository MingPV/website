
import { Nav, Navbar, Container } from 'react-bootstrap'

function NavbarHome() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="/src/images/cat2.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/Projects">Projects</Nav.Link>
                        <Nav.Link href="/Experience">Experience</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                        <Nav.Link href="/Test">Test</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarHome;