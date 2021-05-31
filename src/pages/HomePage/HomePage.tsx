import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core"
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

const HomePage = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, [])

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
                        <Button onClick={() => setOpen(false)} color="primary" autoFocus>
                            Subscribe
                        </Button>
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
                    {/* <JoinTeam /> */}
                    <Footer />
                </Container>
            </Route>
        </Switch>
    )
}

export default HomePage

const Container = styled.div `
    background-color: rgba(0, 0, 0, 0.8)
`