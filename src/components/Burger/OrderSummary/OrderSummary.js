import React, {Component} from 'react';
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux/Aux';
class OrderSummary extends Component {
    //monitoriing unnessesary OrderSummary Update.
    componentWillUpdate(){
        console.log("[Order Summary Updated]");
    }
    render(){
        const IngredientSummary = Object
        .keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span
                    style={{
                    textTransform: 'capitalize'
                }}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        })

        return(
            <Aux>
            <h3>Your Order</h3>
            <p>Burger Ingredients</p>
            <ul>
                {IngredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price}</strong></p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={this.props.cancelOrder}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.ContinuePayment}>CONTINUE</Button>
        </Aux>
        );
    }

}

export default OrderSummary;