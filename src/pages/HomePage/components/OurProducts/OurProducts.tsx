import { Fade } from "react-awesome-reveal"
import styled from "styled-components"
import AngleCard from "./AngleCard"

declare type OurProductsProps = {
    width: number;
}

const OurProducts = ({ width } : OurProductsProps) => {
    return (
        <Container>
            <Fade direction="up" triggerOnce duration={1500}>
                <h2>Our products</h2>
            </Fade>

            <Fade direction="up" triggerOnce duration={2500}>
                <div>
                    <AngleCard 
                        image="images/IMG_4237.png"
                        title="Cover block"
                        unit="in mm"
                        dimension="20mm/25mm"
                        isMobile={width < 768 ? true : false}
                    />
                    <AngleCard 
                        image="images/IMG_4240.png"
                        title="Cover block"
                        unit="in mm"
                        dimension="20mm/25mm/40mm"
                        isMobile={width < 768 ? true : false}
                    />
                </div>
            </Fade>
        </Container>
    )
}

export default OurProducts

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }

    padding: 4vw;
    background-color: #1C4193;

    > div > div {
        display: flex;
        justify-content: space-between;
    }

    > div > h2 {
        font-family: Gilroy-Bold;
        font-size: 2.2vw;
        color: white;
        margin-bottom: 3vw;
    }

    @media screen and (max-width: 1200px) {
        > div > h2 {
            font-size: 2rem;
        }
    }

    @media screen and (max-width: 600px) {
        padding: 1.5rem;

        > div > h2 {
            margin-bottom: 1.5rem;
            font-size: 2rem;
            text-align: center;
        }
    }

    @media screen and (max-width: 768px) {        
        > div > div {
            flex-direction: column;
            align-items: center;
        }
    }
`