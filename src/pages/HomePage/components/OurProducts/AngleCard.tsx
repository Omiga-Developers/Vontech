import styled from "styled-components"

declare type AngleCardProps = {
    image: string;
    title: string;
    unit: string;
    dimension: string;
}

const AngleCard = ({ image, title, unit, dimension } : AngleCardProps) => {
    return (
        <Container>
            <div>
                <img alt="product" src={image} />
            </div>
            <div>
                <RightTop>
                    <p>{title}</p>
                    <p>{unit}</p>
                    <p>{dimension}</p>
                </RightTop>
                <RightButton>
                    Place your order now
                </RightButton>
            </div>
        </Container>
    )
}

export default AngleCard

const Container = styled.div `
    clip-path: polygon(0 0, 90% 0, 100% 30%, 100% 100%, 0 100%, 0% 50%);
    display: flex;
    justify-content: center;
    background-color: white;

    > div {
        > img {
            height: 16vw;
            width: 18vw;
        }
    }

    > div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1vw 1vw 0 0.5vw;
    }
`


const RightTop = styled.div `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    padding: 1vw;

    > p:first-child {
        font-weight: bold;
        font-family: Gilroy-Bold;
    }

    > p:last-child {
        font-family: Gilroy-Medium;
    }

    > p:nth-child(2) {
        font-size: 0.8vw;
        font-family: Gilroy-Medium;
        margin-top: 0.6vw;
    }
`

const RightButton = styled.button `
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    font-family: Gilroy-Medium;
    clip-path: polygon(0 0, 92% 0, 100% 46%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    background-color: #3E63EC;
    color: white;
    border: none;
    padding: 1vw 7vw 1vw 1vw;
    font-size: 1.2vw;
    margin-bottom: 1vw;
    transition: 0.2s ease;

    :hover {
        background-color: #262626;
        cursor: pointer;
    }
`