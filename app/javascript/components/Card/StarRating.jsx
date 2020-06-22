import * as React from 'react';
import starIcon from '../../../assets/images/star.svg';
import styled from 'styled-components';

const Star = styled.img`
  width: 16px;
  padding-right: 2px;
`;

const StarRating = ({rating}) => {
  const roundedRating = Math.round(rating);
  
  return (
    <>
      {[...Array(roundedRating)].map((_, index) => <Star key={index} src={starIcon}/>)}
    </>
  );
};

export default StarRating;