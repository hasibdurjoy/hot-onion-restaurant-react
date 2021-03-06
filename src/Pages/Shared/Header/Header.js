import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="/home">
                    <img
                        alt=""
                        src="logo2.png"
                        width="150"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    {
                        user.email ? <Nav>
                            <Nav.Link as={Link} to="/shipping"><i className="fas fa-shopping-cart">0</i></Nav.Link>
                            <Nav.Link as={Link} to="/home" className="btn btn-light rounded-pill px-4 border me-2 ms-2">
                                {user.displayName}
                            </Nav.Link>
                            <img src={user.photoURL} alt="" className="rounded-circle ms-2 me-5" height="45px" />
                            <Nav.Link onClick={logOut} as={Link} to="/home" className="btn btn-danger rounded-pill text-light px-4">
                                Logout
                            </Nav.Link>
                        </Nav>
                            :
                            <Nav>
                                <Nav.Link as={Link} to="/shipping"><i className="fas fa-shopping-cart"></i></Nav.Link>
                                <Nav.Link as={Link} to="/login" className="btn btn-light rounded-pill px-4 border me-2 ms-2">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register" className="btn btn-danger rounded-pill text-light px-4">
                                    Sign up
                                </Nav.Link>
                            </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;