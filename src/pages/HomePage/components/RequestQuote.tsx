import { useEffect, useState } from "react";
import styled from "styled-components"
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';

const RequestQuote = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [service, setService] = useState<string>("");
    const [budget, setBudget] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        init("user_guvhQe6JcKughJlaIbWSi");
    }, [])

    const handleSubmit = (e : any) => {
        e.preventDefault();
        if (name && email && phone && service && budget && location && message) {
            let templateParams = {
                from_name: name,
                email,
                tel_num: phone,
                budget,
                service,
                location,
                message
            };
            emailjs.send('service_jepz6ns', 'template_f1l11pl', templateParams)
                .then(response => alert("We have received your email!"))
                // .catch(e => alert("something went wrong!"));
        } else {
            alert("Please fill in all the fields")
        }
    }

    return (
        <Container id="requestQuote">
            <h2>Or request a quote</h2>
            <div>
                <RowContainer>
                    <TextInput changeBg={name} name="from_name" onChange={e => setName(e.target.value)} value={name} placeholder="Your Name" />
                    <TextInput changeBg={email}  name="email" onChange={e => setEmail(e.target.value)}  value={email} placeholder="Email Address" />
                </RowContainer>
                <RowContainer>
                    <TextInput changeBg={phone} name="tel_num" onChange={e => setPhone(e.target.value)}  value={phone} placeholder="Phone Number" />
                    <OptionInput changeBg={service} name="service" value={service} onChange={e => setService(e.target.value)} defaultValue="Service">
                        <option selected disabled hidden>Service</option>
                        <option disabled>&nbsp;</option>
                        <option value="Design and construction">Design and construction</option>
                        <option disabled>&nbsp;</option>
                        <option value="Concrete structures">Concrete structures</option>
                        <option disabled>&nbsp;</option>
                        <option value="Waterproofing">Waterproofing</option>
                        <option disabled>&nbsp;</option>
                        <option value="Concrete repairs">Concrete repairs</option>
                        <option disabled>&nbsp;</option>
                        <option value="Manufacturing & trading">Manufacturing & trading</option>
                        <option disabled>&nbsp;</option>
                        <option value="Other services.">Other services.</option>
                        <option disabled>&nbsp;</option>
                    </OptionInput>
                </RowContainer>
                <RowContainer>
                    <TextInput changeBg={budget}  name="budget" onChange={e => setBudget(e.target.value)}  value={budget} placeholder="Your Budget" />
                    <TextInput changeBg={location}  name="location" onChange={e => setLocation(e.target.value)}  value={location} placeholder="Location of site" />
                </RowContainer>
                <RowContainer>
                    <TextfieldInput changeBg={message} name="message" onChange={e => setMessage(e.target.value)}  value={message} rows={8} placeholder="Write a message" />
                </RowContainer>
            </div>
            <div>
                <AngleButton onClick={handleSubmit}>Request quote</AngleButton>
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
    background-color: #202630;

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

    @media screen and (max-width: 1200px) {
        > h2 {
            font-size: 2rem;
        }
    }

    @media screen and (max-width: 600px) {
        padding: 1.5rem;

        > h2 {
            margin-bottom: 1.5rem;
            font-size: 2rem;
            width: 100%;
            text-align: center;
        }
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
            color: #262626;
            color: white;
        }
    }

    @media screen and (max-width: 1200px) {
        width: 100%;

        > * {
            font-size: 0.8rem;
            margin: 1rem 0;
        }
    }

    @media screen and (max-width: 800px) {
        > * {
            font-size: 0.8rem;
            margin: 0.7rem 0;
        }
    }

    @media screen and (max-width: 700px) {
        width: 60%;
        flex-direction: column;
    }

    @media screen and (max-width: 450px) {
        width: 80%;
    }
`

declare type TextInputProps = {
    changeBg: string;
}

const TextInput = styled.input<TextInputProps> `
    font-family: Gilroy-Medium;
    padding: 1.2vw 0.5vw;
    flex: 1;
    background-color: #3E63EC;
    max-width: 48%;
    color: white;
    clip-path: polygon(0 0, 92% 0, 100% 40%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);

    ${({ changeBg }) => (
        changeBg !== '' && `
            color: #3E63EC;
            background-color: white;
        `
    )}

    @media screen and (max-width: 700px) {
        max-width: 100%;
        padding: 0.7rem 0.4rem;
        clip-path: polygon(0 0, 93% 0, 100% 50%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    }
`

declare type OptionProps = {
    changeBg: string;
}

const OptionInput = styled.select<OptionProps> `
    background-image: url(images/down-arrow.png);
    clip-path: polygon(0 0, 92% 0, 100% 40%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    background-repeat: no-repeat;
    background-position: 93%;
    background-color: #3E63EC;
    color: white;
    background-size: 5%;
    font-family: Gilroy-Regular;
    padding: 1.2vw 0.5vw;
    appearance: none;
    flex: 1;
    max-width: 48%;

    > option {
        font-family: Gilroy-Medium;
        background-color: #262626;
        color: white;

        :hover {
            background-color: red;
        }
    }

    ${({ changeBg }) => (
        changeBg !== '' && `
            color: #3E63EC;
            background-color: white;
        `
    )}

    @media screen and (max-width: 700px) {
        max-width: 100%;
        background-size: 4%;
        padding: 0.7rem 0.4rem;
        clip-path: polygon(0 0, 92.5% 0, 100% 50%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    }
`


declare type TextFieldInputProps = {
    changeBg: string;
}

const TextfieldInput = styled.textarea<TextFieldInputProps> `
    font-family: Gilroy-Medium;
    background-color: #3E63EC;
    width: 100%;
    padding: 1.2vw;
    color: white;
    resize: none;
    clip-path: polygon(0 0, 96% 0, 100% 10%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);

    ${({ changeBg }) => (
        changeBg !== '' && `
            color: #3E63EC;
            background-color: white;
        `
    )}

    @media screen and (max-width: 700px) {
        clip-path: polygon(0 0, 93% 0, 100% 14%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    }
`

const AngleButton = styled.button `
    font-family: Gilroy-Bold;
    clip-path: polygon(0 0, 92% 0, 100% 46%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    color: #3E63EC;
    background-color: white;
    border: none;
    font-weight: bold;
    padding: 1.3vw 0;
    width: 25%;
    font-size: 1.4vw;
    margin-top: 0.5vw;
    transition: 0.2s ease;

    :hover {
        cursor: pointer;
        background-color: #3E63EC;
        color: white;
    }

    @media screen and (max-width: 1200px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 700px) {
        clip-path: polygon(0 0, 92% 0, 100% 40%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
        margin: 0.7rem 0;
        font-size: 1rem;
        padding: 0.6rem;
        width: 60%;
    }

    @media screen and (max-width: 450px) {
        width: 80%;
    }
`