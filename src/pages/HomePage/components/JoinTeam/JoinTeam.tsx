import styled from "styled-components"
import AngleCard from "./AngleCard"

const JoinTeam = () => {
    return (
        <Container id="careers">
            <h2>Join the team!</h2>

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
            </JobContainer>
        </Container>
    )
}

export default JoinTeam

const Container = styled.div `
    padding: 4vw;

    > h2 {
        color: #1C4193;
        font-size: 2.2vw;
        border-bottom: 1px solid #1C4193;
    }
`

const JobContainer = styled.div `
    display: flex;
    overflow-x: scroll;
    height: 20vw;
    padding: 1vw;

    ::-webkit-scrollbar {
        display: none;
    }
`