import styled from "styled-components"

const RecentProjects = () => {
    return (
        <Container>
            <div></div>
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
    background-image: url("images/1AA556D6.jpg");
    display: flex;
    background-size: cover;
    height: 30vw;
    padding: 4vw 4vw 0 4vw;
    flex-direction: column;
    color: white;
    position: relative;

    > div:first-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #3E63EC;
        opacity: 0.6;
    }

    > h2 {
        z-index: 1;
    }

    > div:last-child {
        z-index: 1;
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