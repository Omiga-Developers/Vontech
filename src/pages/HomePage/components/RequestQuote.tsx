import styled from "styled-components"

const RequestQuote = () => {
    return (
        <Container>
            <h2>Or request a quote</h2>
        </Container>
    )
}

export default RequestQuote

const Container = styled.div `
    padding: 4vw;
    background-color: #44f;

    > h2 {
        color: white;
    }
`