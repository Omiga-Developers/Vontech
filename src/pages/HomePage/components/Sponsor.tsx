import styled from "styled-components"

const Sponsor = () => {
    return (
        <Container>
            <img alt="sponsor" src="images/slide.png" />
        </Container>
    )
}

export default Sponsor

const Container = styled.div `
    > img {
        object-fit: contain;
    }
`