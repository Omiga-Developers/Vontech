import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core"
import { useEffect, useState } from "react"
import { Route, Switch } from "react-router"
import styled from "styled-components"
import Banner from "../../shared-components/Banner/Banner"
import Footer from "../../shared-components/Footer"
import Navbar from "../../shared-components/Navbar.jsx"
import TopbarContactUs from "../../shared-components/TopbarContactUs"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import JoinTeam from "./components/JoinTeam/JoinTeam"
import Articles from "./components/NewsArticles/Articles"
import OurProducts from "./components/OurProducts/OurProducts"
import RecentProjects from "./components/RecentProjects"
import RequestQuote from "./components/RequestQuote"
import ServicesProvided from "./components/ServicesProvided/ServicesProvided"
import Sponsor from "./components/Sponsor"
import Trust from "./components/Trust/Trust"
import './dialog.css'

const HomePage = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, [])

    const subscribe = () => {

    }

    return (
        <Switch>
            <Route exact path="/careers">
                <Container style={{ backgroundColor: '#1C4193' }}>
                    <Navbar isDifferent={true} />
                    <JoinTeam />
                    <Footer />
                </Container>
            </Route>
            <Route path="/">
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Stay updated with our services, offers and projects!</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <AngledButton onClick={subscribe}>Subscribe</AngledButton>
                    </DialogActions>
                </Dialog>
                <Container>
                    <TopbarContactUs />
                    <Navbar isDifferent={false} />
                    <Banner />
                    <ServicesProvided />
                    <Trust />
                    <AboutUs />
                    <Sponsor />
                    <RecentProjects />
                    <Articles />
                    <OurProducts />
                    <ContactUs />
                    <RequestQuote />
                    <Footer />
                </Container>
            </Route>
        </Switch>
    )
}

export default HomePage

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    background-color: rgba(0, 0, 0, 0.8)
`

const AngledButton = styled.button `
    font-family: Gilroy-Bold;
    font-size: 1.5vw;
    padding: 0.5vw 2vw;
    margin: 1vw 2vw 0 0;
    clip-path: polygon(0 0, 92% 0, 100% 46%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    color: white;

    background-color: #3E63EC;
    border: 1px solid #3E63EC;
    transition: 0.2s ease;

    :hover {
        background-color: white;
        border-color: white;
        color: #3E63EC;
        cursor: pointer;
    }
`