import { Input } from '@chakra-ui/react';

import React from 'react';


function SearchBar({ searchText, setSearchText, className }) {
  return (
    <Input
      placeholder="search meals" maxW="500px" bg="bgGray" 
      w="100%" h="40px" borderRadius='5px' padding='3rem 2rem'  fontSize='2rem'
      outline="none" color="white" borderWidth='2px'
      borderColor='transparent' borderStyle='solid' focusBorderColor='#e85d04'
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />

  );
}

export default SearchBar;
