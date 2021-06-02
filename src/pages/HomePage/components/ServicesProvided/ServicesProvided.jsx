import { useEffect, useState } from "react"
import { Fade } from "react-awesome-reveal"
import styled from "styled-components"
import AngleCard from "./AngleCard"

const ServicesProvided = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        const listener = window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });

        return window.removeEventListener('resize', listener);
    }, [width])

    return (
        <Container id="services">
            <Fade direction="left" triggerOnce duration={1500}>
                <h2>Services we provide</h2>
            </Fade>
            <Fade direction="up" triggerOnce duration={2000}>
                <CardContainer>
                    {width > 0 && width > 1250 ? 
                    <>
                        <CardColumn>
                            <AngleCard 
                                stringId="01"
                                isFirst={true}
                                title="Design & Construction"
                                paragraph="Vontech provides you with construction
                                    you can truly count on. We undertake
                                    all types of construction from inception
                                    of smart homes, sustainable buildings
                                    and more. Our services also extend to
                                    any type of renovation."
                                bgImage="images/IMG_4152.jpg"
                            />
                            <AngleCard 
                                title="Other services?"
                                isOtherServices={true}
                            />
                        </CardColumn>
                        <CardColumn>
                            <AngleCard 
                                isCommon={true}
                                stringId="02"
                                isSecond={true}
                                title="Concrete structures"
                                paragraph="We flawlessly execute the design and
                                    construction of any type of concrete
                                    structures, columns, beams & slabs.
                                    Our services are inclusive of supplying
                                    and installing formworks (plywood
                                    shuttering, rebar and concrete). "
                                bgImage="images/concrete_structure.jpeg"
                            />
                            <AngleCard 
                                isCommon={true}
                                stringId="04"
                                isFourth={true}
                                title="Concrete repair"
                                paragraph="We execute any type of concrete
                                    repairing or masonry work, as well as
                                    undertaking the renovations of
                                    concrete structures such as slabs,
                                    beams, columns, and more. Our
                                    services further include repairing water
                                    tanks, damaged on walls and so on."
                                bgImage="images/concrete_repair.jpeg"
                            />
                        </CardColumn>
                        <CardColumn>
                            <AngleCard 
                                isCommon={true}
                                stringId="03"
                                title="Waterproofing & chemicals"
                                paragraph="We are authorized applicators for a
                                    reputed waterproofing company M/s
                                    HE Engineering (Pvt). We commit to
                                    providing you with superior quality
                                    waterproofing of all types: roof tops,
                                    restrooms, balconies, exterior walls,
                                    and so much more, with a ten-year
                                    warranty period."
                                bgImage="images/waterproofing.jpeg"
                            />
                            <AngleCard 
                                isCommon={true}
                                stringId="05"
                                title="Manufacturing & trading"
                                paragraph="We are the reliable suppliers of
                                    Cement, Steel for reinforcements and
                                    Re-bar cover blocks. We are
                                    authorized dealers for Orange,
                                    Nippolac paints, S-lon, Jat holdings,
                                    National PVC, Kevilton, Kelani cables
                                    and other general hardware."
                                bgImage="images/manufacting_trading.jpeg"
                            />
                        </CardColumn>
                    </>
                        :
                        <>
                            <AngleCard 
                                stringId="01"
                                isFirst={true}
                                title="Design & Construction"
                                paragraph="Vontech provides you with construction
                                    you can truly count on. We undertake
                                    all types of construction from inception
                                    of smart homes, sustainable buildings
                                    and more. Our services also extend to
                                    any type of renovation."
                                bgImage="images/IMG_4152.jpg"
                            />
                            <AngleCard
                                isCommon={true}
                                stringId="02"
                                isSecond={true}
                                title="Concrete structures"
                                paragraph="We flawlessly execute the design and
                                    construction of any type of concrete
                                    structures, columns, beams & slabs.
                                    Our services are inclusive of supplying
                                    and installing formworks (plywood
                                    shuttering, rebar and concrete). "
                                bgImage="images/concrete_structure.jpeg"
                            />
                            <AngleCard 
                                isCommon={true}
                                stringId="04"
                                isFourth={true}
                                title="Concrete repair"
                                paragraph="We execute any type of concrete
                                    repairing or masonry work, as well as
                                    undertaking the renovations of
                                    concrete structures such as slabs,
                                    beams, columns, and more. Our
                                    services further include repairing water
                                    tanks, damaged on walls and so on."
                                bgImage="images/concrete_repair.jpeg"
                            />
                            <AngleCard 
                                isCommon={true}
                                stringId="03"
                                title="Waterproofing & chemicals"
                                paragraph="We are authorized applicators for a
                                    reputed waterproofing company M/s
                                    HE Engineering (Pvt). We commit to
                                    providing you with superior quality
                                    waterproofing of all types: roof tops,
                                    restrooms, balconies, exterior walls,
                                    and so much more, with a ten-year
                                    warranty period."
                                bgImage="images/waterproofing.jpeg"
                            />
                            <AngleCard 
                                isCommon={true}
                                stringId="05"
                                title="Manufacturing & trading"
                                paragraph="We are the reliable suppliers of
                                    Cement, Steel for reinforcements and
                                    Re-bar cover blocks. We are
                                    authorized dealers for Orange,
                                    Nippolac paints, S-lon, Jat holdings,
                                    National PVC, Kevilton, Kelani cables
                                    and other general hardware."
                                bgImage="images/manufacting_trading.jpeg"
                            />
                        </>
                    }
                </CardContainer>
            </Fade>
        </Container>
    )
}

export default ServicesProvided

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }

    padding: 0vw 5vw 5vw 5vw;
    background-color: #282828;

    > div > h2 {
        padding: 3vw;
        font-family: Gilroy-Bold;
        color: white;
        display: flex;
        font-size: 2.2vw;
        justify-content: center;
    }

    @media screen and (max-width: 950px) {
        padding: 0vw 2rem 2rem;

        > div > h2 {
            padding: 1rem;
            font-size: 1.7rem;
        }
    }
`

const CardContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: auto;
    flex-wrap: wrap;

    @media screen and (max-width: 1250px) {
        justify-content: space-around;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }    
`

const CardColumn = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`