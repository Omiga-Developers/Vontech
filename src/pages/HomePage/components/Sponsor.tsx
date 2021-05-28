import styled from "styled-components"
import Marquee from "react-fast-marquee";

const Sponsor = () => {
    return (
        <Container>
            <Marquee>
                <img alt="sponsor" src="images/1.png" />
                <img alt="sponsor" src="images/2.png" />
                <img alt="sponsor" src="images/3.png" />
                <img alt="sponsor" src="images/4.png" />
                <img alt="sponsor" src="images/5.png" />
                <img alt="sponsor" src="images/6.png" />
                <img alt="sponsor" src="images/7.png" />
                {/* <img alt="sponsor" src="images/8.png" /> */}
            </Marquee>
        </Container>
    )
}

export default Sponsor

const Container = styled.div `
    overflow-x: scroll;
    padding: 1vw 0vw;
    background-color: white;

    ::-webkit-scrollbar {
        display: none;
    }

    img {
        /* width: 15vw;
        padding: 2vw 0vw;
        height: 8vw; */
    }
`