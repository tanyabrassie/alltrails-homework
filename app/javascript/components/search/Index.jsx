import * as React from 'react';
import Navbar from '../Navbar';
import {Flex} from 'rebass';
import Map from './Map';
import Places from './Places';
import {useEffect} from 'react';
import styled from 'styled-components';
import {useState} from 'react';

const Container = styled.div`
  width: 100%;
`;

const MapContainer = styled.div`
  border: 1px solid red;
`;

const Search = () => {

  const [searchResults, updateSearchResults] = useState([]);
  // store selected point in state


  const fetchPlaces = async (location) => {
    // fetch places 
    console.log('location', location);
    const result = await fetch(`/api/v1/search/?location:${location}`);
    const json = await result.json();
    console.log('json', json.candidates);
  };

  useEffect(() => {
    console.log('use effect');
  });

  return(
    <Container>
      <Navbar/>
      <Flex width={1}>
        <Places 
          searcResults={searchResults}
          fetchPlaces={fetchPlaces}
        />
        <MapContainer>
          <Map 
            searchResults={searchResults}
            fetchPlaces={fetchPlaces}
          />
        </MapContainer>
      </Flex>
    </Container>
  );
};

export default Search;