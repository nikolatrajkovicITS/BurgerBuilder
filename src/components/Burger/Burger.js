import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Burger';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="bread-bottom"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
        </div>
    );
};

export default burger;