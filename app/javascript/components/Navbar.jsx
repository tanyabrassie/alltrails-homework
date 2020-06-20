import * as React from 'react';
import {Flex} from 'rebass';
import styled from 'styled-components';

const NavContainer = styled(Flex)`
  background-color: ${props => props.theme.colors.gray1};
  width: 100%;
`;

const Navbar = () => {
  return(
    <NavContainer>Navbar</NavContainer>
  );
};

export default Navbar;