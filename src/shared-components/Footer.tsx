import styled from "styled-components"

const Footer = () => {
    return (
        <Container>
            <div>
                <LeftContainer>
                    <div>
                        <p> © 2021 Vontech engineering & trading (PVT) LTD.</p>
                        <p>All rights reserved.</p>
                    </div>
                    <div>
                        <a style={{ paddingLeft: '0' }} href="https://google.lk">Instagram</a>
                        |
                        <a href="https://google.lk">Facebook</a>
                        |
                        <a href="https://google.lk">Linkedin</a>
                    </div>
                </LeftContainer>
                <RightContainer>
                    <div>
                        <img src="images/download (1).png" alt="vontech-logo" />
                    </div>
                    <div></div>
                    <div>
                        <img src="images/rics.png" alt="rics-logo" />
                        <img src="images/cabe.jpg" alt="cabe-logo" />
                    </div>
                </RightContainer>
            </div>
        </Container>
    )
}

export default Footer

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    height: 15vw;

    > div {
        display: flex;
        width: 90%;
        height: 50%;
        justify-content: space-between;
    }
`

const LeftContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    flex: 0.7;

    > div {
        > a {
            font-size: 1vw;
            color: white;
            padding: 0vw 1vw;
            text-decoration: none;
        }
    }
`

const RightContainer = styled.div `
    display: flex;
    flex: 0.3;
    justify-content: space-evenly;

    > div:first-child {
        > img {
            width: 9vw;
            object-fit: contain;
        }
    }

    > div:nth-child(2) {
        background-color: white;
        width: 1px;
    }

    > div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > img {
            width: 7vw;
            object-fit: contain;
        }
    }
`