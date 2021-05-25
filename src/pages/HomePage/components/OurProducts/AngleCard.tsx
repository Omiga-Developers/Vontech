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
            width: 20vw;
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
    padding: 1vw;

    > p:first-child {
        font-weight: bold;
    }

    > p:nth-child(2) {
        font-size: 0.8vw;
        margin-top: 0.6vw;
    }
`

const RightButton = styled.button `
    clip-path: polygon(0 0, 92% 0, 100% 46%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    background-color: #44f;
    color: white;
    border: none;
    padding: 1vw 7vw 1vw 1vw;
    font-size: 1.2vw;
    margin-bottom: 1vw;
    transition: 0.2s ease;

    :hover {
        background-color: black;
        cursor: pointer;
    }
`