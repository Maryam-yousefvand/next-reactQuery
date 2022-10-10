import { useQueries } from '@tanstack/react-query';
import React, { useEffect ,useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { Box, Link, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react';
import getSingleMeal from '@api/meals';
import dynamic from 'next/dynamic';





const SavedMeals = () => {

	const ListItems = dynamic(() => import('@components/ListItems/ListItems')) 
	const [savedMealsId, setSavedMealsId] = useState([]);

	const queries = savedMealsId.map(id => ({
		queryKey: ['singleMeal', id],
		queryFn: getSingleMeal,
	}));

	const result =   useQueries({ queries });

	

	useEffect(() => {
		if (localStorage.getItem('savedMeals')) {
			setSavedMealsId(JSON.parse(localStorage.getItem('savedMeals')));
		}
	}, []);

	return (
		<Box py="6rem">
			<Text
				as="h2"
				mb="2rem"
				fontSize="3rem"
				color="#9f9f9f"
				textTransform="capitalize"
			>
				My Saved Meal List
			</Text>

			<SimpleGrid minChildWidth="250px" gap="2rem">
				{savedMealsId.length <= 0 && <Text>No seved Meals</Text>}

				{result &&
					result.map(({ data, isLoading }, index) => {
						if (isLoading) {
							return (
								<BeatLoader color="white" key={savedMealsId[index]}></BeatLoader>
							);
						}

						return (
							<Link href={`/meals/${data.idMeal}`} key={data.idMeal} h="100%">
								<Box
									bg="#393b40"
									p="2rem"
									borderRadius="6px"
									display="block"
									h="100%"
								>
									<Text
										as="p"
										color="text"
										fontSize="1.5rem"
										
									>
										{data.strMeal}
									</Text>
									<UnorderedList justify="center" align="center">
										<ListItems>{data.strCategory}</ListItems>
										<ListItems>{data.strArea}</ListItems>
									</UnorderedList>
								</Box>
							</Link>
						);
					})}
			</SimpleGrid>
		</Box>
	);
};

export default SavedMeals;
