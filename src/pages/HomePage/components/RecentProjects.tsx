import styled from "styled-components"

const RecentProjects = () => {
    return (
        <Container id="projects">
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
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    background-image: url("images/1AA556D6.jpg");
    display: flex;
    background-size: cover;
    background-attachment: fixed;
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
        background-color: #282828;
        opacity: 0.85;
    }

    > h2 {
        z-index: 1;
        font-size: 2.2vw;
        font-family: Gilroy-Bold;
    }

    > div:last-child {
        z-index: 1;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > h2, > p {
            font-size: 2.7vw;
            font-family: Gilroy-Medium;
        }

        > p {
            color: white;
        }

        > h2 {
            color: white;
            font-family: Gilroy-Bold;
        }
    }

    @media screen and (max-width: 1200px) {
        height: 17rem;

        h2 {
            font-size: 2rem
        }

        > div:last-child {
            > p, > h2 {
                font-size: 1.5rem;
            }
        }
    }

    @media screen and (max-width: 600px) {
        height: 16rem;
        background-image: none;

        h2 {
            text-align: center;
            font-size: 2rem;
        }

        > div:last-child {
            > p, > h2 {
                font-size: 1.4rem;
            }
        }
    }
`