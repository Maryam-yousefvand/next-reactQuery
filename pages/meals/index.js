import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BeatLoader } from 'react-spinners';

import {
	useAllCategories,
	useSelectedCategory,
	useQueryMeals,
} from '@hooks/meals';
import { Box, Flex, Input, SimpleGrid, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const override = {
	display: 'inline-block',
	margin: '0 auto',
};

function Meals() {
	const SearchBar = dynamic(() => import('@components/mealspage/SearchBar'));
	const Categories = dynamic(() => import('@components/categories/Categories'));
	const SingleMealCard = dynamic(() =>
		import('@components/mealspage/SingleMealCard')
	);

	const [selectedCategory, setSelectedCategory] = useState('');
	const [searchText, setSearchText] = useState('');
	const [query, setQuery] = useState('');

	const {
		data: categories,
		isLoading: categoriesIsLoading,
		isError: categoriesIsError,
	} = useAllCategories();

	const { data, isLoading, isError } = useSelectedCategory(selectedCategory)

	const {
		data: queriedData,
		isLoading: queriedIsLoading,
		isError: queriedIsError,
	} = useQueryMeals(query);

	useEffect(() => {
		if (categories) {
			setSelectedCategory(a);
			
		}
	}, [categories]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (searchText) {
				setQuery(searchText);
				setSelectedCategory('');
			} else {
				setQuery('');
				if (categories) {
					setSelectedCategory(a);
				}
			}
		}, 300);
		return () => {
			setQuery('');
			clearTimeout(timeout);
		};
	}, [searchText, categories]);

	const a = useMemo(() => categories?.[0]?.strCategory ?? null, [categories?.[0]?.strCategory]);

	return (
		<Box as="div" py="5rem">
			<SearchBar searchText={searchText} setSearchText={setSearchText} />
			<Flex align="flex-start" justify="flex-start" gap="1rem">
				<Text as="p" fontSize="1.5rem" color="text" pb="50px" pt="10px">
					search meals or select categories from below
				</Text>
			</Flex>
			<Categories
				categories={categories}
				categoriesIsLoading={categoriesIsLoading}
				categoriesIsError={categoriesIsError}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				setQuery={setQuery}
			/>

			{isLoading || categoriesIsLoading ? (
				<Flex py="50px" justify="center">
					<BeatLoader
						color="white"
						loading={isLoading || categoriesIsLoading}
						cssOverride={override}
						size="20"
					/>
				</Flex>
			) : null}

			<SimpleGrid gap="1rem" mt="50px" minChildWidth="300px">
				{!isLoading &&
					!isError &&
					data &&
					data.map(meal => <SingleMealCard meal={meal} key={meal.idMeal} />)}

				{queriedIsLoading ? (
					<Flex py="50px" justify="center">
						<BeatLoader
							color="white"
							loading={queriedIsLoading}
							cssOverride={override}
							size="20"
						/>
					</Flex>
				) : null}

				{!queriedIsLoading &&
					!queriedIsError &&
					queriedData &&
					queriedData.map(meal => (
						<SingleMealCard meal={meal} key={meal.idMeal} />
					))}
			</SimpleGrid>
		</Box>
	);
}

export default Meals;
