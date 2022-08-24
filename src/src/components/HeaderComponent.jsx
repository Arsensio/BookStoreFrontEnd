import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FaSearch} from "react-icons/fa";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookname: '',
            username: localStorage.getItem("username"),
            role: localStorage.getItem("role")
        }
        this.deleteToken = this.deleteToken.bind(this);
    }

    onChangeSearch = (event) => {
        this.setState({bookname: event.target.value})
    }
    deleteToken = (event) => {
        return localStorage.clear();
    }


    render() {
        const getHref = (name) => {
            return "/search?name=" + name;
        }
        return (
            <Navbar b expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/"
                                  style={{paddingLeft: "100px", fontSize: "30px"}}><b>Flup.Kz</b></Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex" style={{paddingLeft: '70px'}}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="form-control"
                                aria-label="Search"
                                value={this.state.bookname} onChange={this.onChangeSearch}
                                style={{borderRadius: "30px"}}
                            />
                            <a href={getHref(this.state.bookname)} className="btn btn-check " style={{
                                backgroundColor: "#44b89d",
                                borderRadius: "50px",
                                paddingTop: "8px",
                                marginLeft: "5px"
                            }}><FaSearch style={{color: "white"}}/></a>
                        </Form>
                        <Nav
                            className="ml-auto my-2 my-lg-0"
                            style={{maxHeight: '100px', paddingRight: '70px'}}
                            navbarScroll
                        >
                            <Nav.Link href="/books">Books</Nav.Link>
                            <Nav.Link href="/authors">Authors</Nav.Link>
                            {
                                this.state.username !== null ? (
                                    <NavDropdown title={this.state.username} id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
                                        <NavDropdown.Item href="/orders">My orders</NavDropdown.Item>
                                        {
                                            this.state.role === "ADMIN" ? (
                                                <NavDropdown.Item href="/users">Users</NavDropdown.Item>
                                            ) : (<></>)
                                        }
                                        {
                                            this.state.role === "ADMIN" ? (
                                                <NavDropdown.Item href="/allOrders">Orders</NavDropdown.Item>
                                            ) : (<></>)
                                        }
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="/login" onClick={this.deleteToken}>
                                            Log out
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <Nav.Link href="/login">Login</Nav.Link>
                                )
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default HeaderComponent;