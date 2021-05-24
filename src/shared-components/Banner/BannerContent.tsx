import styled from "styled-components"

const BannerContent = () => {
    return (
        <Container>
            <h1>Providing effective</h1>
            <h1>construction solutions.</h1>
            <button>Request a quote</button>
            <button>Contact us</button>
        </Container>
    )
}

export default BannerContent

const Container = styled.div `
    color: white;
    padding-left: 6vw;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1; */

    > h1 {
        font-size: 3vw;
    }

    > button {
        font-size: 1.2vw;
        padding: 0.2vw 0.5vw;
        margin: 1vw 2vw 0 0;
        clip-path: polygon(0 0, 92% 0, 100% 46%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);

        color: white;
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.05);
        transition: 0.2s ease;

        :first-child {
            background-color: #44f;
        }

        :hover {
            background-color: #44f;
            border-color: #44f;
        }
    }
`  