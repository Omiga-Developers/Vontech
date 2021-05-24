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
    overflow-x: scroll;
    padding: 2vw 0vw;

    ::-webkit-scrollbar {
        display: none;
    }

    > img {
        object-fit: contain;
    }
`