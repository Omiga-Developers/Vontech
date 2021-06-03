import { useEffect, useState } from "react"
import styled from "styled-components"

const Navbar = ({ isDifferent }) => {
    const [width, setWidth] = useState(0);
    // const [scrollY, setScrollY] = useState(false);

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if(window.scrollY > 50) {
    //             setScrollY(true);
    //         } else setScrollY(false);
    //     });
    //     return () => {
    //         window.removeEventListener("scroll");
    //     };
    // }, []);

    useEffect(() => {
        setWidth(window.innerWidth);
        const listener = window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });

        return window.removeEventListener('resize', listener);
    }, [width])

    return (
        <Container style={{ backgroundColor: 'rgb(32,38,48)' }}>
        {/* <Container style={isDifferent ?  !scrollY ? { background: 'transparent' } : { backgroundColor: 'rgba(0,0,0,0.8)' } : !scrollY ? { backgroundImage: 'url(images/navbg.jpg)' } : { backgroundColor: 'rgba(0,0,0,0.8)' } }> */}
            <ContainerLeft>
                <img src="images/logo.png" alt="logo" />
            </ContainerLeft>
            <NavbarLinks>
                <ul>
                    <li><a href={isDifferent ? "/#services" : "#services"}>Services</a></li>
                    <li><a href={isDifferent ? "/#trust" : "#trust"}>About us</a></li>
                    <li><a href={isDifferent ? "/#projects" : "#projects"}>Projects</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href={isDifferent ? "/#contactUs" : "#contactUs"}>Contact us</a></li>
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

    @media screen and (max-width: 1200px) {
        padding: 0.6rem 6rem 0.6rem 3rem;
    }

    @media screen and (max-width: 650px) {
        padding: 1rem;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`

const ContainerLeft = styled.div `
    > img {
        float: left;
        height: 3.8vw;
        object-fit: contain;
    }

    @media screen and (max-width: 1200px) {
        > img {
            height: 3rem;
        }
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

    @media screen and (max-width: 1200px) {
        > ul li {
            padding: 0.6rem;
            font-size: 0.7rem;
        }
    }
`