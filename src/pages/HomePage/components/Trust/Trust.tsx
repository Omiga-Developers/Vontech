import styled from "styled-components"
import IconContent from "./IconContent"

const Trust = () => {
    return (
        <Container id="trust">
            <h2>Why trust us with your project?</h2>
            <IconContainer>
                <RowContainerWrapper>
                    <RowContainer>
                        <IconContent
                            icon="images/Website-06.png"
                            sentenceOne="Qualified &"
                            sentenceTwo="experienced engineers"
                            isFirstColumn={true}
                        />
                        <IconContent
                            icon="images/Website-07.png"
                            sentenceOne="Quality materials"
                            isMiddle={true}
                        />
                        <IconContent
                            icon="images/Website-08.png"
                            sentenceOne="Affordable"
                            isLast={true}
                        />
                    </RowContainer>
                </RowContainerWrapper>
                <RowContainerWrapper>
                    <RowContainer>
                        <IconContent
                            icon="images/Website-09.png"
                            sentenceOne="Maintenance"
                            isFirstColumn={true}
                        />
                        <IconContent
                            icon="images/Website-10.png"
                            sentenceOne="Premium support"
                            sentenceTwo="& consultation"
                            isMiddle={true}
                        />
                        <IconContent
                            icon="images/Website-11.png"
                            sentenceOne="Supervised"
                            sentenceTwo="by professionals"
                            isLast={true}
                        />
                    </RowContainer>
                </RowContainerWrapper>
                <RowContainerWrapper>
                    <RowContainer isLast={true}>
                        <IconContent
                            icon="images/Website-12.png"
                            sentenceOne="Statutory approvals"
                            sentenceTwo="(local authority)"
                            isFirstColumn={true}
                        />
                        <IconContent
                            icon="images/Website-13.png"
                            sentenceOne="Bank loans"
                            isMiddle={true}
                        />
                        <IconContent
                            icon="images/Website-14.png"
                            sentenceOne="Sustainable &"
                            sentenceTwo="long lasting"
                            isLast={true}
                        />
                    </RowContainer>
                </RowContainerWrapper>
            </IconContainer>
        </Container>
    )
}

export default Trust

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }

    padding-bottom: 5vw;
    background-color: #282828;

    > h2 {
        padding: 3vw;
        font-family: Gilroy-Bold;
        color: white;
        display: flex;
        font-size: 2.2vw;
        justify-content: center;
    }
`

const IconContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const RowContainerWrapper = styled.div `
`

declare type RowContainerProps = {
    isLast?: boolean;
}

const RowContainer = styled.div<RowContainerProps> `
    display: flex;
    padding: 1vw;
    
    ${({ isLast }) => (
        !isLast && `
            border-bottom: 1px solid #3E63EC;
        `
    )}
`