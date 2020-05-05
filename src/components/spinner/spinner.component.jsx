import React from "react";

import "./spinner.styles.scss";

const Spinner = (Wrapped) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  ) : (
    <Wrapped {...otherProps} />
  );
};

export default Spinner;