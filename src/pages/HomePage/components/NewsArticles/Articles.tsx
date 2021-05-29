import { Fade } from "react-awesome-reveal"
import styled from "styled-components"
import AngleCard from "./AngleCard"

const Articles = () => {
    return (
        <Container>
            <Fade direction="up" triggerOnce duration={1500}>
                <h2>News and articles</h2>
            </Fade>

                <ArticlesContainer>
                    <Fade direction="left" triggerOnce duration={1500}>
                    <AngleCard
                        image="images/concrete_structure.jpeg"
                        type="News"
                        title="The new hardware store in town"
                    />
                    <AngleCard
                        image="images/concrete_structure.jpeg"
                        type="News"
                        title="The new hardware store in town"
                    />
                    <AngleCard
                        image="images/concrete_structure.jpeg"
                        type="News"
                        title="The new hardware store in town"
                    />
                    <AngleCard
                        image="images/concrete_structure.jpeg"
                        type="News"
                        title="The new hardware store in town"
                    />
                    <AngleCard
                        image="images/concrete_structure.jpeg"
                        type="News"
                        title="The new hardware store in town"
                    />
                    <AngleCard
                        image="images/concrete_structure.jpeg"
                        type="News"
                        title="The new hardware store in town"
                    />
                    <AngleCard
                        image="images/concrete_structure.jpeg"
                        type="News"
                        title="The new hardware store in town"
                    />
                    <AngleCard
                        image="images/concrete_structure.jpeg"
                        type="News"
                        title="The new hardware store in town"
                    />
                    </Fade>
                </ArticlesContainer>
        </Container>
    )
}

export default Articles

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }

    padding: 4vw;
    background-color: white;

    > div > h2 {
        font-family: Gilroy-Bold;
        font-size: 2.2vw;
        color: #3E63EC;
        margin-bottom: 3vw;
    }
`

const ArticlesContainer = styled.div `
    display: flex;
    overflow-x: scroll;
    /* height: 25vw; */
    padding: 1vw 0.5vw;

    ::-webkit-scrollbar {
        display: none;
    }
`