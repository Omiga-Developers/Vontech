import { Button } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components"

declare type AngleCardProps = {
    image: string;
    title: string;
    unit: string;
    dimension: string;
    isMobile?: boolean;
}

const AngleCard = ({ image, title, unit, dimension, isMobile } : AngleCardProps) => {
    const [isHoveredOver, setIsHoveredOver] = useState<boolean>(false);

    return (
        <Container
            isHoveredOver={isHoveredOver}
            style={isMobile ? { flexDirection: 'column' } : {}}
        >
            {!isMobile ?
                <>
                    <div>
                        <img alt="product" src={image} />
                    </div>
                    <div>
                        <RightTop>
                            <p>{title}</p>
                            <p>{unit}</p>
                            <p>{dimension}</p>
                        </RightTop>
                        <RightButton
                            onMouseEnter={() => setIsHoveredOver(!isHoveredOver)}
                            onMouseLeave={() => setIsHoveredOver(!isHoveredOver)}
                        >
                            Place order
                        </RightButton>
                    </div>
                </>
                :
                <>
                    <Top>
                        <div>
                            <img alt="product" src={image} />
                        </div>
                        <RightTop>
                            <p>{title}</p>
                            <p>{unit}</p>
                            <p>{dimension}</p>
                        </RightTop>
                    </Top>
                    <Button
                            style={{backgroundColor: '#ccc', fontFamily: 'Gilroy-Medium', borderRadius: 'none', padding: '1rem'}}
                            onMouseEnter={() => setIsHoveredOver(!isHoveredOver)}
                            onMouseLeave={() => setIsHoveredOver(!isHoveredOver)}
                        >
                            Place order
                    </Button>
                </>
            }
        </Container>
    )
}

export default AngleCard

declare type ContainerProps = {
    isHoveredOver: boolean;
}

const Container = styled.div<ContainerProps> `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    clip-path: polygon(0 0, 90% 0, 100% 30%, 100% 100%, 0 100%, 0% 50%);
    display: flex;
    justify-content: center;
    background-color: white;
    transition: 0.4s ease;

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

    ${({ isHoveredOver }) => (
        isHoveredOver && `
            transform: scale(1.02);
        `
    )}

    @media screen and (max-width: 768px) {
        width: 21rem;
        margin-bottom: 2rem;

        div > img {
            height: 10rem;
            width: 10rem;
        }
    }

    @media screen and (max-width: 380px) {
        width: 100%;

        div > img {
            height: 8rem;
            width: 7rem;
        }
    }
`


const RightTop = styled.div `
    padding: 1vw;

    > p {
        font-size: 1.2vw;
    }

    > p:first-child {
        font-weight: bold;
        font-family: Gilroy-Bold;
    }

    > p:last-child {
        font-family: Gilroy-Medium;
    }

    > p:nth-child(2) {
        font-size: 1vw;
        font-family: Gilroy-Medium;
        margin-top: 0.6vw;
    }

    @media screen and (max-width: 1200px) {
        > p {
            font-size: 1rem;
        }

        > p:nth-child(2) {
            font-size: 0.7rem;
            margin-top: 0.6rem;
        }
    }
`

const RightButton = styled.button `
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

    @media screen and (max-width: 1200px) {
        padding: 0.6rem 4rem 0.6rem 0.6rem;
        font-size: 0.8rem;
        margin-bottom: 1rem;
    }
`

const Top = styled.div `
    display: flex;
    align-items: center;
`