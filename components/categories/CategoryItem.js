
import React from 'react';
import { Button, useColorMode } from '@chakra-ui/react';

function CategoryItem({ category, selectedCategory, onClickHandler }) {
  const isSelected = category.strCategory === selectedCategory;
  const {colorMode} = useColorMode()
  return (
    <Button
      py='2rem' px='2rem'  display='flex' fontSize="1.8rem"
      color="text" borderRadius='6px' cursor='pointer' _hover={false} _active={false}
      borderWidth={isSelected? ("2px") : (null)}
      borderStyle={isSelected? ("solid") : (null)}
      borderColor={isSelected? ("border.primary") : (null)}
      bg={colorMode === "dark"? ("btn.gray") : ("btn.cornsilk")}
      onClick={onClickHandler}
    >
      {category.strCategory}
    </Button>
  );
}

export default CategoryItem;
