import * as React from 'react';
import {Flex, Box, Image} from 'rebass';
import styled from 'styled-components';

const Container = styled(Flex)`
  box-shadow: inset 0 0 0 1px #e6e6e6;
  margin: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.space[2]}px;
`;

const Title = styled.strong`
  font-weight: bold;
  font-family: Proxima Nova,Arial,sans-serif;
`;

const RatingCount = styled.div`
`;

const Card = ({place}) => {
  return(
    <Container my={1}>
      <Box>
        <Image src={''}/>
      </Box>
      <Box>
        <Title>{place.name}</Title>
        <div>{place.price_level && [...Array(place.price_level)].map(() => '$')}</div>
        <RatingCount>({place.user_ratings_total})</RatingCount>
      </Box>
    </Container>
  );
};

export default Card;