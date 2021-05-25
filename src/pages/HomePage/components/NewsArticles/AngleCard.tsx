import { useState } from "react";
import styled from "styled-components"

declare type AngleCardProps = {
    type?: string;
    title?: string;
    image?: string;
}

const AngleCard = ({ type, title, image } : AngleCardProps) => {
    const [isHoveredOver, setIsHoveredOver] = useState<boolean>(false);

    // const tempFun = () => {
    //     setIsHoveredOver(!isHoveredOver);
    //     console.log(isHoveredOver);
    // }

    return (
        <ShadowContainer>
            <Container 
                // onMouseEnter={tempFun}
                // onMouseLeave={tempFun}
                onMouseEnter={() => setIsHoveredOver(!isHoveredOver)}
                onMouseLeave={() => setIsHoveredOver(!isHoveredOver)}
                isHoveredOver
            >
                <p>{type}</p>
                <p>{title}</p>
                <img src={image} alt="card-img" />

                <div>
                    <button
                        // onMouseEnter={() => setIsHoveredOver(!isHoveredOver)}
                        // onMouseLeave={() => setIsHoveredOver(!isHoveredOver)}
                    >
                        Read more
                    </button>
                </div>
            </Container>
        </ShadowContainer>
    )
}

export default AngleCard

declare type AngleCardContainerProps = {
    isHoveredOver: boolean;
}

const ShadowContainer = styled.div `
    filter: drop-shadow(2px 2px 8px #44f);
    position: relative;
    margin-right: 3vw;
`

const Container = styled.div<AngleCardContainerProps> `
    clip-path: polygon(0 0, 80% 0, 100% 27%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    padding: 2vw 2vw 1vw 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 18vw;
    background-color: white;

    > p {
        font-weight: bold;
    }

    > p:first-child {
        color: #44f;
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

    /* ${({ isHoveredOver }) => (
        isHoveredOver && `
            && {
                background-color: #44f;
                cursor: pointer;

                > p {
                    color:white;
                }

                > div {
                    > button {
                        background-color: black;
                        border-color: black;
                    }
                }
            }
        `
    )} */
`