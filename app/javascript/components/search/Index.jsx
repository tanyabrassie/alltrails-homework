import * as React from 'react';
import Navbar from '../Navbar';
import {Flex} from 'rebass';
import Map from './Map';
import List from './List/Index';
import {useEffect} from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import SearchInput from '../SearchInput';
import {Desktop, Mobile} from '../../lib/Responsive';
import Button from '../Button';
import Filter from '../Filter';
import {breakpoints} from '../../theme';

const Container = styled.div`
  width: 100%;
`;

const FilterContainer = styled.div`
  margin-right: ${props => props.theme.space[2]}px;
`;

const SearchContainer = styled.div`
  width: 100%;
  margin-left: auto;
  display: flex;

  @media screen and (min-width: ${breakpoints.phone}) {
    max-width: 300px;
    margin-left: auto;
  }
`;

const FloatingButton = styled(Button)`
  position: fixed;
  box-shadow: 1px 0px 9px 4px #918d8d7d;

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
  
  useEffect(() => {
    async function fetchPlaces() {
      const base_url = `/api/v1/places/nearby_places/?location=${mapCenter}`;
      const url = searchTerm ? `${base_url}&name=${searchTerm}` : base_url;
      const response = await fetch(url);
      const json = await response.json(); 
      updateSearchResults(json.results);
    }

    fetchPlaces();
  }, [mapCenter, searchTerm, updateSearchResults]);

  return(
    <Container>
      <Navbar>
        <SearchContainer>
          <FilterContainer><Filter/></FilterContainer>
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
            updateActivePlace={updateActivePlace}
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
              updateActivePlace={updateActivePlace}
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