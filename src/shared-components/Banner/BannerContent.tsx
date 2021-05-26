import styled from "styled-components"

declare type angledButtonProps = {
    isBlue: boolean;
}

const BannerContent = () => {
    return (
        <Container>
            <h1>Providing effective</h1>
            <h1>construction solutions.</h1>
            <AngledButton isBlue={true}>Request a quote</AngledButton>
            <AngledButton isBlue={false}>Contact us</AngledButton>
        </Container>
    )
}

export default BannerContent

const Container = styled.div `
    color: white;
    padding-left: 6vw;
    margin-top: 8vw;

    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }

    > h1 {
        font-size: 3vw;
    }
`  

const AngledButton = styled.button<angledButtonProps> `
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    font-family: Gilroy-Medium;
    font-size: 1.2vw;
    padding: 0.2vw 0.5vw;
    margin: 1vw 2vw 0 0;
    clip-path: polygon(0 0, 92% 0, 100% 46%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    color: #3E63EC;

    background-color: white;
    border: 1px solid white;
    /* background-color: rgba(255, 255, 255, 0.05); */
    /* border: 1px solid rgba(255, 255, 255, 0.05); */
    transition: 0.2s ease;

    :hover {
        background-color: #3E63EC;
        border-color: #3E63EC;
        color: white;
        cursor: pointer;
    }

    ${({ isBlue }) => (
        isBlue && `
            color: white;
            border-color: #3E63EC;
            background-color: #3E63EC;
            :hover {
                color: #3E63EC;
                background-color: white;
                border-color: white;
            }
        `
    )}
`