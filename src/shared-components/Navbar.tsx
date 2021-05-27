import styled from "styled-components"

const Navbar = () => {
    return (
        <Container>
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
    background-color: rgba(0, 0, 0, 1);
    padding: 1vw 8vw 1vw 5vw;
`

const ContainerLeft = styled.div `
    > img {
        float: left;
        height: 5vw;
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
        font-family: Gilroy-Medium;

        > a {
            text-decoration: none;
            color: white;
            transition: 0.2s ease;

            :hover {
                color: #3E63EC;
            }
        }
    }
`