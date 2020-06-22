import * as React from 'react';
import {useRef, useEffect} from 'react';
import { Map as GoogleMap, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {useMediaQuery} from 'react-responsive';

const containerStyles = {
  height: 'calc(100vh - 65px)',
  width:  'calc(100vw - 350px)',
  position: 'relative',
};

const mobileStyles = {
  height: 'calc(100vh - 65px)',
  width:  '100%',
};

const Map = (props) => {
  const mapsRef = useRef(null);
  const isDesktop = useMediaQuery({ minWidth: 578 });

  const getMapCenter = () => {
    const center = mapsRef.current.map.getCenter();
    const latLng = center.lat().toString() + ',' + center.lng().toString();
    return latLng;  
  };
  
  const onDrag = () => {
    props.updateMapCenter(getMapCenter());
  };

  useEffect(() => {
    props.updateMapCenter(getMapCenter());
  }, [mapsRef]);

  return(
    <GoogleMap
      ref={mapsRef}
      google={props.google}
      zoom={14}
      maxZoom={15}
      streetViewControl={false}
      fullscreenControl={false}
      mapTypeControl={false}
      containerStyle={isDesktop ? containerStyles : mobileStyles}
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