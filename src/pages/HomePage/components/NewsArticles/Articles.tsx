import styled from "styled-components"
import AngleCard from "./AngleCard"

const Articles = () => {
    return (
        <Container>
            <h2>News and articles</h2>

            <ArticlesContainer>
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

    > h2 {
        font-family: Gilroy-Bold;
        font-size: 2.2vw;
        color: #3E63EC;
        margin-bottom: 3vw;
    }
`

const ArticlesContainer = styled.div `
    display: flex;
    overflow-x: scroll;
    height: 20vw;
    padding: 1vw;

    ::-webkit-scrollbar {
        display: none;
    }
`