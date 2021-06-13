import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components"

declare type ContactUsProps = {
    width: number;
}

const ContactUs = ({ width } : ContactUsProps) => {
    const [toggleCall, setToggleCall] = useState(false);
    const [toggleVisitUs, setToggleVisitUs] = useState(false);

    return (
        <Container id="contactUs">
            <Fade direction="up" triggerOnce duration={1500}>
                <h2>Get in touch with us now.</h2>
            </Fade>

            {width < 800 &&
                <Fade direction="up" triggerOnce duration={1500}>
                    <MobileParagraph>
                        Every engagement at Vontech starts with a
                        discovery call. We are a company that
                        meets your construction needs. Always.
                    </MobileParagraph>
                </Fade>
            }

            <Content>
                <div>
                    {
                        width > 800 &&
                        <Fade direction="up" triggerOnce duration={1500}>
                            <p>Every engagement at Vontech starts with a</p>
                            <p>discovery call. We are a company that</p>
                            <p>meets your construction needs. Always.</p>
                        </Fade>        
                    }
                    <Fade style={{ marginTop: '1.2rem' }} cascade direction="up" triggerOnce duration={2000}>
                        <ButtonContainer>
                            {
                                !toggleCall ? 
                                    <AngleButton 
                                        toggled={toggleCall} 
                                        onClick={() => setToggleCall(!toggleCall)} 
                                    >
                                        Call now
                                    </AngleButton>
                                :
                                    <AngleButton 
                                        toggled={toggleCall} 
                                        onClick={() => setToggleCall(!toggleCall)} 
                                    >
                                        +94 773398875 <br />+94 701864939
                                    </AngleButton>
                            }
                        </ButtonContainer>
                        <ButtonContainer>
                        {
                            !toggleVisitUs ? 
                                <AngleButton
                                    toggled={toggleVisitUs}
                                    onClick={() => setToggleVisitUs(!toggleVisitUs)} 
                                >
                                    Visit us
                                </AngleButton>
                            :
                                <AngleButton
                                    toggled={toggleVisitUs}
                                    onClick={() => setToggleVisitUs(!toggleVisitUs)} 
                                >
                                    215/E, Colombo road, <br /> Nagoda, Kandana
                                </AngleButton>
                        }
                        </ButtonContainer>
                    </Fade>
                </div>
                <MapContainer>
                    <Fade direction="up" triggerOnce duration={1500}>
                        <iframe
                            title="Location embed"
                            style={{ border:0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCKn4wpIguXCpZ6fI3-aZl9D2bMaMW0gTg
                                &q=215+Colombo+-+Kandy+Rd">
                        </iframe>
                    </Fade>
                </MapContainer>
            </Content>
        </Container>
    )
}

export default ContactUs

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    padding: 4vw;
    background-color: white;

    > div > h2 {
        color: #1C4193;
        font-family: Gilroy-Bold;
        font-size: 2.2vw;
    }

    @media screen and (max-width: 1200px) {
        > div > h2 {
            font-size: 2rem;
        }
    }

    @media screen and (max-width: 600px) {
        padding: 1.5rem;

        > div > h2 {
            margin-bottom: 1.5rem;
            font-size: 2rem;
            width: 100%;
            text-align: center;
        }
    }
`

const Content = styled.div `
    display: flex;
    justify-content: space-between;

    > div {
        flex: 1;
    }

    > div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    > div > div > p {
        color: #1C4193;
        font-family: Gilroy-Medium;
        line-height: 0.6rem;
        font-size: 1.2vw;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;

        > div:first-child {
            order: 2;
            width: 100%;
        }

        > div:last-child {
            width: 100%;
        }
    }
`

const ButtonContainer = styled.div `
    @media screen and (max-width: 800px) {
        justify-content: center;
        display: flex;
    }
`

const MapContainer = styled.div `
    display: flex;
    justify-content: flex-end;

    > div > iframe {
        width: 45vw;
        height: 22vw;
    }

    @media screen and (max-width: 800px) {
        width: 100%;

        > div {
            width: 100%;
        }

        > div > iframe {
            width: 100%;
            height: 20rem;
        }
    }
`

declare type AngleButtonProps = {
    toggled: boolean;
}

const AngleButton = styled.button<AngleButtonProps> `
    font-family: Gilroy-Medium;
    clip-path: polygon(0 0, 92% 0, 100% 46%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    background-color: #3E63EC;
    color: white;
    border: none;
    padding: 0 4vw 0 1vw;
    height: 5.6vw;
    width: 60%;
    text-align: left;
    font-size: 1.4vw;
    transition: 0.3s ease;

    :hover {
        cursor: pointer;
    }

    ${({ toggled }) => (
        toggled && `
            background-color: #262626;
            color: white;
        `
    )}

    @media screen and (max-width: 1200px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 800px) {
        width: 50%;
        height: 3rem;

        :first-child {
            margin: 1rem;
        }
    }
    
    @media screen and (max-width: 450px) {
        width: 100%;
    }
`

const MobileParagraph = styled.p `
    color: #1C4193;
    font-family: Gilroy-Medium;
    margin: 1rem 0;
`