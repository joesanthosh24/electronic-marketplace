import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Heart } from '../../assets/heart.svg';

import { setListHidden } from '../../redux/wishlist/wishlist.actions';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './wishlist-icon.styles.scss';
import { selectWishlistItems } from './../../redux/wishlist/wishlist.selectors';

const WishListIcon = ({ setWishListHidden, setCartHidden, hidden }) => {
    const handleClick = () => {
        setWishListHidden();

        if(hidden) {
            return;
        }

        setCartHidden();
    }

    return (
        <div className="wishlist-icon" onClick={handleClick} >
            <Heart className="heart" />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    setWishListHidden: () => dispatch(setListHidden()),
    setCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    hidden: state.cart.hidden,
    itemCount: selectWishlistItems(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(WishListIcon);