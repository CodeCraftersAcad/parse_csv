import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer>
            <Container>
                <p className='text-center'>Built By: <a href='http://www.parttimedevs.com' target={"_blank"} rel="noopener noreferrer">Part Time Devs</a></p>
            </Container>
        </footer>
    )
}
