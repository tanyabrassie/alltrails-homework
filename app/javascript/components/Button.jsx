import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.secondary ? props.theme.colors.white : props.theme.colors.green};
  color: ${props => props.secondary ? props.theme.colors.mediumGray : props.theme.colors.white};
  border-radius: 5px;
  border: ${props => props.secondary ? '1px solid #e2e2e2' : 'none'};
  outline: none;
  height: ${props => props.small ? '30px' : '45px'};
  cursor: pointer;
  transition: background-color .5s;
  font-family: ${props => props.theme.fonts.promixa};
  font-size: ${props => props.small ? '11px' : '15px'};
  letter-spacing: .5px;
  padding: 0 ${props => props.theme.space[2]}px;
  font-weight: ${props => props.small ? '100' : '800'};
  
  &:hover {
    background-color: ${props => props.secondary ? props.theme.colors.lightestGray : props.theme.colors.lightGreen};
  }
`;

export default Button;

