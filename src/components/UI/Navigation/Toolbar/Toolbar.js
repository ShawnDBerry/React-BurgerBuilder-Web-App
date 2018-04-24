import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawToggle from '../Sidedraw/SidedrawToggler/SidedrawToggler'; 
const toolbar = props => (
    <header className={classes.Toolbar}>
        <SideDrawToggle click={props.toggleSideDraw}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems></NavigationItems>

        </nav>
    </header>

);
export default toolbar;