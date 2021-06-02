import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal"
import styled from "styled-components"

const AboutUs = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        const listener = window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
        console.log(width);
        return window.removeEventListener('resize', listener);
    }, [width])

    return (
        <Container id="aboutUs">
            <Fade direction="left" triggerOnce duration={1500}>
                <h2>About us</h2>
            </Fade>

            <Fade direction="up" triggerOnce duration={1500}>
                <div>
                    <div style={{ flex: 0.25 }}>
                        <img style={{ marginBottom: '0.8vw' }} src="images/rics-grey.png" alt="rics-logo" />
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
                        {width < 600 && <br />}
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
                        {width < 600 && <br />}
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
    flex-direction: column;
    background-color: #282828;
    padding: 1vw 4vw 2vw 1vw;

    > div > h2 {
        padding: 1vw;
        font-family: Gilroy-Bold;
        display: flex;
        font-size: 2.2vw;
        justify-content: center;
    }

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

    @media screen and (max-width: 1200px) {
        > div > h2 {
            font-size: 2rem;
        }

        p {
            font-size: 0.8rem;
            width: 100%;
        }

        > div > div > div {
            > img {
                width: 7rem;
            }
        }
    }

    @media screen and (max-width: 600px) {
        p {
            font-size: 1.1rem;
            width: 80%;
        }

        > div > div {
            flex-direction: column;
        }

        > div > div > div:first-child {
            order: 3;
            flex-direction: row;
            justify-content: center;

            > img {
                margin: 1rem;
            }
        }

        > div > div > div:nth-child(2) {
            order: 1;
        }

        > div > div > div:last-child {
            order: 2;
        }
    }
`