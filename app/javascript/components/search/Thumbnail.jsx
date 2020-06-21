import * as React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  background-image: url(${props => props.image});
  height: 65px;
  width: 65px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Thumbnail = (props) => {
  return(
    <Image image={props.image}/>
  );
};

export default Thumbnail;