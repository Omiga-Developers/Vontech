import styled from 'styled-components';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CancelIcon from '@material-ui/icons/Cancel';
import { IconButton } from '@material-ui/core';
import React from 'react';

const TopbarContactUs = () => {
    return (
        <Container>
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
                <CrossContainer>
                    <IconButton>
                        <CancelIcon />
                    </IconButton>
                </CrossContainer>
            </ContainerRight>
        </Container>
    )
}

export default TopbarContactUs

const Container = styled.div `
    display: flex;
    padding: 2vw;
    background-color: red;
    justify-content: space-between;
`

const ContainerLeft = styled.div `
    display: flex;
    align-items: center;
    flex: 0.6;
`

const ContainerRight = styled.div `
    display: flex;
    justify-content: space-between;
    flex: 0.4;
`

const TelNumContainer = styled.div `
    display: flex;
    flex: 0.45;

    > div:first-child {
        display: flex;
        align-items: flex-end;
        padding-bottom: 0.4vw;
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
`

const CrossContainer = styled.div `
`