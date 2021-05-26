import styled from "styled-components"

const RecentProjects = () => {
    return (
        <Container>
            <h2>Recent Projects</h2>
            <div>
                <p>This page is</p>
                <h2>currently under</h2>
                <h2>construction.</h2>
            </div>
        </Container>
    )
}

export default RecentProjects

const Container = styled.div `
    background-image: url("images/roberto-nickson-so3wgJLwDxo-unsplash.jpg");
    display: flex;
    background-size: 100% 100%;
    height: 30vw;
    padding: 4vw 4vw 0 4vw;
    flex-direction: column;
    color: white;

    > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > h2, > p {
            font-size: 3vw;
        }

        > p {
            color: rgba(255, 255, 255, 0.6);
        }

        > h2 {
            color: rgba(255, 255, 255, 0.8);
        }
    }
`