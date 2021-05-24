import styled from "styled-components"

declare type AngleCardProps = {
    isFirst?: boolean;
    id?: string;
    title: string;
    isCommon?: boolean;
    isOtherServices?: boolean;
    paragraph?: string;
    isConcreteRepair?: boolean;
}

const AngleCard = ({ id, title, paragraph, isFirst, isCommon, isOtherServices, isConcreteRepair } : AngleCardProps) => {
    return (
        <Container isConcreteRepair={isConcreteRepair} isFirst={isFirst} isCommon={isCommon} isOtherServices={isOtherServices}>
            <div>
                <p>{id}</p>
                <h1>{title}</h1>
            </div>
            <div>
                <p>{paragraph}</p>
            </div>
            {
                isFirst && 
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
            }
        `
    )}
`

const FirstAdditionalContainer = styled.div `
    > p {
        margin: 1vw 0 1.2vw 2vw;
        font-size: 1.1vw;
    }
`