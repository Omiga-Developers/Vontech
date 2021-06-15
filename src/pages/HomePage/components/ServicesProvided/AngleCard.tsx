import { Button } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components"

declare type AngleCardProps = {
    isFirst?: boolean;
    stringId?: string;
    title: string;
    isCommon?: boolean;
    isOtherServices?: boolean;
    paragraph?: string;
    isFourth?: boolean;
    isSecond?: boolean;
    bgImage?: string;
    isMobile?: boolean;
}

const AngleCard = ({ stringId, title, paragraph, isFirst, isCommon, isOtherServices, isFourth, isSecond, bgImage, isMobile } : AngleCardProps) => {
    const [toggleOtherServicesHover, setToggleOtherServicesHover] = useState<boolean>(false);
    const [toggleBackgroundImageHover, setToggleBackgroundImageHover] = useState<boolean>(false);
    const [toggleDisplayContent, setToggleDisplayContent] = useState<boolean>(false);

    return (
        <Container
            style={toggleBackgroundImageHover ? stringId ? !isMobile ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition:  isFirst || isSecond ? 'left center' : 'center center' } : {} : {} : {}}
            isFourth={isFourth} 
            isFirst={isFirst} 
            isCommon={isCommon} 
            isOtherServices={isOtherServices}
            isBackgroundImageHovered={toggleBackgroundImageHover}
            onMouseEnter={() => !isMobile ? isOtherServices ? setToggleOtherServicesHover(!toggleOtherServicesHover) : setToggleBackgroundImageHover(!toggleBackgroundImageHover) : null}
            onMouseLeave={() => !isMobile ? isOtherServices ? setToggleOtherServicesHover(!toggleOtherServicesHover) : setToggleBackgroundImageHover(!toggleBackgroundImageHover) : null}
            isMobile={isMobile}
            toggleDisplayContent={toggleDisplayContent}
        >
            {!toggleBackgroundImageHover &&
                <>
                    <div>
                        <p>{stringId}</p>
                        <h1>
                            {!toggleOtherServicesHover ? title : "Contact us now"}
                        </h1>
                    </div>
                    {
                        !isMobile ?
                            <div>
                                <p>{paragraph}</p>
                            </div>
                            :
                            toggleDisplayContent ?
                                <div>
                                    <p>{paragraph}</p>
                                </div>
                                :
                                <ButtonContainer>
                                    <Button onClick={() => setToggleDisplayContent(true)}>Read more</Button>
                                </ButtonContainer>
                    }
                </>
            }
            {
                isFirst && !toggleBackgroundImageHover && !isMobile ?
                    <FirstAdditionalContainer>
                        <p>Design & Build</p>
                        <p>Project managment</p>
                        <p>Residential & Smart homes</p>
                        <p>Commerical & warehouse</p>
                        <p>Steel structures</p>
                        <p>Roofing services</p>
                    </FirstAdditionalContainer>
                    :
                    isFirst && !toggleBackgroundImageHover && toggleDisplayContent && isMobile &&
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
    isFourth?: boolean;
    isBackgroundImageHovered?: boolean;
    isMobile?: boolean;
    toggleDisplayContent?: boolean;
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
    @font-face {
        font-family: Gilroy-Light;
        src: url(fonts/Gilroy-Light.ttf);
    }

    p {
        font-size: 1vw;
        line-height: 1.5vw;
    }

    padding: 2vw;
    clip-path: polygon(0 0, 75% 0, 100% 27%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    background-color: #3E63EC;
    color: white;
    width: 23vw;
    margin: 2vw;

    > div:first-child {
        border-bottom: 1px solid #fff;
        padding-bottom: 1vw;

        > p {
            font-size: 1.5vw;
            font-family: Gilroy-Light;
        }

        > h1 {
            font-family: Gilroy-Medium;
            font-weight: normal;
            width: 75%;
        }
    }

    > div:nth-child(2) {
        padding: 2vw 0;
        
        > p {
            font-family: Gilroy-Medium;
        }
    }

    ${({ isFirst }) => (
        isFirst && `
            clip-path: polygon(0 0, 73% 0, 100% 18%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
            height: 40vw;
        `
    )}

    ${({ isCommon }) => (
        isCommon && `
            height: 27vw;
        `
    )}

    ${({ isFourth }) => (
        isFourth && `
            // h1 {
            //     padding-bottom: 2.7vw;
            // }
        `
    )}

    ${({ isOtherServices }) => (
        isOtherServices && `
            clip-path: polygon(0 0, 79% 0, 100% 54%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
            background-color: white;
            color: #3E63EC; 
            display: flex;
            height: 11vw;
            align-items: center;

            > div:first-child {
                padding-bottom: 0;
                border: none;
            }

            :hover {
                &&& {
                    background-color: #faeded;
                    color: white;
                }
            }
        `
    )}

    @media screen and (max-width: 1250px) and (min-width: 800px) {
        clip-path: polygon(0 0, 73% 0, 100% 18%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
        height: 24rem;
        margin-bottom: 2rem;
        min-width: 20rem;
        padding: 1.2rem;

        p {
            font-size: 1rem;
            line-height: 1.5rem;
        }

        > div:first-child { 
            padding-bottom: 0.6rem;

            > p {
                font-size: 1rem;
            }
        }

        > div:nth-child(2) {
            padding-bottom: 1.2rem 0;
        }

        ${({ isOtherServices }) => (
            isOtherServices && `
                display: none;
            `
        )}
    }

    @media screen and (max-width: 800px) {
        clip-path: polygon(0 0, 73% 0, 100% 18%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
        height: 23rem;

        p {
            font-size: 1rem;
            line-height: 1.5rem;
        }

        > div:first-child { 
            padding-bottom: 0.6rem;
            
            > p {
                font-size: 1rem;
            }
        }

        > div:nth-child(2) {
            padding-bottom: 1.2rem 0;
        }

        ${({ isOtherServices }) => (
            isOtherServices && `
                display: none;
            `
        )}
    }

    @media screen and (max-width: 800px) and (min-width: 703px) {
        min-width: 18rem;
        width: 18rem;
    }

    @media screen and (max-width: 703px) {
        &&& {
            clip-path: polygon(0 0, 75% 0, 100% 40%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
        }

        width: 20rem;
        height: auto;

        h1 { 
            font-size: 2.2rem;
            width: 75%;
        }

        > div:first-child {
            border: none;
        }

        ${({ toggleDisplayContent }) => (
            toggleDisplayContent && `
                div:first-child {
                    border-bottom: 1px solid #fff;
                }
            `
            
        )}

        ${({ isFirst, toggleDisplayContent}) => (
            !isFirst && toggleDisplayContent && `
                &&& {
                    clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);

                    h1 {
                        font-size: 2rem;
                        width: 60%;
                    }
                }
            `
        )}

        ${({ isFirst, toggleDisplayContent }) => (
            isFirst ? toggleDisplayContent ? `
                &&& {
                    clip-path: polygon(0 0, 75% 0, 100% 16%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
                }
            `
            : `
                clip-path: polygon(0 0, 75% 0, 100% 27%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
            `
            : `
                // clip-path: polygon(0 0, 75% 0, 100% 27%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
            `
        )}
    }

    @media screen and (max-width: 380px) {
        width: 70%;

        h1 {
            font-size: 1.6rem;
            width: 75%;
        }
    }
`

const ButtonContainer = styled.div `
    justify-content: center;
    display: flex;

    > button {
        flex: 1;
        font-family: Gilroy-Medium !important;
        background-color: white;
        border: 1px solid #3E63EC;
        color: #3E63EC;
        text-transform: capitalize;

        :hover {
            border: 1px solid white;
            color: white;
        }
    }
`

const FirstAdditionalContainer = styled.div `
    > p {
        margin: 0vw 0 1.2vw 2vw;
        font-size: 1.1vw;
        font-family: Gilroy-Medium;
    }

    > p:last-child {
        margin: 0vw 0 0vw 2vw;
    }

    @media screen and (max-width: 1250px) and (min-width: 703px) {
        display: none;
    }

    @media screen and (max-width: 800px) {       
        > p {
            font-size: 1rem;
            margin: 0 0 1rem 1.2rem;
        }

        > p:last-child {
            margin: 0 0 0 1.2rem;
        }
    }
`