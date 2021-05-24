import React from "react"
import styled from "styled-components"

const Navbar = () => {
    return (
        <Container>
            <ContainerLeft>
                <img src="images/jatlog-241x128-46.png" alt="logo" />
            </ContainerLeft>
            <NavbarLinks>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About us</li>
                    <li>Projects</li>
                    <li>Careers</li>
                    <li>Contact us</li>
                </ul>
            </NavbarLinks>
        </Container>
    )
}

export default Navbar

const Container = styled.div `
    padding: 2.5vw 8vw 1vw 3vw;
`

const ContainerLeft = styled.div `
    > img {
        float: left;
        height: 3vw;
        object-fit: contain;
    }
`

const NavbarLinks = styled.ul `
    float: right;

    > ul li {
        display: inline-block;
        padding: 1vw;
        font-size: 1vw;
    }
`