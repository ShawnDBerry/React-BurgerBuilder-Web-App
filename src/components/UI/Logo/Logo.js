import React from 'react';
import classes from './Logo.css';
import logoImage from '../../../assets/images/127 burger-logo.png';

const logo = props => (
    <div className={classes.Logo}>
        <img src={logoImage} alt="BURGER LOGO"/>
    </div>
);

export default logo;