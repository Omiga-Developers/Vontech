import styled from "styled-components"
import AngleCard from "./AngleCard"

const Articles = () => {
    return (
        <Container>
            <h2>News and articles</h2>

            <ArticlesContainer>
                <AngleCard
                    image="images/concrete structure.jpeg"
                    type="News"
                    title="The new hardware store in town"
                />
                <AngleCard
                    image="images/concrete structure.jpeg"
                    type="News"
                    title="The new hardware store in town"
                />
                <AngleCard
                    image="images/concrete structure.jpeg"
                    type="News"
                    title="The new hardware store in town"
                />
                <AngleCard
                    image="images/concrete structure.jpeg"
                    type="News"
                    title="The new hardware store in town"
                />
                <AngleCard
                    image="images/concrete structure.jpeg"
                    type="News"
                    title="The new hardware store in town"
                />
                <AngleCard
                    image="images/concrete structure.jpeg"
                    type="News"
                    title="The new hardware store in town"
                />
                <AngleCard
                    image="images/concrete structure.jpeg"
                    type="News"
                    title="The new hardware store in town"
                />
                <AngleCard
                    image="images/concrete structure.jpeg"
                    type="News"
                    title="The new hardware store in town"
                />
            </ArticlesContainer>
        </Container>
    )
}

export default Articles

const Container = styled.div `
    padding: 4vw;

    > h2 {
        color: #44f;
        margin-bottom: 3vw;
    }
`

const ArticlesContainer = styled.div `
    display: flex;
    overflow-x: scroll;
    height: 20vw;
    padding: 1vw 1vw 1vw 0.5vw;

    ::-webkit-scrollbar {
        display: none;
    }
`