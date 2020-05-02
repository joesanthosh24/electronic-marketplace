import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const CartImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const ItemSpan = styled.span`
  position: absolute;
  font-size: 14px;
  padding-top: 8px;
  font-weight: bold;
  color: #808080;
`;