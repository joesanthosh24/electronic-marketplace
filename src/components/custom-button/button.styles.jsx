import styled, { css } from "styled-components";

const googleStyles = css`
  background-color: #4c8bf5;
  border: 1px solid #4c8bf5;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #357ae8;
    border: 1px solid #ffffff;
  }
`;

const invertedStyles = css`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid black;

  &:hover {
    color: #ffffff;
    background-color: #000000;
    border: 1px solid #000000;
  }
`;

const redButtonStyles = css`
  background-color: rgba(231, 19, 12, 0.644);
  color: #ffffff;
  border: none;

  &:hover {
    color: black;
    background-color: #ffffff;
    border: 1px solid rgba(231, 19, 12, 0.644);
  }
`;

const buttonStyles = css`
  background-color: #000000;
  border: 1px solid #000000;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid black;
  }
`;

const smallSize = css`
  padding: 5px;
  width: 10px;
  margin-right: 65px;
`;

const regularSize = css`
  width: auto;
  padding: 10px;
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleStyles;
  } else if (props.inverted) {
    return invertedStyles;
  } else if (props.red) {
    return redButtonStyles;
  } else {
    return buttonStyles;
  }
};

const getButtonSizeStyles = (props) => {
  return props.small ? smallSize : regularSize;
};

export const ButtonComponent = styled.button`
  min-width: 110px;
  width: auto;
  height: 36px;
  outline: none;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 10px;
  ${getButtonStyles}
  ${getButtonSizeStyles}
`;
