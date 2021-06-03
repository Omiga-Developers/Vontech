import { useState } from "react";
import styled from "styled-components"

declare type AngleCardProps = {
    title: string;
    age?: string;
    qualification?: string;
}

const AngleCard = ({ title, age, qualification } : AngleCardProps) => {
    const [isHoveredOver, setIsHoveredOver] = useState<boolean>(false);

    return (
        <ShadowContainer>
            <Container isHoveredOver={isHoveredOver}>
                <TopHalf>
                    <div>
                        <p>Job posting</p>
                        <p>{title}</p>
                    </div>
                </TopHalf>
                <BottomHalf>
                    <div>
                        {age && <p>{age}</p>}
                        {qualification && <p>{qualification}</p>}
                        <p><a href="mailto:vontechengineering@gmail.com">Send your CV to vontechengineering@gmail.com</a></p>
                    </div>
                    <div>
                        <button
                            onMouseEnter={() => setIsHoveredOver(!isHoveredOver)}
                            onMouseLeave={() => setIsHoveredOver(!isHoveredOver)}
                        >
                            Apply now!
                        </button>
                    </div>
                </BottomHalf>
            </Container>
        </ShadowContainer>
    )
}

export default AngleCard

const ShadowContainer = styled.div `
    filter: drop-shadow(2px 2px 8px #3E63EC);
    height: 22.5vw;
    margin-right: 5vw;

    @media screen and (max-width: 1200px) {
        height: 18rem;
        margin-right: 3rem;
    }
`

declare type ContainerProps = {
    isHoveredOver: boolean;
}

const Container = styled.div<ContainerProps> `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }
    @font-face {
        font-family: Gilroy-Light;
        src: url(fonts/Gilroy-Light.ttf);
    }
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    clip-path: polygon(0 0, 80% 0, 100% 27%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    height: 100%;
    width: 20vw;
    display: flex;
    flex-direction: column;
    background-color: white;
    transition: 0.4s ease;

    ${({ isHoveredOver }) => (
        isHoveredOver && `
        transform: scale(1.02);
        `
    )}

    @media screen and (max-width: 1200px) {
        width: 16rem;
    }
`

const TopHalf = styled.div `
    padding: 1.5vw 2vw;
    background-color: #3E63EC;
    flex: 0.4;
    display: flex;
    flex-direction: column;

    > div {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: space-between;
        color: white;

        > p:first-child {
            font-family: Gilroy-Light;
            font-size: 2vw;
        }

        > p:last-child {
            font-family: Gilroy-Light;
            font-size: 1.5vw;
        }
    }

    @media screen and (max-width: 1200px) {
        padding: 1rem 1rem;

        > div {
            > p:first-child {
                font-size: 1.5rem;
            }

            > p:last-child {
                font-size: 1rem;
            }
        }
    }
`

const BottomHalf = styled.div `
    padding: 2vw 2vw 1vw 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0.6;

    > div:first-child {
        > p {
            font-family: Gilroy-Medium;
            color: #3E63EC;   
            font-size: 1vw;
            margin-bottom: 1vw;
        }

        > p:last-child {
            font-size: 0.8vw;

            > a {
                font-family: Gilroy-Medium;
                text-decoration: none;
                color: #3E63EC;
            }
        }
    }

    > div:last-child {
        display: flex;
        justify-content: flex-end;

        > button {
            background: transparent;
            border: 1px solid #3E63EC;
            color: #3E63EC;
            padding: 0.5vw;
            font-family: Gilroy-Light;
            transition: 0.2s ease;
            font-size: 1vw;

            :hover {
                background-color: #282828;
                border-color: #282828;
                color: white;
                cursor: pointer;
            }
        }
    }

    @media screen and (max-width: 1200px) {
        padding: 1.5rem 1.5rem 1rem 1.5rem;

        > div:first-child {
            > p {
                font-size: 0.7rem;
            }

            > p:last-child {
                font-size: 0.6rem;
            }
        }

        > div:last-child {
            > button {
                padding: 0.6rem;
                font-size: 0.7rem;
            }
        }
    }
`