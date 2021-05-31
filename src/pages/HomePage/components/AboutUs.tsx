import { Fade } from "react-awesome-reveal"
import styled from "styled-components"

const AboutUs = () => {
    return (
        <Container id="aboutUs">
            <Fade direction="up" triggerOnce duration={1500}>
                <div>
                    <div style={{ flex: 0.25 }}>
                        <img style={{ marginBottom: '0.8vw' }} src="images/rics-blue.png" alt="rics-logo" />
                        <img src="images/cabe.png" alt="cabe-logo" />
                    </div>
                    <div style={{ flex: 0.35}}>
                        <p>
                            Vontech is with you at every step in the
                            construction of your project. We aid in securing
                            bank loans and undertake the design and
                            creation of your building. We also offer
                            management and maintenance.
                        </p>
                        <p>
                            Our team brings specialist knowledge, fresh
                            thinking and over 25 years of experience.
                        </p>
                    </div>
                    <div style={{ flex: 0.35}}>
                        <p>
                            We provide vital help in coordinating with local
                            authorities for water, electricity & telephone
                            connections etc. At Vontech, we place
                            importance on sustainable living.
                        </p>
                        <p>
                            Hence, we provide sustainability options, such as
                            solar power, etc.
                        </p>
                    </div>
                </div>
            </Fade>
        </Container>
    )
}

export default AboutUs

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    display: flex;
    color: white;
    background-color: #1C4193;
    padding: 1vw 4vw 2vw 1vw;

    p {
        font-size: 1.1vw;
        font-family: Gilroy-Medium;
        width: 25.2vw;
    }

    > div {
        flex: 1;
    }

    > div > div {
        display: flex;
        justify-content: space-around;
    }

    > div > div > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1vw;

        > img {
            width: 11vw;
            object-fit: contain;
        }
    }
`