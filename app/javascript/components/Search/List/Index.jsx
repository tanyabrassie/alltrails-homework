import * as React from 'react';
import {Flex} from 'rebass';
import styled from 'styled-components';
import Card from './Card';

const ListContainer = styled(Flex)`
  flex-direction: column;
  width: 350px;
  height: calc(100vh - 65px);
  overflow: scroll;
  background-color: ${props => props.theme.colors.gray1};
`;

const Places = (props) => {
  return(
    <ListContainer p={3}>
      {props.searchResults && props.searchResults.map((place) => <Card key={place.id} place={place}/>)}
    </ListContainer>
  );
};

export default Places;