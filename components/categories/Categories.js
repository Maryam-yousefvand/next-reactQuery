import { Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';


function Categories({
	categories,
	categoriesIsLoading,
	categoriesIsError,
	selectedCategory,
	setSelectedCategory,
	setQuery,
}) {

	const CategoryItem = dynamic(()=> import('./CategoryItem'))

	if (categoriesIsError) {
		return 'error';
	}
	if (categoriesIsLoading) {
		return <BeatLoader loading={categoriesIsLoading} color="white" />;
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
