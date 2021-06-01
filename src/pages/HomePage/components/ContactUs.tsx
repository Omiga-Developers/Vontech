import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components"

declare type AngleButtonProps = {
    toggled?: boolean;
}

const ContactUs = () => {
    const [toggleCall, setToggleCall] = useState<boolean>(false);
    const [toggleVisitUs, setToggleVisitUs] = useState<boolean>(false);

    return (
        <Container id="contactUs">
            <Fade direction="left" triggerOnce duration={1500}>
                <h2>Contact us</h2>
            </Fade>

            <div>
                <div>
                    <Fade cascade direction="up" triggerOnce duration={2000}>
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
                    <Fade direction="right" triggerOnce duration={1500}>
                        <iframe
                            title="Location embed"
                            width="580"
                            height="300"
                            style={{ border:0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCKn4wpIguXCpZ6fI3-aZl9D2bMaMW0gTg
                                &q=215+Colombo+-+Kandy+Rd">
                        </iframe>
                    </Fade>
                </MapContainer>
            </div>
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

    > div {
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
    }
`

const ButtonContainer = styled.div `
`

const MapContainer = styled.div `
    display: flex;
    justify-content: flex-end;
`

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
`