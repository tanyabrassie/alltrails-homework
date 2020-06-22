import * as React from 'react';
import {useState} from 'react';
import Button from './Button';
import styled from 'styled-components';

const Options = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.space[5]}px;
  color: ${props => props.theme.colors.mediumGray};
  border-radius: 5px;
  font-size: 11px;
  width: 200px;
  height: 100px;
  top: 40px;
  border: 1px solid #e2e2e2;
`;

const Container = styled.div`
  position: relative;
`;

const Filter = () => {
  const [showOptions, toggleOptions] = useState(false);

  return(
    <Container>
      <Button onClick={() => toggleOptions(!showOptions)} small secondary>
        {showOptions ? 'Sort' : 'Filter'}
      </Button>

      {showOptions &&
        <Options>
          ✨ Feature Coming Soon!
        </Options>
      }
    </Container>
  );
};

export default Filter;