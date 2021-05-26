import styled from 'styled-components';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
                    <div>
                        x
                    </div>
                </CrossContainer>
            </ContainerRight>
        </Container>
    )
}

export default TopbarContactUs

const Container = styled.div `
    display: flex;
    padding: 1vw 4vw;
    justify-content: space-between;
    color: #3E63EC;
    font-size: 1.1vw;
`

const ContainerLeft = styled.div `
    display: flex;
    align-items: center;
    flex: 0.6;

    > p {
        font-weight: bold;
    }
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
`