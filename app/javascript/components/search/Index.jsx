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
    const response = await fetch(`/api/v1/search/?location=${location}`);
    const json = await response.json();
    const results = json.results;

    updateSearchResults(results);
  };

  useEffect(() => {
    console.log('use effect');
    console.log(searchResults);
  }, [searchResults]);

  return(
    <Container>
      <Navbar/>
      <Flex width={1}>
        <Places 
          searchResults={searchResults}
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