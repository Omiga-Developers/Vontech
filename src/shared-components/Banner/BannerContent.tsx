import styled from "styled-components"

declare type angledButtonProps = {
    isBlue: boolean;
}

const BannerContent = () => {
    return (
        <Container>
            <h1>Providing effective</h1>
            <h1>construction solutions.</h1>
            <AngledButton isBlue={true}><a href="#requestQuote">Request a quote</a></AngledButton>
            <AngledButton isBlue={false}><a href="#contactUs">Contact us</a></AngledButton>
        </Container>
    )
}

export default BannerContent

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    color: white;
    padding-left: 6vw;
    margin-top: 8vw;

    > h1 {
        font-size: 3vw;
    }

    @media screen and (max-width: 950px) and (min-width: 768px) {
        padding-left: 2rem;
        margin-top: 2.5rem;

        > h1 {
            font-size: 2rem;
        }
    }

    @media screen and (max-width: 768px) {
        padding-left: 2rem;
        margin-top: 2.5rem;
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: flex-end;

        > h1 {
            font-size: 2rem;
        }

        h1:nth-child(2) {
            margin-bottom: 3rem;
        }
    }
`  

const AngledButton = styled.button<angledButtonProps> `
    font-family: Gilroy-Medium;
    font-size: 1.2vw;
    padding: 0.2vw 0.5vw 0.3vw 0.5vw;
    margin: 1vw 2vw 0 0;
    clip-path: polygon(0 0, 92% 0, 100% 46%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    color: #3E63EC;

    > a {
        font-family: Gilroy-Medium;
        text-decoration: none;
    }

    background-color: white;
    border: 1px solid white;
    transition: 0.2s ease;

    :hover {
        background-color: #3E63EC;
        border-color: #3E63EC;
        color: white;
        cursor: pointer;
    }

    ${({ isBlue }) => (
        isBlue ? `
            padding: 0.2vw 1vw 0.3vw 1vw;
            color: white;
            border-color: #3E63EC;
            background-color: #3E63EC;

            > a {
                color: white;
            }

            :hover {
                color: #3E63EC;
                background-color: white;
                border-color: white;

                > a {
                    color: #3E63EC;
                }
            }
        ` : `
            > a {
                color: #3E63EC;
            }

            :hover {
                > a {
                    color: white;
                }
            }
        `
    )}

    @media screen and (max-width: 950px) and (min-width: 768px) {
        font-size: 1rem;
        padding: 0.3rem 0.4rem 0.3rem 0.4rem;
        margin: 0.5rem 1rem 0 0;
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        padding: 0.3rem 1rem 0.3rem 1rem;
        margin: 0.5rem 1rem 0 0;
        width: 10rem;

        :last-child {
            margin-top: 1.5rem;
        }
    }
`