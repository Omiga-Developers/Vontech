import styled from "styled-components"

const BannerFooter = () => {
    return (
        <Container>
            <div>
                <a href="https://google.lk">Instagram</a>
                |
                <a href="https://google.lk">Facebook</a>
                |
                <a href="https://google.lk">Linkedin</a>
            </div>
            <div>
                <img src="images/rics.png" alt="rics-logo" />
                <img src="images/D9E58CBD.jpg" alt="cabe-logo" />
            </div>
        </Container>
    )
}

export default BannerFooter

const Container = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 0 3vw 2vw 6vw;
    color: white;

    > div:first-child {
        display: flex;
        align-items: flex-end;
    }

    > div:last-child {
        display: flex;
        flex-direction: column;
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