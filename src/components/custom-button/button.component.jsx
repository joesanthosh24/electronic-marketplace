import React from "react";

import { ButtonComponent } from "./button.styles";

const Button = ({ children, ...props }) => {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};

export default Button;
