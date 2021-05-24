import styled from "styled-components"
import Banner from "../../shared-components/Banner/Banner"
import TopbarContactUs from "../../shared-components/TopbarContactUs"
import AboutUs from "./components/AboutUs"
import OurProducts from "./components/OurProducts/OurProducts"
import RecentProjects from "./components/RecentProjects"
import ServicesProvided from "./components/ServicesProvided/ServicesProvided"
import Sponsor from "./components/Sponsor"

const HomePage = () => {
    return (
        <Container>
            <TopbarContactUs />
            <Banner />
            <ServicesProvided />
            <AboutUs />
            <Sponsor />
            <RecentProjects />
            <OurProducts />
        </Container>
    )
}

export default HomePage

const Container = styled.div `
`