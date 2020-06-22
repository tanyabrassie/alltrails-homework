import * as React from 'react';
import {Flex} from 'rebass';
import styled from 'styled-components';
import Card from './Card';
import {breakpoints} from '../../../theme';

const ListContainer = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 65px);
  overflow: scroll;
  background-color: ${props => props.theme.colors.lightestGray};

  @media screen and (min-width: ${breakpoints.phone}) {
    width: 350px;
  }
`;

const Places = (props) => {
  return(
    <ListContainer p={3}>
      {props.searchResults && props.searchResults.map((place) => <Card updateActivePlace={props.updateActivePlace} key={place.id} place={place}/>)}
    </ListContainer>
  );
};

export default Places;