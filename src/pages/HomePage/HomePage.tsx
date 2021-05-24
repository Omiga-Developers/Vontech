import styled from "styled-components"
import Banner from "../../shared-components/Banner/Banner"
import TopbarContactUs from "../../shared-components/TopbarContactUs"
import ServicesProvided from "./components/ServicesProvided"

const HomePage = () => {
    return (
        <Container>
            <TopbarContactUs />
            <Banner />
            <ServicesProvided />
        </Container>
    )
}

export default HomePage

const Container = styled.div `
`