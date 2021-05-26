import { useState } from "react";
import styled from "styled-components"

declare type AngleButtonProps = {
    toggled?: boolean;
}

const ContactUs = () => {
    const [toggleCall, setToggleCall] = useState<boolean>(false);
    const [toggleVisitUs, setToggleVisitUs] = useState<boolean>(false);

    return (
        <Container>
            <h2>Contact us</h2>
            <div>
                <div>
                    <ButtonContainer>
                        {
                            !toggleCall ? 
                                <AngleButton 
                                    toggled={toggleCall} 
                                    onClick={() => setToggleCall(!toggleCall)} 
                                    // onMouseEnter={() => setToggleCall(!toggleCall)}
                                >
                                    Call now
                                </AngleButton>
                            :
                                <AngleButton 
                                    toggled={toggleCall} 
                                    onClick={() => setToggleCall(!toggleCall)} 
                                    // onMouseEnter={() => setToggleCall(!toggleCall)}
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
                                // onMouseEnter={() => setToggleVisitUs(!toggleVisitUs)}
                            >
                                Visit us
                            </AngleButton>
                        :
                            <AngleButton
                                toggled={toggleVisitUs}
                                onClick={() => setToggleVisitUs(!toggleVisitUs)} 
                                // onMouseEnter={() => setToggleVisitUs(!toggleVisitUs)}
                            >
                                215/E, Colombo road, <br /> Nagoda, Kandana
                            </AngleButton>
                    }
                    </ButtonContainer>
                </div>
                <MapContainer>
                    <iframe
                        title="Location embed"
                        width="580"
                        height="300"
                        style={{ border:0 }}
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDbRnyFhozUndKrGdnOvkzOf10rx6cUBa0
                            &q=Nagoda+Kandana">
                    </iframe>
                </MapContainer>
            </div>
        </Container>
    )
}

export default ContactUs

const Container = styled.div `
    padding: 4vw;

    > h2 {
        color: #1C4193;
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
    clip-path: polygon(0 0, 92% 0, 100% 46%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    background-color: #3E63EC;
    color: white;
    border: none;
    /* padding: 2vw 4vw 2vw 1vw; */
    padding: 0 4vw 0 1vw;
    height: 5.6vw;
    width: 60%;
    text-align: left;
    font-size: 1.4vw;
    transition: 0.3s ease;
    /* margin-bottom: 1vw; */

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