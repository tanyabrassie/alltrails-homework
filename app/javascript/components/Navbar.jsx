import * as React from 'react';
import {Flex, Image} from 'rebass';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';

const NavContainer = styled(Flex)`
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  padding: ${props => props.theme.space[3]}px ${props => props.theme.space[5]}px;
`;

const Navbar = () => {
  return(
    <NavContainer>
      <Image src={Logo}/>
      at Lunch
    </NavContainer>
  );
};

export default Navbar;