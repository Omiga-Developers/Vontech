import styled from "styled-components"

const AboutUs = () => {
    return (
        <Container>
            <div style={{ flex: 0.25 }}>
                <img style={{ marginBottom: '0.8vw' }} src="images/rics.png" alt="rics-logo" />
                <img src="images/cabe.jpg" alt="cabe-logo" />
            </div>
            <div style={{ flex: 0.35}}>
                <p>
                    Vontech is with you at every step in the
                    construction of your project. We aid in securing
                    bank loans and undertake the design and
                    creation of your building. We also offer
                    management and maintenance.
                </p>
                <p>
                    Our team brings specialist knowledge, fresh
                    thinking and over 25 years of experience.
                </p>
            </div>
            <div style={{ flex: 0.35}}>
                <p>
                    We provide vital help in coordinating with local
                    authorities for water, electricity & telephone
                    connections etc. At Vontech, we place
                    importance on sustainable living.
                </p>
                <p>
                    Hence, we provide sustainability options, such as
                    solar power, etc.
                </p>
            </div>
        </Container>
    )
}

export default AboutUs

const Container = styled.div `
    display: flex;
    justify-content: space-around;
    color: white;
    background-color: #44f;
    padding: 1vw 4vw 1vw 1vw;

    p {
        font-size: 1.25vw;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1vw;

        > img {
            width: 11vw;
            object-fit: contain;
        }
    }
`