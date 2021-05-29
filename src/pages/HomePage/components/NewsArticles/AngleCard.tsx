import { useState } from "react";
import styled from "styled-components"

declare type AngleCardProps = {
    type?: string;
    title?: string;
    image?: string;
}

const AngleCard = ({ type, title, image } : AngleCardProps) => {
    const [isHoveredOver, setIsHoveredOver] = useState<boolean>(false);

    return (
        <ShadowContainer>
            <Container 
                isHoveredOver={isHoveredOver}
            >
                <p>{type}</p>
                <p>{title}</p>
                <img src={image} alt="card-img" />

                <div>
                    <button
                        onMouseEnter={() => setIsHoveredOver(!isHoveredOver)}
                        onMouseLeave={() => setIsHoveredOver(!isHoveredOver)}
                    >
                        Read more
                    </button>
                </div>
            </Container>
        </ShadowContainer>
    )
}

export default AngleCard

declare type ContainerProps = {
    isHoveredOver: boolean;
}

const ShadowContainer = styled.div `
    filter: drop-shadow(3px 4px 10px rgba(62, 99, 236, 0.5));
    position: relative;
    margin-right: 5vw;
    height: 21vw;
`

const Container = styled.div<ContainerProps> `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }
    @font-face {
        font-family: Gilroy-Light;
        src: url(fonts/Gilroy-Light.ttf);
    }

    clip-path: polygon(0 0, 80% 0, 100% 27%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    padding: 2vw 2vw 1vw 2vw;
    display: flex;
    height: 100%;
    width: 21vw;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    transition: 0.4s ease;

    > p {
        font-weight: bold;
        font-size: 1.3vw;
        font-family: Gilroy-Bold;
    }

    > p:first-child {
        color: #3E63EC;
    }

    > img {
        width: 17vw;
        height: 9vw;
    }

    > div {
        display: flex;
        justify-content: flex-end;

        > button {
            background: transparent;
            border: 1px solid #aaa;
            color: #aaa;
            padding: 0.5vw;
            font-family: Gilroy-Light;
        }
    }

    ${({ isHoveredOver }) => (
        isHoveredOver && `
            && {
                transform: scale(1.02);
                background-color: #3E63EC;

                > p {
                    color:white;
                }

                > div {
                    > button {
                        cursor: pointer;
                        background-color: #262626;
                        border-color: #262626;
                    }
                }
            }
        `
    )}
`