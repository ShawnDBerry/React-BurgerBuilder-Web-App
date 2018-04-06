import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    
    AddIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount
        this.setState({ingredients: updatedIngredients})
    };

    RemoveIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount
        this.setState({ingredients: updatedIngredients,})
    }
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls ingredientAdded={this.AddIngredientHandler} ingredientRemoved={this.RemoveIngredient}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;