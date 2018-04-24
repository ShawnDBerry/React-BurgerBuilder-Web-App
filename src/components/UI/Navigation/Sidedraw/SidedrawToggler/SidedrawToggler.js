import React from 'react';
import classes from './SidedrawToggler.css';

const DrawToggle = props => {
    return (
        <div className={classes.DrawerToggle} onClick={props.click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawToggle;