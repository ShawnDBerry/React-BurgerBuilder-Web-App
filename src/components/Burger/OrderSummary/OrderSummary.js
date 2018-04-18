import React from 'react';
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux';
const orderSummary = props => {
    const IngredientSummary = Object
        .keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span
                    style={{
                    textTransform: 'capitalize'
                }}>{igKey}</span>: {props.ingredients[igKey]}</li>
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Burger Ingredients</p>
            <ul>
                {IngredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={props.cancelOrder}>CANCEL</Button>
            <Button btnType="Success" clicked={props.ContinuePayment}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;