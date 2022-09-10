import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '../Box/Box';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const NavItem = styled(NavLink)`
  text-decoration: none;
  margin: 4px;
  color: blue;
  &.active {
    color: red;
  }
`;

export const Appbar = () => {
  return (
    <>
      {navItems.map(item => (
        <Box mr={3} key={item.href}>
          <NavItem to={item.href}>{item.text}</NavItem>
        </Box>
      ))}
    </>
  );
};
