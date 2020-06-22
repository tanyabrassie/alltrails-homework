import * as React from 'react';
import {useRef, useEffect} from 'react';
import { Map as GoogleMap, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {useMediaQuery} from 'react-responsive';
import Card from '../Card/Index';
import {ThemeProvider} from 'styled-components';
import {theme} from '../../theme';

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
    props.updateActivePlace(null);
  };

  const onMapClicked = () => {
    props.updateActivePlace(null);
  };

  useEffect(() => {
    props.updateMapCenter(getMapCenter());
  }, [mapsRef]);

  return(
    <GoogleMap
      ref={mapsRef}
      google={props.google}
      onClick={onMapClicked}
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
            onClick={() => props.updateActivePlace(result)}
            key={result.place_id}
            name={result.name}
            position={result.geometry.location}

          >
          </Marker>
        );
      })}

      <InfoWindow
        visible={!!props.activePlace}
        position={props.activePlace ? props.activePlace.geometry.location : null}
      >
        <ThemeProvider theme={theme}>
          {props.activePlace && <Card isInfoWindow theme={props.theme} place={props.activePlace}/>}
        </ThemeProvider>
      </InfoWindow>
    </GoogleMap>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDpEr8NpgU_ERTJw6tm1nmGrpUZozM-oQE',
})(Map);