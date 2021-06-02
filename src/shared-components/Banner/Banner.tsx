import styled from "styled-components"
import BannerContent from "./BannerContent"
import BannerFooter from "./BannerFooter"

const Banner = () => {
    return (
        <Container>
            <BannerContent />
            <BannerFooter />
        </Container>
    )
}

export default Banner

const Container = styled.div `
    background-image: url('images/1AA556D1.jpg');
    display: flex;
    height: 45vw;
    background-size: cover;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    @media screen and (max-width: 950px) and (min-width: 768px) {
        height: 25rem;
    }

    @media screen and (max-width: 768px) {
        height: 35rem;
    }
`