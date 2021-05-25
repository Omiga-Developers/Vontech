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
                    <OptionInput>
                        <option>Design and construction</option>
                        <option>Concrete structures</option>
                        <option>Waterproofing</option>
                        <option>Concrete repairs</option>
                        <option>Manufacturing & trading</option>
                        <option>Other services.</option>
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
        </Container>
    )
}

export default RequestQuote

const Container = styled.div `
    padding: 4vw;
    background-color: #1c1c8b;

    > h2 {
        color: white;
        margin-bottom: 4vw;
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
`

const TextfieldInput = styled.textarea `
    width: 100%;
    padding: 1.2vw;
`