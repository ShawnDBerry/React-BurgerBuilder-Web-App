import React from 'react';
import classes from './Backdrop.css';
const backdrop = props => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}><h1> WHHATTTS THE DEAL</h1></div> : null
);

export default backdrop;