import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.white};
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 1px 0px 9px 4px #918d8d7d;
  transition: background-color .5s;
  font-family: ${props => props.theme.fonts.promixa};
  font-size: 15px;
  letter-spacing: .5px;
  font-weight: bold;
  
  &:hover {
    background-color: ${props => props.theme.colors.lightGreen};
  }
`;

export default Button;

