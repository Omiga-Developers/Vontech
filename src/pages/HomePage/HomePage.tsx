import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core"
import emailjs from "emailjs-com";
import { init } from "emailjs-com"
import { useEffect, useState } from "react"
import { Route, Switch } from "react-router"
import styled from "styled-components"
import Banner from "../../shared-components/Banner/Banner"
import DrawableSidebar from "../../shared-components/DrawableSidebar";
import Footer from "../../shared-components/Footer"
import Navbar from "../../shared-components/Navbar"
import TopbarContactUs from "../../shared-components/TopbarContactUs"
import AboutUs from "./components/AboutUs";
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
    const [open, setOpen] = useState<boolean>(false);
    const [subscribed, setSubscribed] = useState<boolean>(false);
    const [fullName, setFullName] = useState<string>();
    const [city, setCity] = useState<string>();
    const [telNum, setTelNum] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        const listener : any = window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });

        return window.removeEventListener('resize', listener);
    }, [width])

    useEffect(() => {
        setOpen(true);
        init("user_guvhQe6JcKughJlaIbWSi");
    }, [])

    const subscribe = () => {
        if (fullName && city && telNum && email) {
            let templateParams = {
                full_name: fullName,
                email,
                city,
                tel_num: telNum,
            };
            emailjs.send('service_5jn5kxc', 'template_b9posiq', templateParams)
            .then(response => alert("We have received your email!"))
            // .catch(e => alert("something went wrong!"));

            setSubscribed(true);
            setOpen(false);
        } else {
            alert("Please fill in all the fields")
        }
    }

    return (
        <Switch>
            <Route exact path="/careers">
                <Container style={{ backgroundColor: '#1C4193' }}>
                    <DrawableSidebar isDifferent={true}  />
                    <Navbar isDifferent={true} />
                    <JoinTeam />
                    <Footer width={width} />
                </Container>
            </Route>
            <Route path="/">
                {width > 640 &&
                    <>
                        <Dialog
                            open={subscribed}
                            onClose={() => setSubscribed(false)}
                            aria-labelledby="alert-dialog-title-sub"
                            aria-describedby="alert-dialog-description"
                            id="alert-dialog-background-color"
                            PaperProps={{
                                style: {
                                    backgroundColor: '#282828',
                                }
                            }}
                        >
                            <DialogTitle style={{ color: 'white', flex: '1', display: 'flex', alignItems: 'center' }} id="alert-dialog-title-sub">
                                Thank you! <br />for subscribing
                            </DialogTitle>
                        </Dialog>
                        <Dialog
                            open={open}
                            onClose={() => setOpen(false)}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle style={{ color: '#3E63EC' }} id="alert-dialog-title">
                                Stay updated with our services, offers and projects!
                            </DialogTitle>
                            <DialogContent>
                                <div>
                                    <TextField label="Full Name" onChange={e => setFullName(e.target.value)} value={fullName} />
                                    <TextField label="City" onChange={e => setCity(e.target.value)} value={city} />
                                </div>
                                <div>
                                    <TextField label="Phone Number" onChange={e => setTelNum(e.target.value)} value={telNum} />
                                    <TextField label="Email" onChange={e => setEmail(e.target.value)} value={email} />
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <AngledButton onClick={subscribe}>Subscribe</AngledButton>
                            </DialogActions>
                            <DialogContent>
                                <DialogContentText>
                                    <a href="https://google.lk">Instagram</a>
                                    |
                                    <a href="https://google.lk">Facebook</a>
                                    |
                                    <a href="https://google.lk">Linkedin</a>
                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    </>
                }
                <Container>
                    <TopbarContactUs />
                    <DrawableSidebar isDifferent={false}  />
                    <Navbar isDifferent={false} />
                    <Banner />
                    <ServicesProvided width={width} />
                    <Trust width={width} />
                    <AboutUs width={width} />
                    <Sponsor />
                    <RecentProjects width={width} />
                    <Articles />
                    <OurProducts width={width} />
                    <ContactUs width={width} />
                    <RequestQuote />
                    <Footer width={width} />
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
    margin: 2vw 0 1.5vw 0;
    clip-path: polygon(0 0, 86% 0, 100% 44%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    color: white;

    background-color: #3E63EC;
    border: 1px solid #3E63EC;
    transition: 0.2s ease;

    :hover {
        background-color: #fafafa;
        border-color: white;
        color: #3E63EC;
        cursor: pointer;
    }

    @media screen and (max-width: 1200px) {
        font-size: 1.2rem;
        padding: 0.3rem 1.7rem;
        margin: 1.5rem 0 1rem 0;
    }
`