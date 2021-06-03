import { Button, Divider, Drawer, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
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

const DrawableSidebar = () => {
    const classes = useStyles();
	const [state, setState] = useState({
		top: false,
	});

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

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
                <ListItem button key="Services">
                    <ListItemText primary="Services" />
                </ListItem>
                <ListItem button key="About us">
                    <ListItemText primary="About us" />
                </ListItem>
                <ListItem button key="Projects">
                    <ListItemText primary="Projects" />
                </ListItem>
                <ListItem button key="Careers">
                    <ListItemText primary="Careers" />
                </ListItem>
                <ListItem button key="Contact us">
                    <ListItemText primary="Contact us" />
                </ListItem>
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
                            <MenuIcon style={{ color: 'white' }} />
                    </Button>
                    <Drawer anchor="top" open={state['top']} onClose={toggleDrawer('top', false)}>
                        {list('top')}
                    </Drawer>
                </React.Fragment>
            </div>
        </Container>
    )
}

export default DrawableSidebar

const Container = styled.div `
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
`