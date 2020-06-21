import * as React from 'react';
import {useRef} from 'react';
import { Map as GoogleMap, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const containerStyles = {
  height: 'calc(100vh - 65px)',
  width: 'calc(100vw - 350px)',
  position: 'relative',
};

const Map = (props) => {
  const mapsRef = useRef(null);
  
  const onDrag = () => {
    props.updateMapCenter(getMapCenter());
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
      zoom={14}
      mapTypeControl={false}
      containerStyle={containerStyles}
      onReady={onReady}
      onDragend={onDrag}
      initialCenter={{
        lat: 37.799944,
        lng: -122.4328033
      }}
    >
      {props.searchResults && props.searchResults.map((result) => {
        return (
          <Marker
            key={result.place_id}
            name={result.name}
            position={result.geometry.location}
          >
            <InfoWindow
              visible={true}
            >
              <div>hi</div>
            </InfoWindow>
          </Marker>
        );
      })}
    </GoogleMap>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDpEr8NpgU_ERTJw6tm1nmGrpUZozM-oQE',
})(Map);