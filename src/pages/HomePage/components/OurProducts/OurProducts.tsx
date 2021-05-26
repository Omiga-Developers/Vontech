import styled from "styled-components"
import AngleCard from "./AngleCard"

const OurProducts = () => {
    return (
        <Container>
            <h2>Our products</h2>
            <div>
                <AngleCard 
                    image="images/concrete_repair.jpeg"
                    title="Cover block size"
                    unit="in mm"
                    dimension="20mm/25mm"
                />
                <AngleCard 
                    image="images/concrete_repair.jpeg"
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
    padding: 4vw;
    background-color: #44f;

    > div {
        display: flex;
        justify-content: space-between;
    }

    > h2 {
        color: white;
        margin-bottom: 3vw;
    }
`