import React from 'react';

import Button from '../custom-button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <Button>CHECKOUT ITEMS</Button>
    </div>
);

export default CartDropdown;