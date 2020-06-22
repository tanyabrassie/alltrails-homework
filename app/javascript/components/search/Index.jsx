import * as React from 'react';
import Navbar from '../Navbar';
import {Flex} from 'rebass';
import Map from './Map';
import List from './List/Index';
import {useEffect} from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import SearchInput from './SearchInput';

const Container = styled.div`
  width: 100%;
`;

const SearchContainer = styled.div`
  width: 100%;
  min-width: 250px;
`;

const Search = () => {
  const [searchResults, updateSearchResults] = useState([]);
  const [searchTerm, updateSearchTerm] = useState(null);
  const [mapCenter, updateMapCenter] = useState(null);
  
  const fetchPlaces = async () => {
    const base_url = `/api/v1/places/nearby_places/?location=${mapCenter}`;
    const url = searchTerm ? base_url + `&name=${searchTerm}` : base_url;
    const response = await fetch(url);
    const json = await response.json(); 
    updateSearchResults(json.results);
  };

  useEffect(() => {
    fetchPlaces();
  }, [mapCenter, searchTerm]);

  return(
    <Container>
      <Navbar>
        <SearchContainer>
          <SearchInput 
            searchTerm={searchTerm} 
            updateSearchTerm={updateSearchTerm}
          />
        </SearchContainer>
      </Navbar>
      <Flex width={1}>
        <List 
          searchResults={searchResults}
        />
        <Map 
          updateMapCenter={updateMapCenter}
          searchResults={searchResults}
        />
      </Flex>
    </Container>
  );
};

export default Search;