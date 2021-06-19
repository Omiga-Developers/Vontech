import { Button, Divider, List, ListItem, ListItemText, makeStyles, SwipeableDrawer } from "@material-ui/core";
import React, { useState } from "react";
import clsx from 'clsx';
import styled from "styled-components";

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

type Anchor = 'top';

declare type DrawableSidebarProps = {
    isDifferent?: boolean;
}

const DrawableSidebar = ({ isDifferent } : DrawableSidebarProps) => {
    const classes = useStyles();
	const [state, setState] = useState({
		top: false,
	});

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        try {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
        } catch(error) {}

		setState({ ...state, [anchor]: open });
	};

    const list = (anchor: Anchor) => (
		<div
			className={clsx(classes.list)}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
            <StyledList>
                <StyledListItem button key="Services">
                    <a href={isDifferent ? "/#services" : "#services"}><ListItemText primary="Services" /></a>
                </StyledListItem>
                <StyledListItem button key="About us">
                    <a href={isDifferent ? "/#trust" : "#trust"}><ListItemText primary="About us" /></a>
                </StyledListItem>
                <StyledListItem button key="Projects">
                    <a href={isDifferent ? "/#projects" : "#projects"}><ListItemText primary="Projects" /></a>
                </StyledListItem>
                <StyledListItem button key="Careers">
                    <a href="/careers"><ListItemText primary="Careers" /></a>
                </StyledListItem>
                <StyledListItem button key="Contact us">
                    <a href={isDifferent ? "/#contactUs" : "#contactUs"}><ListItemText primary="Contact us" /></a>
                </StyledListItem>
            </StyledList>
            <Divider />
		</div>
	);

    return (
        <Container>
            <div>
                <img src="images/logo.png" alt="logo" />    
            </div>
            <div>
                <React.Fragment key="top">
                    <Button onClick={toggleDrawer('top', true)}>
                            <img alt="menu" style={{ height: '1.5rem', objectFit: 'contain' }}  src="images/Website-04.png" />
                    </Button>
                    <SwipeableDrawer onOpen={toggleDrawer('top', true)} anchor="top" open={state['top']} onClose={toggleDrawer('top', false)}>
                        {list('top')}
                    </SwipeableDrawer>
                </React.Fragment>
            </div>
        </Container>
    )
}

export default DrawableSidebar

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    display: none;
    background-color: #282828;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 600px) {
        display: flex;
        align-items: center;
        padding: 1rem;
        justify-content: space-between;

        > div:first-child {
            > img {
                height: 3rem;
                object-fit: contain;
            }
        }
    }
`

const StyledList = styled(List) `
    background-color: #282828;
    width: 100vw;
    color: white;
    font-family: Gilroy-Medium;
`

const StyledListItem = styled(ListItem) `
    a  {
        color: white;
        text-decoration: none;
        text-align: center;
        width: 100%;
    }
    a > div > span {
        font-family: Gilroy-Medium;
    }
`