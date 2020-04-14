import React from 'react';
import Button from '../custom-button/button.component';

import './dropdown-display.styles.scss';

const DropdownDisplay = ({ title }) => (
    <div className="dropdown">
        <div className="items"></div>
        <Button>SEE {title.toUpperCase()}</Button>
    </div>
);

export default DropdownDisplay;