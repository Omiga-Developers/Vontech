import styled from 'styled-components';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useState } from 'react';

const TopbarContactUs = () => {
    const [show, setShow] = useState<boolean>(true);

    return (
        <Container show={show}>
            <ContainerLeft>
                <p>Professionals in contruction & maintance, always at your disposal.</p>
            </ContainerLeft>
            <ContainerRight>
                <TelNumContainer>
                    <div>
                        <PhoneIphoneIcon />
                        <WhatsAppIcon />
                    </div>
                    <div>
                        <p>Call or Whatsapp</p>
                        <p>+94 773398875</p>
                        <p>+94 701864939</p>
                    </div>
                </TelNumContainer>
                <AddressContainer>
                    <div>
                        <LocationOnIcon />
                    </div>
                    <div>
                        <p>Visit us at</p>
                        <p>215/E, Colombo road, Nagoda, Kandana</p>
                    </div>
                </AddressContainer>
                <CrossContainer onClick={() => setShow(false)}>
                    <div>
                        x
                    </div>
                </CrossContainer>
            </ContainerRight>
        </Container>
    )
}

export default TopbarContactUs

declare type ContainerProps = {
    show: boolean;
}

const Container = styled.div<ContainerProps> `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }
    @font-face {
        font-family: Gilroy-Regular;
        src: url(fonts/Gilroy-Regular.ttf);
    }

    transition: 0.3s ease;
    display: flex;
    padding: 1vw 4vw;
    justify-content: space-between;
    color: #3E63EC;
    font-size: 1.1vw;

    ${({ show }) => (
        !show && `
            display: none;
        `
    )}
`

const ContainerLeft = styled.div `
    display: flex;
    align-items: center;
    flex: 0.6;

    > p {
        font-weight: bold;
        font-family: Gilroy-Bold;
    }
`

const ContainerRight = styled.div `
    display: flex;
    justify-content: space-between;
    flex: 0.4;

    > div > div {
        > p:first-child {
            font-family: Gilroy-Regular;
        }

        > p {
            font-family: Gilroy-Medium;
        }
    }
`

const TelNumContainer = styled.div `
    display: flex;
    flex: 0.45;

    > div:first-child {
        display: flex;
        align-items: flex-end;
        padding-bottom: 0.4vw;
    }

    > div:last-child {
        > p:first-child {
            font-size: 0.9vw;
            margin-bottom: 0.3vw;
        }
    }
` 

const AddressContainer = styled.div `
    display: flex;
    flex: 0.55;

    > div:first-child {
        display: flex;
        align-items: flex-end;
        padding-bottom: 0.4vw;
    }

    > div:last-child {
        > p:first-child {
            font-size: 0.9vw;
            margin-bottom: 0.3vw;
        }
    }
`

const CrossContainer = styled.div `
    display: flex;
    align-items: center;
    font-size: 1.2vw;
    color: white;

    > div {
        background-color: #3E63EC;
        padding: 0vw 0.5vw;
    }

    :hover {
        cursor: pointer;
    }
`