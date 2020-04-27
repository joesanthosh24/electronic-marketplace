import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { selectSections } from '../../redux/sections/sections.selector';

import "./section-items.styles.scss";

import SectionItem from "../section-item/section-item.component";

const SectionItems = ({ sections }) => {
  return (
    <div className="section-items">
      {sections.map(({ id, ...otherItemData }) => (
        <SectionItem key={id} {...otherItemData} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    sections: selectSections
});

export default connect(mapStateToProps)(SectionItems);
