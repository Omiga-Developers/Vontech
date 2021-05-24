import styled from "styled-components"
import Banner from "../../shared-components/Banner/Banner"
import TopbarContactUs from "../../shared-components/TopbarContactUs"
import AboutUs from "./components/AboutUs"
import RecentProjects from "./components/RecentProjects"
import ServicesProvided from "./components/ServicesProvided"
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
        </Container>
    )
}

export default HomePage

const Container = styled.div `
`