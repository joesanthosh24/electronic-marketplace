import React, { Component } from 'react';

import './section-items.styles.scss';

import items from './section-items.data';
import SectionItem from '../section-item/section-item.component';

class SectionItems extends Component {
    constructor() {
        super();

        this.state = {
            items,
        }
    }

    render() {
        const { items } = this.state;
        return (
            <div className="section-items">
                {items.map(({ id, ...otherItemData}) => (
                    <SectionItem key={id} {...otherItemData} />
                ))}
            </div>
        )
    }
}

export default SectionItems