import { Flex } from '@chakra-ui/react';
import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import CategoryItem from './CategoryItem';

function Categories({
	categories,
	categoriesIsLoading,
	categoriesIsError,
	selectedCategory,
	setSelectedCategory,
	setQuery,
}) {
	if (categoriesIsError) {
		return 'error';
	}
	if (categoriesIsLoading) {
		return <BeatLoader loading={categoriesIsLoading} color="#fff" />;
	}

	return (
		<Flex mt="2rem" wrap="wrap" gap="1rem">
			{categories &&
				categories.map(item => (
					<CategoryItem
						category={item}
						key={item.idCategory}
						selectedCategory={selectedCategory}
						onClickHandler={() => {
							setSelectedCategory(item.strCategory);
							setQuery('');
						}}
					/>
				))}
		</Flex>
	);
}

export default Categories;
