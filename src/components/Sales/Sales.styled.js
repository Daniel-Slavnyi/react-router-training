import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  &.active {
    background-color: tomato;
    width: 100px;
    height: 20px;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    background-color: tomato;
    color: white;
  }
`;

export const UlList = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
`;
