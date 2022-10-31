import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import solution from 'assets/imageHeader.jpg';



export const Nav = styled.nav`
  display: flex;
  height: 10vh;
  gap: 20px;
  margin: 0 auto;
  padding-left: 100px;
    padding-right: 100px;
  justify-content: center;
  align-items: center;
  background-image: url('${solution}');
      background-repeat: no-repeat;
    background-size: cover;
`;

export const Link = styled(NavLink)`
  display: block;
  height: max-content;
  color: white;
  background-color: #364448;
  border-radius: 15px;
  padding: 10px;
  text-decoration: none;
  font-size: 36px;
  font-weight: 700;
  &.active {
    background-color: pink;
  }
`;
