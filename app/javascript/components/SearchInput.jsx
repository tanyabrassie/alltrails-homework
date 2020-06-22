import * as React from 'react';
import styled from 'styled-components';
import {useState} from 'react';

const StyledInput = styled.input`
  border-radius: 5px;
  height: 30px;
  border: 1px solid ${props => props.theme.colors.gray};
  box-shadow: 0px 1px 1px 0px #ebebeb;
  padding: 3px 15px;
  width: 100%;

  &::placeholder {
    font-family: ${props => props.theme.fonts.proxima};
    color: ${props => props.theme.colors.mediumGray};
    font-size: 11px;
    letter-spacing: .5px;
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

const Form = styled.form`
  width: 100%;
`;

const SearchInput = ({updateSearchTerm}) => {
  const [inputState, updateInputState] = useState('');

  const handleChange = (e) => {
    updateInputState(e.target.value);

    if (e.target.value === '') {
      updateSearchTerm(null);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateSearchTerm(inputState);
  };
  
  return(
    <Form onSubmit={onSubmit}>
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
    </Form>  
  );
};

export default SearchInput;