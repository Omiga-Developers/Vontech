import { Fade } from "react-awesome-reveal"
import styled from "styled-components"
import AngleCard from "./AngleCard"

const OurProducts = () => {
    return (
        <Container>
            <Fade direction="up" triggerOnce duration={1500}>
                <h2>Our products</h2>
            </Fade>

            <Fade direction="left" triggerOnce duration={2500}>
                <div>
                    <AngleCard 
                        image="images/block.png"
                        title="Cover block size"
                        unit="in mm"
                        dimension="20mm/25mm"
                    />
                    <AngleCard 
                        image="images/block.png"
                        title="Cover block size"
                        unit="in mm"
                        dimension="20mm/25mm/40mm"
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
`