import React from 'react';

import classes from './BuildControl.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label}
                          label={ctrl.label}
                          added={() => props.ingredientAdded(ctr.type)} 
                          removed={() => props.ingredientRemoved(ctr.type)}
                          disabled={props.disabled[ctrl.type]}
                          price={this.state.totalPrice}/>
        ))}
        <button className={classes.OrderButton}
                disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;