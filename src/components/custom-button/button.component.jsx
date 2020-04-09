import React from 'react';

import './button.styles.scss';

const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button 
            className={`${isGoogleSignIn ? 'google-button' : ''} button`} {...otherProps}
        >
            {children}
        </button>
    )
};

export default Button;