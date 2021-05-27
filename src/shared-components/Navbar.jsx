import { useEffect, useState } from "react"
import styled from "styled-components"

const Navbar = () => {
    const [scrollY, setScrollY] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                setScrollY(true);
            } else setScrollY(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <Container style={!scrollY ? { backgroundImage: 'url(images/navbg.jpg)' } : { backgroundColor: 'rgba(0,0,0,0.8)' } }>
            <ContainerLeft>
                <img src="images/logo.png" alt="logo" />
            </ContainerLeft>
            <NavbarLinks>
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#trust">About us</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#contactUs">Contact us</a></li>
                </ul>
            </NavbarLinks>
        </Container>
    )
}

export default Navbar

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 999;
    background-size: cover;
    padding: 1vw 8vw 1vw 5vw;
`

const ContainerLeft = styled.div `
    > img {
        float: left;
        height: 4vw;
        object-fit: contain;
    }
`

const NavbarLinks = styled.ul `
    float: right;

    > ul li {
        color: white;
        display: inline-block;
        padding: 1vw;
        font-size: 1vw;
        

        > a {
            text-decoration: none;
            color: white;
            transition: 0.2s ease;
            font-family: Gilroy-Medium;

            :hover {
                color: #3E63EC;
            }
        }
    }
`