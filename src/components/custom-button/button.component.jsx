import React from 'react';

import './button.styles.scss';

const Button = ({ children, isGoogleSignIn, red, inverted, small, ...otherProps }) => {
    return (
        <button 
            className={`
                ${inverted ? 'inverted' : ''}
                ${isGoogleSignIn ? 'google-button' : ''}
                ${red ? 'red' : ''}
                ${small ? 'small' : ''}
                button`
            } 
            {...otherProps}
        >
            {children}
        </button>
    )
};

export default Button;