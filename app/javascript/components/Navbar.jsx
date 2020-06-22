import * as React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import {breakpoints} from '../theme';
import {Flex} from 'rebass';

const NavContainer = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  z-index: 1;
  box-shadow: 0px 1px 5px 0px #d9d9d97d;
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.space[3]}px ${props => props.theme.space[5]}px;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${breakpoints.phone}) {
    flex-direction: row;
    height: 65px;
    justify-content: space-between;
  }
`;

const ATLogo = styled.img`
  width: 110px;

  @media screen and (min-width: ${breakpoints.phone}) {
    width: 100%;
    max-width: 150px;
  }
`;

const AtLunch = styled.span`
  color: ${props => props.theme.colors.lightGray};
  padding-left: ${props => props.theme.space[1]}px;
  font-weight: 100;
  font-size: 22px;
`;

const LogoContainer = styled(Flex)`
  align-items: flex-end;
  padding-bottom: ${props => props.theme.space[2]}px;

  @media screen and (min-width: ${breakpoints.phone}) {
    padding-bottom: 0;
    flex: 0 1 auto;
  }
`;

const ChildrenContainer = styled.div`
  flex: 1;
  width: 100%;
`;

const Navbar = (props) => {
  return(
    <NavContainer>
      <LogoContainer>
        <ATLogo src={logo}/>
        <AtLunch>at Lunch</AtLunch>
      </LogoContainer>
      
      <ChildrenContainer>
        {props.children}
      </ChildrenContainer>
    </NavContainer>
  );
};

export default Navbar;