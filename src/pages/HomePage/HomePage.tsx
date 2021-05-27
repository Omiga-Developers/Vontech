import styled from "styled-components"
import Banner from "../../shared-components/Banner/Banner"
import Footer from "../../shared-components/Footer"
import Navbar from "../../shared-components/Navbar.jsx"
import TopbarContactUs from "../../shared-components/TopbarContactUs"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import JoinTeam from "./components/JoinTeam/JoinTeam"
import Articles from "./components/NewsArticles/Articles"
import OurProducts from "./components/OurProducts/OurProducts"
import RecentProjects from "./components/RecentProjects"
import RequestQuote from "./components/RequestQuote"
import ServicesProvided from "./components/ServicesProvided/ServicesProvided"
import Sponsor from "./components/Sponsor"
import Trust from "./components/Trust/Trust"

const HomePage = () => {
    return (
        <Container>
            <TopbarContactUs />
            <Navbar />
            <Banner />
            <ServicesProvided />
            <Trust />
            <AboutUs />
            <Sponsor />
            <RecentProjects />
            <Articles />
            <OurProducts />
            <ContactUs />
            <RequestQuote />
            <JoinTeam />
            <Footer />
        </Container>
    )
}

export default HomePage

const Container = styled.div `
    background-color: rgba(0, 0, 0, 0.8)
`