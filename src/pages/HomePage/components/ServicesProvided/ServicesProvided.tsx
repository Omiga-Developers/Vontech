import styled from "styled-components"
import AngleCard from "./AngleCard"

const ServicesProvided = () => {
    return (
        <Container>
            <h2>Services we provide</h2>
            <CardContainer>
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
                        title="Concrete structures"
                        paragraph="We flawlessly execute the design and
                            construction of any type of concrete
                            structures, columns, beams & slabs.
                            Our services are inclusive of supplying
                            and installing formworks (plywood
                            shuttering, rebar and concrete). "
                        bgImage="images/concrete structure.jpeg"
                    />
                    <AngleCard 
                        isCommon={true}
                        stringId="04"
                        isConcreteRepair={true}
                        title="Concrete repair"
                        paragraph="We execute any type of concrete
                            repairing or masonry work, as well as
                            undertaking the renovations of
                            concrete structures such as slabs,
                            beams, columns, and more. Our
                            services further include repairing water
                            tanks, damaged on walls and so on."
                        bgImage="images/concrete repair.jpeg"
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
                        bgImage="images/manufacting & trading.jpeg"
                    />
                </CardColumn>
            </CardContainer>
        </Container>
    )
}

export default ServicesProvided

const Container = styled.div `
    padding: 0vw 5vw 5vw 5vw;
    background-color: #1c1c8b;

    > h2 {
        padding: 3vw;
        color: white;
        display: flex;
        font-size: 2.2vw;
        justify-content: center;
    }
`

const CardContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 47vw;
`

const CardColumn = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`