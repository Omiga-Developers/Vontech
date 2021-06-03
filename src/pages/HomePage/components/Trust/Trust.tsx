import { Fade } from "react-awesome-reveal"
import styled from "styled-components"
import IconContent from "./IconContent"

declare type TrustProps = {
    width: number;
}

const Trust = ({ width } : TrustProps) => {
    return (
        <Container id="trust">
            <Fade direction="left" triggerOnce duration={1500}>
                <h2>Why trust us with your project?</h2>
            </Fade>

            <IconContainer>
                <Fade direction="up" triggerOnce duration={1500}>
                    {width > 450 ?
                        <>
                            <RowContainerWrapper>
                                <RowContainer>
                                    <IconContent
                                        icon="images/Website-06.png"
                                        sentenceOne="Qualified &"
                                        sentenceTwo="experienced engineers"
                                        isFirstColumn={true}
                                        hoveredIcon="images/Website-06-1.png"
                                    />
                                    <IconContent
                                        icon="images/Website-07.png"
                                        sentenceOne="Quality materials"
                                        isMiddle={true}
                                        hoveredIcon="images/Website-07-1.png"
                                    />
                                    <IconContent
                                        icon="images/Website-08.png"
                                        sentenceOne="Affordable"
                                        isLast={true}
                                        hoveredIcon="images/Website-08-1.png"
                                    />
                                </RowContainer>
                            </RowContainerWrapper>
                            <RowContainerWrapper>
                                <RowContainer>
                                    <IconContent
                                        icon="images/Website-09.png"
                                        sentenceOne="Maintenance"
                                        isFirstColumn={true}
                                        hoveredIcon="images/Website-09-1.png"
                                    />
                                    <IconContent
                                        icon="images/Website-10.png"
                                        sentenceOne="Premium support"
                                        sentenceTwo="& consultation"
                                        isMiddle={true}
                                        hoveredIcon="images/Website-10-1.png"
                                    />
                                    <IconContent
                                        icon="images/Website-11.png"
                                        sentenceOne="Supervised"
                                        sentenceTwo="by professionals"
                                        isLast={true}
                                        hoveredIcon="images/Website-11-1.png"
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
                                        hoveredIcon="images/Website-12-1.png"
                                    />
                                    <IconContent
                                        icon="images/Website-13.png"
                                        sentenceOne="Bank loans"
                                        isMiddle={true}
                                        hoveredIcon="images/Website-13-1.png"
                                    />
                                    <IconContent
                                        icon="images/Website-14.png"
                                        sentenceOne="Sustainable &"
                                        sentenceTwo="long lasting"
                                        isLast={true}
                                        hoveredIcon="images/Website-14-1.png"
                                    />
                                </RowContainer>
                            </RowContainerWrapper>
                        </>
                        :
                        <>
                            <RowContainerWrapper>
                                <RowContainer>
                                    <IconContent
                                        icon="images/Website-06.png"
                                        sentenceOne="Qualified &"
                                        sentenceTwo="experienced engineers"
                                        isFirstColumn={true}
                                        hoveredIcon="images/Website-06-1.png"
                                    />
                                    <IconContent
                                        icon="images/Website-10.png"
                                        sentenceOne="Premium support"
                                        sentenceTwo="& consultation"
                                        isMiddle={true}
                                        hoveredIcon="images/Website-10-1.png"
                                    />
                                </RowContainer>
                            </RowContainerWrapper>
                            <RowContainerWrapper>
                                <RowContainer>
                                    <IconContent
                                        icon="images/Website-09.png"
                                        sentenceOne="Maintenance"
                                        isFirstColumn={true}
                                        hoveredIcon="images/Website-09-1.png"
                                    />
                                    <IconContent
                                        icon="images/Website-07.png"
                                        sentenceOne="Quality materials"
                                        isMiddle={true}
                                        hoveredIcon="images/Website-07-1.png"
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
                                        hoveredIcon="images/Website-12-1.png"
                                    />
                                    <IconContent
                                        icon="images/Website-13.png"
                                        sentenceOne="Bank loans"
                                        isMiddle={true}
                                        hoveredIcon="images/Website-13-1.png"
                                    />
                                </RowContainer>
                                <RowContainer>
                                    <IconContent
                                        icon="images/Website-14.png"
                                        sentenceOne="Sustainable &"
                                        sentenceTwo="long lasting"
                                        isLast={true}
                                        hoveredIcon="images/Website-14-1.png"
                                    />
                                    <IconContent
                                        icon="images/Website-11.png"
                                        sentenceOne="Supervised"
                                        sentenceTwo="by professionals"
                                        isLast={true}
                                        hoveredIcon="images/Website-11-1.png"
                                    />
                                </RowContainer>
                            </RowContainerWrapper>
                        </>
                    }
                </Fade>
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
    background-color: white;

    > div > h2 {
        padding: 3vw;
        font-family: Gilroy-Bold;
        color: #282828;
        display: flex;
        font-size: 2.2vw;
        justify-content: center;
    }

    @media screen and (max-width: 1200px) {
        > div > h2 {
            font-size: 2rem;
        }
    }

    @media screen and (max-width: 600px) {
        padding-bottom: 2rem;

        > div > h2 {
            margin-bottom: 1.5rem;
            font-size: 2rem;
            width: 100%;
            text-align: center;
        }
    }
`

const IconContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
        @media screen and (max-width: 800px) {
            width: 100%;
        }
    }
`

const RowContainerWrapper = styled.div `
`

declare type RowContainerProps = {
    isLast?: boolean;
}

const RowContainer = styled.div<RowContainerProps> `
    display: flex;
    padding: 1vw;

    @media screen and (max-width: 450px) {
        flex-wrap: wrap;
    }
`