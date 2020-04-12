import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { setListHidden } from '../../redux/wishlist/wishlist.actions';

import './cart-icon.component.scss';

const CartIcon = ({ toggleCartHidden, toggleWishListHidden, hidden }) => {
    const handleClick = () => {
        toggleCartHidden();

        if(hidden) {
            return;
        }

        toggleWishListHidden();
    }

    return (
        <div className='cart-icon' onClick={handleClick}>
            <img alt='shopping cart icon' className='shopping-icon' src="https://img.icons8.com/ios/50/000000/wallet.png"/>
            <span className='item-count'>0</span>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    toggleWishListHidden: () => dispatch(setListHidden())
});

const mapStateToProps = ({ wishlist: { hidden } }) => ({
    hidden
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);