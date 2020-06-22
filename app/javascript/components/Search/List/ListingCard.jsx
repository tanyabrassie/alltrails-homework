import * as React from 'react';
import Card from '../../Card/Index';

const ListingCard = ({place, updateActivePlace}) => {
  return(
    <div onClick={() => updateActivePlace(place)}>
      <Card place={place}/>
    </div>
  );
};

export default ListingCard;