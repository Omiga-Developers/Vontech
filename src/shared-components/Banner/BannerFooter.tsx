import styled from "styled-components"

const BannerFooter = () => {
    return (
        <Container>
            <ContainerTop>
                <img src="images/rics.png" alt="rics-logo" />
            </ContainerTop>
            <ContainerBottom>
                <div>
                    <a href="google.lk">Instagram</a>
                    |
                    <a href="google.lk">Facebook</a>
                    |
                    <a href="google.lk">Linkedin</a>
                </div>
                <div>
                    <img src="images/cabe.jpg" alt="cabe-logo" />
                </div>
            </ContainerBottom>
        </Container>
    )
}

export default BannerFooter

const Container = styled.div `
`

const ContainerTop = styled.div `
    display: flex;
    justify-content: flex-end;
    padding-right: 3vw;

    > img {
        width: 7vw;
        object-fit: contain;
    }
`

const ContainerBottom = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 0 3vw 2vw 6vw;
    color: white;

    > div:first-child {
        display: flex;
        align-items: flex-end;
    }

    > div {
        > a {
            font-size: 1vw;
            color: white;
            padding: 0vw 1vw;
            text-decoration: none;
        }
    }
    
    > div {
        > img {
            width: 7vw;
            object-fit: contain;
        }
    }
`