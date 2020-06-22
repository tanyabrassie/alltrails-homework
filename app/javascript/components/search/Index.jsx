import * as React from 'react';
import Navbar from '../Navbar';
import {Flex} from 'rebass';
import Map from './Map';
import List from './List/Index';
import {useEffect} from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import SearchInput from './SearchInput';
import {Desktop, Mobile} from '../../lib/Responsive';
import Button from '../Button';

const Container = styled.div`
  width: 100%;
`;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin-left: auto;
`;

const FloatingButton = styled(Button)`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 50px;
  margin: auto; 
  width: 150px;
  height: 45px;
`;

const Search = () => {
  const [searchResults, updateSearchResults] = useState([]);
  const [searchTerm, updateSearchTerm] = useState(null);
  const [mapCenter, updateMapCenter] = useState(null);
  const [activePlace, updateActivePlace] = useState(null);
  const [showMap, toggleMap] = useState(true);
  
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

        <Desktop>
          <List 
            searchResults={searchResults}
            updateActivePlace={updateActivePlace}
          />
          <Map 
            activePlace={activePlace}
            updateMapCenter={updateMapCenter}
            searchResults={searchResults}
          />
        </Desktop>

        <Mobile>
          {showMap ? (
            <Map 
              activePlace={activePlace}
              updateMapCenter={updateMapCenter}
              searchResults={searchResults}
            /> 
          ) : (
            <List 
              searchResults={searchResults}
              updateActivePlace={updateActivePlace}
            />
          )}
        </Mobile>

        <Mobile>
          <FloatingButton onClick={() => toggleMap(!showMap)}>
            {showMap ? 'List' : 'Map'}
          </FloatingButton>
        </Mobile>        
      </Flex>
    </Container>
  );
};

export default Search;