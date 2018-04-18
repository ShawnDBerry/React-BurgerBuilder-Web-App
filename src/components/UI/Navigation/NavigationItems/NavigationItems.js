import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>BurgerBuilder</NavigationItem>
        <NavigationItem link="/">Check-Out</NavigationItem>
    </ul>
);

export default navigationItems;