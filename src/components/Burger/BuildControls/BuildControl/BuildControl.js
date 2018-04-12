import React from 'react';
import classes from './BuildControl.css'

const buildControl = props => {
    return (
        <div className={classes.BuildControl}>
            <label className={classes.Label}>{props.label}</label>
                <button className={classes.More} onClick={props.added}>More</button>
                <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        </div>
    );
};

export default buildControl;