import styled, { css } from "styled-components";

const itemWidth = css`
  width: 23%;
`;

export const ArrowDiv = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  width: 10px;
`;

export const AddedItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid rgb(81, 120, 133);
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const NameDiv = styled.div`
  ${itemWidth}
`;

export const QuantityContainer = styled.div`
  ${itemWidth}
  margin-left: 25px;
`;

export const PriceDiv = styled.div`
  ${itemWidth}
`;

export const RemoveButton = styled.div`
  cursor: pointer;
  margin-right: 12px;
`;
