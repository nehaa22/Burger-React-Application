import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Aux from "../../Hoc/Aux";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    addIngredientHandler = (type) =>{

    }

    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls/>
            </Aux>

        );
    }
}

export default BurgerBuilder;