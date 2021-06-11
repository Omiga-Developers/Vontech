import styled from "styled-components"
import Marquee from "react-fast-marquee";

const Sponsor = () => {
    return (
        <Container>
            <Marquee>
                <img alt="sponsor" src="images/1.crop.png" />
                <img alt="sponsor" src="images/2.crop.png" />
                <img alt="sponsor" src="images/3.crop.png" />
                <img alt="sponsor" src="images/4.crop.png" />
                <img alt="sponsor" src="images/5.crop.png" />
                <img alt="sponsor" src="images/6.crop.png" />
                <img alt="sponsor" src="images/7.crop.png" />
                <img alt="sponsor" src="images/8.crop.png" />
            </Marquee>
        </Container>
    )
}

export default Sponsor

const Container = styled.div `
    overflow-x: scroll;
    padding: 1.5vw 0vw;
    background-color: white;

    ::-webkit-scrollbar {
        display: none;
    }

    img {
        /* width: 15vw;
        padding: 2vw 0vw; */
        height: 4vw;
        object-fit: contain;
    }

    @media screen and (max-width: 768px) {
        img {
            height: 5rem;
            width: 10rem;
        }
    }

    > div > div.marquee {
        min-width: 92%;
    }
`