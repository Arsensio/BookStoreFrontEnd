import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"style={{paddingLeft:"30px",fontSize:"30px"}}><b>Flup.Kz</b></Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">
                    <Form action="books/search" className="d-flex" style={{paddingLeft:'50px'}}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="form-control"
                            aria-label="Search"
                        />
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Form>
                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px',paddingRight:'70px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/books">Books</Nav.Link>
                        <Nav.Link href="/authors">Authors</Nav.Link>
                        <NavDropdown title="User" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
                            <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Log out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;