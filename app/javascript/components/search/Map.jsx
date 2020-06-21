import * as React from 'react';
import {useRef} from 'react';
import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const Map = (props) => {
  const mapsRef = useRef(null);
  
  const onDrag = () => {
    console.log('dragging');
    props.fetchPlaces(getMapCenter());
  };

  const onReady = () => {
    console.log('ready');
  };

  const getMapCenter = () => {
    const center = mapsRef.current.map.getCenter();
    const latLng = center.lat().toString() + ',' + center.lng().toString();

    return latLng;  
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