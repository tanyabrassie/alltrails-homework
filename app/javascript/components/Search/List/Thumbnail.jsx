import * as React from 'react';
import styled from 'styled-components';

const ImageTile = styled.div`
  background-image: url(${props => `data:image/png;base64,${props.image})`};
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Thumbnail = (props) => {
  return(
    <ImageTile image={props.image}/>
  );
};

export default Thumbnail;