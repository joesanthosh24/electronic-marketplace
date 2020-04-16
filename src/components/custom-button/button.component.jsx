import React from 'react';

import './button.styles.scss';

const Button = ({ children, isGoogleSignIn, red, inverted, ...otherProps }) => {
    return (
        <button 
            className={`
                ${inverted ? 'inverted' : ''}
                ${isGoogleSignIn ? 'google-button' : ''}
                ${red ? 'red' : ''}
                button`
            } 
            {...otherProps}
        >
            {children}
        </button>
    )
};

export default Button;