import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const NavContainer = styled.nav`
  background-color: rgba(3, 32, 44, 0.911);
  display: flex;
  /* gap: 30px; */
  padding: 15px;
  padding-bottom: 20px;
  border-bottom: 4px solid black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const HeaderLink = styled(NavLink)`
  display: inline-block;
  padding: 13px;
  padding-top: 16px;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.2);
  font-family: inherit;
  font-weight: bold;
  text-align: center;

  min-width: 80px;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid black;

  border-radius: 10px;
  opacity: 0.8;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    color: red;
    opacity: 1.2;
  }
  &.active {
    color: red;
  }
`;
