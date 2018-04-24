import React from 'react';
import classes from './Sidedraw.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../../hoc/Aux/Aux';

const sideDraw = props => {

    let attachedClasses = [classes.Sidedraw, classes.Close];

    if (props.open){
        attachedClasses = [classes.Sidedraw, classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.close}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
        </Aux>
    );
}

export default sideDraw;