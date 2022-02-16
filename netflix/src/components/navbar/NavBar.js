import { Navbar, Container, Nav} from "react-bootstrap"

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Movies</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/FavList">Favorites</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;

