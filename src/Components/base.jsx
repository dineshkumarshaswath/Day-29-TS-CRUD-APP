import React from 'react'
import { Children } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Base({ children }) {

    return (

        <>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>

                    <Navbar.Brand href="/" >CRUD-APP </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                        </Nav>



                        <Nav className='dropdown'>
                            <NavDropdown title="Add" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/teachers">Teachers</NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavDropdown.Item href="/students">
                                    Students
                                </NavDropdown.Item>




                            </NavDropdown>
                            <NavDropdown title="List" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/teacherlist">Teachers</NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavDropdown.Item href="/studentlist">
                                    Students
                                </NavDropdown.Item>
                              </NavDropdown>





                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>



            <div>
                {children}

            </div>

        </>

    )
}
export default Base;