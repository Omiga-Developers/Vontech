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
    filter: drop-shadow(2px 2px 8px #3E63EC);
    position: relative;
    margin-right: 3vw;
`

const Container = styled.div<ContainerProps> `
    clip-path: polygon(0 0, 80% 0, 100% 27%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    padding: 2vw 2vw 1vw 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 18vw;
    background-color: white;
    transition: 0.4s ease;

    > p {
        font-weight: bold;
    }

    > p:first-child {
        color: #3E63EC;
    }

    > img {
        width: 13vw;
        height: 6vw;
    }

    > div {
        display: flex;
        justify-content: flex-end;

        > button {
            background: transparent;
            border: 1px solid #aaa;
            color: #aaa;
            padding: 0.5vw;
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