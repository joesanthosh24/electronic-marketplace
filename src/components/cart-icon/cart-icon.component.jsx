import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-icon.component.scss';

const CartIcon = ({ toggleHidden }) => (
    <div className='cart-icon' onClick={toggleHidden}>
        <img alt='shopping cart icon' className='shopping-icon' src="https://img.icons8.com/ios/50/000000/wallet.png"/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);