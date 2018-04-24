import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICE = {
    salad: 0.3,
    cheese: 0.5,
    meat: 1.3,
    bacon: 0.8
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false

    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    updatePurchaseState(ingredients) {

        const sum = Object
            .keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0)

        this.setState({
            purchaseable: sum > 0
        })
    }
    AddIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount
        const ingredientPrice = INGREDIENT_PRICE[type];
        const currentPrice = this.state.totalPrice;
        const newPrice = currentPrice + ingredientPrice;

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        this.updatePurchaseState(updatedIngredients);

    };

    closeModal = () => {
        this.setState({purchasing: false})
    }

    ContinuePayment = () => {
        alert('ENJOY YOUR BURGER!');
    }
    RemoveIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount
        const ingredientPrice = INGREDIENT_PRICE[type];
        const currentPrice = this.state.totalPrice;
        const newPrice = currentPrice - ingredientPrice;

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        this.updatePurchaseState(updatedIngredients);
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let ingredient in disabledInfo) {
            disabledInfo[ingredient] = disabledInfo[ingredient] <= 0;
        }
        return (

            <Aux>
                <Modal show={this.state.purchasing} exitModal={this.closeModal}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        cancelOrder={this.closeModal}
                        ContinuePayment={this.ContinuePayment}
                        price={this.state.totalPrice.toFixed(2)}></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls
                    ingredientAdded={this.AddIngredientHandler}
                    ingredientRemoved={this.RemoveIngredient}
                    disableIngredient={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}/>

            </Aux>
        );
    }
}

export default BurgerBuilder;