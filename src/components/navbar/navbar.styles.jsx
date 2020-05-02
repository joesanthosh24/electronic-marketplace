import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const optionCss = css`
  padding: 10px;
  color: grey;
  cursor: pointer;
`;

export const NavbarContainer = styled.nav`
  height: 75px;
  width: 100%;
  color: black;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const HomeNavLink = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 20px;
  text-transform: uppercase;
  color: grey;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 50%;
  padding: 10px;
`;

export const OptionDiv = styled.div`
  ${optionCss}
`;

export const OptionLink = styled(Link)`
  ${optionCss}
`;