import * as React from 'react';
import styled from 'styled-components';
import {useState} from 'react';

const StyledInput = styled.input`
  margin-left: auto;
  border-radius: 5px;
  height: 25px;
  width: 300px;
  border: 1px solid ${props => props.theme.colors.gray4};
  box-shadow: 0px 1px 1px 0px #ebebeb;
  padding: 3px 15px;

  &::placeholder {
    font-family: ${props => props.theme.fonts.proxima};
    color: ${props => props.theme.colors.mediumGray};
    font-size: 11px;
    font-weight: bold;
  }
`;

// visually hidden label
const Label = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const SearchInput = ({updateSearchTerm}) => {
  const [inputState, updateInputState] = useState('');

  const handleChange = (e) => {
    updateInputState(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateSearchTerm(inputState);
  };
  
  return(
    <form onSubmit={onSubmit}>
      <Label htmlFor="restaurant-search">
        Search for a restaurant
      </Label>
      <StyledInput
        name="restaurant-search"
        type="text"
        onChange={handleChange}
        value={inputState}
        placeholder={'Search for a restaurant'}
        id={'restaurant-search'}
      />
    </form>  
  );
};

export default SearchInput;