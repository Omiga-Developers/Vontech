import { useState } from "react";
import styled from "styled-components"

declare type AngleCardProps = {
    isFirst?: boolean;
    stringId?: string;
    title: string;
    isCommon?: boolean;
    isOtherServices?: boolean;
    paragraph?: string;
    isConcreteRepair?: boolean;
    bgImage?: string;
}

const AngleCard = ({ stringId, title, paragraph, isFirst, isCommon, isOtherServices, isConcreteRepair, bgImage } : AngleCardProps) => {
    const [toggleOtherServicesHover, setToggleOtherServicesHover] = useState<boolean>(false);
    const [toggleBackgroundImageHover, setToggleBackgroundImageHover] = useState<boolean>(false);

    return (
        <Container
            style={toggleBackgroundImageHover ? stringId ? { backgroundImage: `url(${bgImage})`, backgroundSize: '100% 100%' } : {} : {}}
            isConcreteRepair={isConcreteRepair} 
            isFirst={isFirst} 
            isCommon={isCommon} 
            isOtherServices={isOtherServices}
            isBackgroundImageHovered={toggleBackgroundImageHover}
            onMouseEnter={() => isOtherServices ? setToggleOtherServicesHover(!toggleOtherServicesHover) : setToggleBackgroundImageHover(!toggleBackgroundImageHover)}
            onMouseLeave={() => isOtherServices ? setToggleOtherServicesHover(!toggleOtherServicesHover) : setToggleBackgroundImageHover(!toggleBackgroundImageHover)}
        >
            {!toggleBackgroundImageHover &&
                <>
                    <div>
                        <p>{stringId}</p>
                        <h1>
                            {!toggleOtherServicesHover ? title : "Contact us now"}
                        </h1>
                    </div>
                    <div>
                        <p>{paragraph}</p>
                    </div>
                </>
            }
            {
                isFirst && !toggleBackgroundImageHover &&
                    <FirstAdditionalContainer>
                        <p>Design & Build</p>
                        <p>Project managment</p>
                        <p>Residential & Smart homes</p>
                        <p>Commerical & warehouse</p>
                        <p>Steel structures</p>
                        <p>Roofing services</p>
                    </FirstAdditionalContainer>
            }
        </Container>
    )
}

export default AngleCard

declare type ContainerProps = {
    isCommon?: boolean;
    isOtherServices?: boolean;
    isFirst?: boolean;
    isConcreteRepair?: boolean;
    isBackgroundImageHovered?: boolean;
}

const Container = styled.div<ContainerProps> `
    p {
        font-size: 1vw;
    }

    padding: 2vw;
    clip-path: polygon(0 0, 70% 0%, 100% 25%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0% 30%);
    background-color: #3b3bff;
    color: white;
    width: 25vw;
    transition: 0.3s ease;

    > div:first-child {
        border-bottom: 1px solid #fff;
        padding-bottom: 1vw;

        > p {
            font-size: 1.5vw;
        }
    }

    > div:nth-child(2) {
        padding: 2vw 0;
    }

    ${({ isFirst }) => (
        isFirst && `
            clip-path: polygon(0 0, 70% 0%, 100% 15%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0% 30%);
            height: 35vw;
        `
    )}

    ${({ isCommon }) => (
        isCommon && `
            height: 21vw;
        `
    )}

    ${({ isConcreteRepair }) => (
        isConcreteRepair && `
            h1 {
                padding-bottom: 2.7vw;
            }
        `
    )}

    ${({ isOtherServices }) => (
        isOtherServices && `
            clip-path: polygon(0 0, 70% 0%, 100% 60%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0% 30%);
            background-color: white;
            color: #3b3bff; 
            display: flex;
            align-items: center;

            > div:first-child {
                padding-bottom: 0;
                border: none;
            }

            :hover {
                &&& {
                    background-color: black;
                    color: white;
                }
            }
        `
    )}
`

const FirstAdditionalContainer = styled.div `
    > p {
        margin: 0vw 0 1.2vw 2vw;
        font-size: 1.1vw;
    }

    > p:last-child {
        margin: 0vw 0 0vw 2vw;
    }
`