import styled from "styled-components"

declare type FooterPros = {
    width: number;
}

const Footer = ({ width } : FooterPros) => {
    return width > 700 ?
        <Container> 
            <div>
                <LeftContainer>
                    <div>
                        <p> © 2021 Vontech engineering & trading (PVT) LTD.</p>
                        <p>All rights reserved.</p>
                    </div>
                    <div>
                        <a style={{ paddingLeft: '0' }} href="https://instagram.com/vontech.co?utm_medium=copy_link">Instagram</a>
                        |
                        <a href="https://www.facebook.com/vontech.co/">Facebook</a>
                        |
                        <a href="https://www.linkedin.com/company/vontech-engineering-trading-pvt-ltd">Linkedin</a>
                    </div>
                </LeftContainer>
                <RightContainer>
                    <div>
                        <img src="images/logo.png" alt="vontech-logo" />
                    </div>
                    <div></div>
                    <div>
                        <img src="images/rics-grey.png" alt="rics-logo" />
                        <img src="images/cabe.png" alt="cabe-logo" />
                    </div>
                </RightContainer>
            </div>
        </Container>
        :
        <MobileContainer>
            <div>
                <a style={{ paddingLeft: '0' }} href="https://instagram.com/vontech.co?utm_medium=copy_link">Instagram</a>
                |
                <a href="https://www.facebook.com/vontech.co/">Facebook</a>
                |
                <a href="https://www.linkedin.com/company/vontech-engineering-trading-pvt-ltd">Linkedin</a>
            </div>

            <div>
                <div>
                    <img style={{ width: '15rem' }} src="images/logo.png" alt="vontech-logo" />
                </div>
                <div>
                    <img src="images/cabe.png" alt="cabe-logo" />
                    <img src="images/rics-grey.png" alt="rics-logo" />
                </div>
            </div>
            <div>
                <p> © 2021 Vontech engineering & trading (PVT) LTD.</p>
                <p>All rights reserved.</p>
            </div>
        </MobileContainer>
}

export default Footer

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #262626;
    padding: 2vw;

    > div {
        display: flex;
        width: 90%;
        height: 50%;
        justify-content: space-between;
    }

    @media screen and (max-width: 1200px) {
        padding: 2rem;
    }
`

const LeftContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    flex: 0.7;

    > div {
        > p {
            font-family: Gilroy-Medium;
            font-size: 1vw;
        }

        > a {
            font-family: Gilroy-Medium;
            font-size: 1vw;
            color: white;
            padding: 0vw 1vw;
            text-decoration: none;
        }
    }

    @media screen and (max-width: 1200px) {
        > div > p {
            font-size: 1rem;
        }

        > div > a {
            font-size: 0.8rem;
            padding: 0 0.8rem;
        }
    }
`

const RightContainer = styled.div `
    display: flex;
    flex: 0.3;
    justify-content: space-evenly;

    > div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        > img {
            width: 14vw;
            object-fit: contain;
        }
    }

    > div:nth-child(2) {
        /* background-color: white; */
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

const MobileContainer = styled.div `
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    justify-content: space-between;
    height: 20rem;
    padding: 2rem;

    p {
        font-size: 0.8rem;
        font-family: Gilroy-Medium;
        text-align: center;
    }

    > div > a {
        color: white;
        font-size: 0.8rem;
        padding: 0 0.8rem;
        text-decoration: none;
        font-family: Gilroy-Medium;
    }

    > div:nth-child(2) {
        display: flex;
        flex-direction: column;

        > div {
            flex: 1;
            display: flex;
            justify-content: space-around;
        }
    }

    img {
        width: 6rem;
        object-fit: contain;
    }
`
