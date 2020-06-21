import * as React from 'react';
import {useRef} from 'react';
import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const Map = (props) => {

  // when maps is loaded, find the bounds, pass them to the search function
  // when map is dragged, find the bounds, pass them to the search function
  const mapsRef = useRef(null);
  
  const onDrag = () => {
    console.log('dragging map!');
    console.log(getLocationBiasBounds());
    // when map is dragged, find the bounds, pass them to the search function
    const locationBias = getLocationBiasBounds();
    props.fetchPlaces(locationBias);
  };

  const onReady = () => {
    console.log('ready');
  };

  const getLocationBiasBounds = () => {
    const bounds = mapsRef.current.map.getBounds();
    const formattedBounds = bounds.getSouthWest().lat().toString() + ',' + bounds.getSouthWest().lng().toString() + '|' +
      bounds.getNorthEast().lat().toString() + ',' + bounds.getNorthEast().lng().toString();

    return formattedBounds;  
  };


  return(
    <GoogleMap
      ref={mapsRef}
      google={props.google}
      zoom={15}
      onReady={onReady}
      onDragend={onDrag}
      style={mapStyles}
      initialCenter={{
        lat: 37.799944,
        lng: -122.4328033
      }}
      
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDpEr8NpgU_ERTJw6tm1nmGrpUZozM-oQE',
})(Map);