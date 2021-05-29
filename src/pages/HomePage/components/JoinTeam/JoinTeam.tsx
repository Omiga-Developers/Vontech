import { Fade } from "react-awesome-reveal"
import styled from "styled-components"
import AngleCard from "./AngleCard"

const JoinTeam = () => {
    return (
        <Container id="careers">
            <Fade direction="up" triggerOnce duration={1500}>
                <h2>Join the team!</h2>
            </Fade>

            <Fade direction="left" triggerOnce duration={2500}>
                <JobContainer>
                    <AngleCard
                        title="Sales Representative (trainee)"
                        age="18 to 24 years of age"
                    />
                    <AngleCard
                        title="Site Supervisor (trainee)"
                        age="20 to 24 years of age"
                        qualification="(NCT Cevil) or any technical qualification in cevil engineering"
                    />
                    <AngleCard
                        title="Site Engineer (Full time)"
                        qualification="NDT or equivalent 2 years experience"
                    />
                    <AngleCard
                        title="Site Engineer (Full time)"
                        qualification="NDT or equivalent 2 years experience"
                    />
                </JobContainer>
            </Fade>
        </Container>
    )
}

export default JoinTeam

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }

    padding: 4vw 8vw;
    background-color: white;

    > div > h2 {
        font-family: Gilroy-Bold;
        color: #1C4193;
        font-size: 2.2vw;
        border-bottom: 1px solid #1C4193;
        margin-bottom: 3vw;
    }
`

const JobContainer = styled.div `
    display: flex;
    overflow-x: scroll;
    padding: 1vw;

    ::-webkit-scrollbar {
        display: none;
    }
`