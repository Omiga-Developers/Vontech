import { useEffect, useState } from "react";
import styled from "styled-components"
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';

const RequestQuote = () => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [service, setService] = useState<string>();
    const [budget, setBudget] = useState<string>();
    const [location, setLocation] = useState<string>();
    const [message, setMessage] = useState<string>();

    useEffect(() => {
        init("user_ktwd7JvhbZ4wVGiRb3sDq");
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
            emailjs.send('service_q0765ni', 'vontech_contact_us', templateParams)
                .then(response => alert("We have received your email successfully!"))
                .catch(e => alert("something went wrong!"));
        } else {
            alert("Please fill in all the fields")
        }
    }

    return (
        <Container id="requestQuote">
            <h2>Or request a quote</h2>
            <div>
                <RowContainer>
                    <TextInput name="from_name" onChange={e => setName(e.target.value)} value={name} placeholder="Your Name" />
                    <TextInput name="email" onChange={e => setEmail(e.target.value)}  value={email} placeholder="Email Address" />
                </RowContainer>
                <RowContainer>
                    <TextInput name="tel_num" onChange={e => setPhone(e.target.value)}  value={phone} placeholder="Phone Number" />
                    <OptionInput name="service" value={service} onChange={e => setService(e.target.value)} defaultValue="Service">
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
                    <TextInput name="budget" onChange={e => setBudget(e.target.value)}  value={budget} placeholder="Your Budget" />
                    <TextInput name="location" onChange={e => setLocation(e.target.value)}  value={location} placeholder="Location of site" />
                </RowContainer>
                <RowContainer>
                    <TextfieldInput name="message" onChange={e => setMessage(e.target.value)}  value={message} rows={8} placeholder="Write a message" />
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
    padding: 1.2vw 0.5vw;
    flex: 1;
    max-width: 48%;
`

const OptionInput = styled.select `
    font-family: Gilroy-Medium;
    padding: 1.2vw 0.5vw;
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