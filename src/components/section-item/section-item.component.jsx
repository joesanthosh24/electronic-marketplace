import React from 'react';
import { Link } from 'react-router-dom';

import './section-item.styles.scss';

const SectionItem = ({ imageUrl, title, linkUrl }) => (
    <div className="section-item">
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className="section-content">
            <h2 className="section-title">{title.toUpperCase()}</h2>
            <Link className="section-subtitle" to={`/shop-items${linkUrl}`}>CHECK ITEMS</Link>
        </div>
    </div>
);

export default SectionItem;