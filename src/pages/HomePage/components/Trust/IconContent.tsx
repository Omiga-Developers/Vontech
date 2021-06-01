import { useState } from "react"
import styled from "styled-components"

declare type IconContentProps = {
    icon: string;
    sentenceOne: string;
    sentenceTwo?: string;
    isMiddle?: boolean;
    isLast?: boolean;
    isFirstColumn?: boolean;
    hoveredIcon: string;
}

const IconContent = ({ icon, sentenceOne, sentenceTwo, isMiddle, isLast, isFirstColumn, hoveredIcon } : IconContentProps) => {
    const [isHoveredOver, setIsHoveredOver] = useState<boolean>(false);

    return (
        <ContainerWrapper>
            <Container isMiddle={isMiddle} isLast={isLast} isFirstColumn={isFirstColumn}>
                <div
                    onMouseEnter={() => setIsHoveredOver(!isHoveredOver)}
                    onMouseLeave={() => setIsHoveredOver(!isHoveredOver)}
                >
                    <img
                        src={isHoveredOver ? hoveredIcon : icon} 
                        alt="icon" 
                    />
                </div>
                <div>
                    <p>{sentenceOne}</p>
                    {sentenceTwo && <p>{sentenceTwo}</p>}
                </div>
            </Container>
        </ContainerWrapper>
    )
}

export default IconContent

const ContainerWrapper = styled.div `
    flex: 1;
    width: 22vw;
`

declare type ContainerProps = {
    isMiddle?: boolean;
    isLast?: boolean;
    isFirstColumn?: boolean;
}

const Container = styled.div<ContainerProps> `
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    display: flex;
    position: relative;

    > div {
        > img {
            height: 6vw;
            object-fit: contain;
        }
    }

    > div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1vw;
        width: 11vw;

        > p {
            font-family: Gilroy-Bold;
            font-size: 1.1vw;
            color: #282828;
        }
    }

    ${({ isMiddle }) => (
        isMiddle && `
            // border-left: 1px solid #3E63EC;
            // border-right: 1px solid #3E63EC;
            justify-content: center;
        `
    )}

    ${({ isLast }) => (
        isLast && `
            justify-content: flex-end;
        `
    )}

    ${({ isFirstColumn }) => (
        isFirstColumn && `
            > div:last-child {
                width: 14vw;
            }
        `
    )}
`