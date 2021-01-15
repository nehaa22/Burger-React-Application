import React, { Component } from "react";
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const Burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};