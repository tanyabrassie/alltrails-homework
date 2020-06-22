import * as React from 'react';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import Thumbnail from './Thumbnail';
import Spinner from '../../Spinner';
import StarRating from './StarRating';

const Container = styled.div`
  box-shadow: inset 0 0 0 1px #e6e6e6;
  margin: ${props => props.theme.space[1]}px 0;
  padding: ${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.space[2]}px;
  color: ${props => props.theme.colors.mediumGray};
  font-family: ${props => props.theme.fonts.proxima};
  display: flex;
`;

const Title = styled.strong`
  font-weight: bold;
  font-size: 15px;
  letter-spacing: .5px;
`;

const DetailsRow = styled.div`
  font-size: 11px;
  display: flex;
  letter-spacing: .5px;
  padding: ${props => props.theme.space[1]}px 0;
  align-items: center;
`;

const Hours = styled.span`
`;

const Content = styled.div`
  margin-left: ${props => props.theme.space[4]}px;
`;

const Image = styled.div`
  width: 65px;
  height: 65px;
  flex-shrink: 0;
`;

const Card = ({place}) => {
  const [loadingImage, toggleLoading] = useState(false);
  const [placePhoto, setPlacePhoto] = useState(null);

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

  const hours = place.opening_hours && place.opening_hours.open_now ? 'Open Now' : 'Closed';

  return(
    <Container>
      <Image>
        {loadingImage ? (
          <Spinner/>
        ):( 
          <Thumbnail image={placePhoto}/>
        )}
      </Image>
      <Content>
        <Title>{place.name}</Title>
        <DetailsRow>
          {place.rating && <><StarRating rating={place.rating}/>&nbsp;</>}
          {place.user_ratings_total && <>({place.user_ratings_total})</>}
        </DetailsRow>
        <DetailsRow>
          {place.price_level && <>{[...Array(place.price_level)].map(() => '$')}&nbsp;&#8226;&nbsp;</>}
          <Hours>
            {hours}
          </Hours>
        </DetailsRow>
      </Content>
    </Container>
  );
};

export default Card;