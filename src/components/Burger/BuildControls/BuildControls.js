import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {
        label: 'Salad',
        type: 'salad'
    }, {
        label: 'Bacon',
        type: 'bacon'
    }, {
        label: 'Meat',
        type: 'meat'
    }, {
        label: 'Cheese',
        type: 'cheese'
    }

];

const buildControls = props => (
    <div className={classes.BuildControls}>
    <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control => (
            <BuildControl
                key={control.label + 1}
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disableIngredient[control.type]}></BuildControl>
                
        ))}
        <button className={classes.OrderButton} disabled={!props.purchaseable} onClick={props.ordered}>Order Burger</button></div>
)

export default buildControls;