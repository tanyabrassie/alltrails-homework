import * as React from 'react';
import {Flex, Box} from 'rebass';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import Thumbnail from './Thumbnail';

const Container = styled(Flex)`
  box-shadow: inset 0 0 0 1px #e6e6e6;
  margin: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.space[2]}px;
  color: ${props => props.theme.colors.gray2};
`;

const Title = styled.strong`
  font-weight: bold;
  font-family: Proxima Nova,Arial,sans-serif;
  font-size: 15px;
  letter-spacing: .5px;
`;

const RatingCount = styled.div`
`;

const Content = styled.div`

`;

const Card = ({place}) => {
  const [loadingImage, toggleLoading] = useState(false);
  const [placePhoto, setPlacePhoto] = useState('');

  useEffect(() => {
    async function fetchData() {
      const photoReference = place.photos[0].photo_reference;
      toggleLoading(true);
      const result = await fetch(`api/v1/places/photos/?photo_reference=${photoReference}`);
      const image = await result.json();
      toggleLoading(false);
      setPlacePhoto(image.base64Image);
    }
    fetchData();
  }, []);

  return(
    <Container my={1}>
      {loadingImage && <div>loading</div>}
      <div>
        {placePhoto && <Thumbnail image={`data:image/png;base64,${placePhoto}`}/>}
      </div>
      <Content>
        <Title>{place.name}</Title>
        <div>{place.price_level && [...Array(place.price_level)].map(() => '$')}</div>
        <RatingCount>({place.user_ratings_total})</RatingCount>
      </Content>
    </Container>
  );
};

export default Card;