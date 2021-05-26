import styled from "styled-components"
import AngleCard from "./AngleCard"

const OurProducts = () => {
    return (
        <Container>
            <h2>Our products</h2>
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

    > div {
        display: flex;
        justify-content: space-between;
    }

    > h2 {
        font-family: Gilroy-Bold;
        font-size: 2.2vw;
        color: white;
        margin-bottom: 3vw;
    }
`