import styled from "styled-components"

const RequestQuote = () => {
    return (
        <Container>
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
    padding: 4vw;
    background-color: #1c1c8b;

    > h2 {
        color: white;
        margin-bottom: 3vw;
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
            color: black;
        }
    }
`

const TextInput = styled.input `
    padding: 1.2vw 12vw 1.2vw 1.2vw;
`

const OptionInput = styled.select `
    padding: 1.2vw 12.5vw 1.2vw 1.2vw;
    /* appearance: none; */

    > option {
        background-color: black;
        color: white;
        :hover {
            background-color: red;
        }
    }
`

const TextfieldInput = styled.textarea `
    width: 100%;
    padding: 1.2vw;
    resize: none;
    clip-path: polygon(0 0, 96% 0, 100% 14%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
`

const AngleButton = styled.button `
    clip-path: polygon(0 0, 92% 0, 100% 46%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    background-color: #44f;
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
        color: #44f;
        background-color: white;
    }
`