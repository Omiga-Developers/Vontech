import styled from "styled-components"
import BannerContent from "./BannerContent"
import BannerFooter from "./BannerFooter"
import Navbar from "./Navbar"

const Banner = () => {
    return (
        <Container>
            <Navbar />
            <BannerContent />
            <BannerFooter />
        </Container>
    )
}

export default Banner

const Container = styled.div `
    background-image: url('images/roberto-nickson-so3wgJLwDxo-unsplash.jpg');
    display: flex;
    height: 45vw;
    background-size: 100% 100%;
    flex-direction: column;
    justify-content: space-between;
`