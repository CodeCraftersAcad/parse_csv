import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'
import './Header.css'
import logo from '../../images/parser_logo.png'
export default function Header() {
    return (
        <Navbar>
            <Container>
                <Link to="/" className='nav-link'>
                    <img src={logo} alt={"Particose Logo"} id="nav-logo" />
                    Particose
                </Link>
                <Link to="/parser" className='nav-link'>Parser</Link>
            </Container>
        </Navbar>
    )
}
