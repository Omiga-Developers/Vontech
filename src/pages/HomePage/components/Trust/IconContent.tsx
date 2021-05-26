import styled from "styled-components"

declare type IconContentProps = {
    icon: string;
    sentenceOne: string;
    sentenceTwo?: string;
}

const IconContent = ({ icon, sentenceOne, sentenceTwo } : IconContentProps) => {
    return (
        <ContainerWrapper>
            <Container>
                <div>
                    <img src={icon} alt="icon" />
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
    width: 25vw;
`

const Container = styled.div `
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
        flex: 1;

        > p {
            font-family: Gilroy-Medium;
            font-size: 1.1vw;
            color: white;
        }
    }
`