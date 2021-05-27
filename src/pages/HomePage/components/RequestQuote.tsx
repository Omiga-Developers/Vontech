import styled from "styled-components"

const RequestQuote = () => {
    return (
        <Container id="requestQuote">
            <h2>Or request a quote</h2>
            <div>
                <RowContainer>
                    <TextInput placeholder="Your Name" />
                    <TextInput placeholder="Email Address" />
                </RowContainer>
                <RowContainer>
                    <TextInput placeholder="Phone Number" />
                    <OptionInput defaultValue="Service">
                        <option selected disabled hidden>Service</option>
                        <option disabled>&nbsp;</option>
                        <option>Design and construction</option>
                        <option disabled>&nbsp;</option>
                        <option>Concrete structures</option>
                        <option disabled>&nbsp;</option>
                        <option>Waterproofing</option>
                        <option disabled>&nbsp;</option>
                        <option>Concrete repairs</option>
                        <option disabled>&nbsp;</option>
                        <option>Manufacturing & trading</option>
                        <option disabled>&nbsp;</option>
                        <option>Other services.</option>
                        <option disabled>&nbsp;</option>
                    </OptionInput>
                </RowContainer>
                <RowContainer>
                    <TextInput placeholder="Your Budget" />
                    <TextInput placeholder="Location of site" />
                </RowContainer>
                <RowContainer>
                    <TextfieldInput rows={8} placeholder="Write a message" />
                </RowContainer>
            </div>
            <div>
                <AngleButton>Request quote</AngleButton>
            </div>
        </Container>
    )
}

export default RequestQuote

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    padding: 4vw;
    background-color: #1C4193;

    > h2 {
        color: white;
        margin-bottom: 3vw;
        font-family: Gilroy-Bold;
        font-size: 2.2vw;
    }   

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const RowContainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 62%;

    > * {
        margin: 1.2vw 0;
        clip-path: polygon(0 0, 92% 0, 100% 40%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
        outline: none;
        border: none;
        font-size: 1.1vw;

        ::placeholder {
            color: #262626;
        }
    }
`

const TextInput = styled.input `
    font-family: Gilroy-Medium;
    padding: 1.2vw 13vw 1.2vw 1.2vw;
`

const OptionInput = styled.select `
    font-family: Gilroy-Medium;
    padding: 1.2vw 11.5vw 1.2vw 1.2vw;

    > option {
        font-family: Gilroy-Medium;
        background-color: #262626;
        color: white;

        :hover {
            background-color: red;
        }
    }
`

const TextfieldInput = styled.textarea `
    font-family: Gilroy-Medium;
    width: 100%;
    padding: 1.2vw;
    resize: none;
    clip-path: polygon(0 0, 96% 0, 100% 14%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
`

const AngleButton = styled.button `
    font-family: Gilroy-Bold;
    clip-path: polygon(0 0, 92% 0, 100% 46%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    background-color: #3E63EC;
    color: white;
    border: none;
    font-weight: bold;
    padding: 1.3vw 0;
    width: 25%;
    font-size: 1.4vw;
    margin-top: 0.5vw;
    transition: 0.2s ease;

    :hover {
        cursor: pointer;
        color: #3E63EC;
        background-color: white;
    }
`