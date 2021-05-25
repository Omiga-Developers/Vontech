import styled from "styled-components"

const ContactUs = () => {
    return (
        <Container>
            <h2>Contact us</h2>
            <div>
                <div>
                    <ButtonContainer>
                        <AngleButton>Call now</AngleButton>
                    </ButtonContainer>
                    <ButtonContainer>
                        <AngleButton>Visit us</AngleButton>
                    </ButtonContainer>
                </div>
                <MapContainer>
                    <iframe
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
        color: #44f;
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

const AngleButton = styled.button `
    clip-path: polygon(0 0, 92% 0, 100% 46%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    background-color: #44f;
    color: white;
    border: none;
    padding: 2vw 4vw 2vw 1vw;
    width: 60%;
    text-align: left;
    font-size: 1.4vw;
    /* margin-bottom: 1vw; */
`