import * as React from 'react';
import {Flex} from 'rebass';
import styled from 'styled-components';

const ListContainer = styled(Flex)`
  flex-direction: column;
  width: 350px;
  background-color: ${props => props.theme.colors.gray1};
`;

const Places = () => {
  return(
    <ListContainer>
      places
    </ListContainer>
  );
};

export default Places;