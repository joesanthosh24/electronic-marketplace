import React from 'react';

import './section-item.styles.scss';

const SectionItem = ({ imageUrl, title }) => (
    <div className="section-item">
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className="section-content">
            <h2 className="section-title">{title.toUpperCase()}</h2>
            <span className="section-subtitle">CHECK ITEMS</span>
        </div>
    </div>
);

export default SectionItem;