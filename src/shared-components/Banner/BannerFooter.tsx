import styled from "styled-components"

const BannerFooter = () => {
    return (
        <Container>
            <div>
                <a href="https://instagram.com/vontech.co?utm_medium=copy_link">Instagram</a>
                |
                <a href="https://www.facebook.com/vontech.co/">Facebook</a>
                |
                <a href="https://www.linkedin.com/company/vontech-engineering-trading-pvt-ltd">Linkedin</a>
            </div>
            <div>
                <img src="images/rics.png" alt="rics-logo" />
                <img src="images/cabe.png" alt="cabe-logo" />
            </div>
        </Container>
    )
}

export default BannerFooter

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    display: flex;
    justify-content: space-between;
    padding: 0 3vw 2vw 6vw;
    color: white;

    > div:first-child {
        display: flex;
        align-items: flex-end;
    }

    > div:last-child {
        display: flex;
        flex-direction: column;
    }

    > div {
        > a {
            font-size: 1vw;
            color: white;
            padding: 0vw 1vw;
            text-decoration: none;
            font-family: Gilroy-Medium;
        }
    }
    
    > div {
        > img {
            width: 7vw;
            object-fit: contain;
        }
    }

    @media screen and (max-width: 950px) and (min-width: 768px) {
        padding: 0 1rem 1rem 2rem;

        > div {
            > img {
                width: 5rem;
            }

            > a {
                font-size: 0.8rem;
            }
        }
    }

    @media screen and (max-width: 768px) {
        padding: 0 1rem 1rem 0.62rem;

        > div {
            > img {
                display: none;
            }

            > a {
                font-size: 0.7rem;
            }
        }

        > div:last-child {
            font-size: 0.7rem;
            margin-top: 4rem;
        }
    }
`
