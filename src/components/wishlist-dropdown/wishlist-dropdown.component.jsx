import React from 'react';

import './wishlist-dropdown.styles.scss';

import Button from '../custom-button/button.component';

const WishListDropdown = () => (
    <div className="wishlist-dropdown">
        <div className="wishlist-items"></div>
        <Button>SEE WISHLIST</Button>
    </div>
);

export default WishListDropdown;