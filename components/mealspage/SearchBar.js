import { Input, useColorMode } from '@chakra-ui/react';

import React from 'react';


function SearchBar({ searchText, setSearchText}) {
  const { colorMode } = useColorMode('dark')
  return (
    <Input
      placeholder="search meals" w="100%" bg={colorMode === "dark"?  ("bgGray"): ("btn.cornsilk")}  
       h="40px" borderRadius='5px' padding='3rem 2rem'  fontSize='2rem'
      outline="none" color="white" borderWidth='2px'
      borderColor='transparent' borderStyle='solid' focusBorderColor='#e85d04'
      
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />

  );
}

export default SearchBar;
