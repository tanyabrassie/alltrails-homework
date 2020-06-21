import * as React from 'react';
import {Flex, Image} from 'rebass';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';

const NavContainer = styled(Flex)`
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  height: 65px;
  z-index: 1;
  position: relative;
  box-shadow: 0px 1px 5px 0px #d9d9d97d;
  padding: ${props => props.theme.space[3]}px ${props => props.theme.space[5]}px;
  justify-content: space-between;
`;

const Navbar = (props) => {
  return(
    <NavContainer>
      <Image src={Logo}/>
      <div>
        {props.children}
      </div>
    </NavContainer>
  );
};

export default Navbar;