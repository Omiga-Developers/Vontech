import styled from "styled-components"
import Banner from "../../shared-components/Banner/Banner"
import TopbarContactUs from "../../shared-components/TopbarContactUs"

const HomePage = () => {
    return (
        <Container>
            <TopbarContactUs />
            <Banner />
        </Container>
    )
}

export default HomePage

const Container = styled.div `
`