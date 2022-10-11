import Image from 'next/image';

import { useRouter } from 'next/router'
import React, { useEffect, useState} from 'react';
import { BeatLoader } from 'react-spinners';


import toast from 'react-hot-toast';
import { useSingleMeal } from '@hooks/meals';
import {
	Box,
	Button,
	Circle,
	Flex,
	ListIcon,
	ListItem,
	Text,
	UnorderedList,
} from '@chakra-ui/react';

import dynamic from 'next/dynamic';


function SingleMealPage() {
	
    const IngredientsTable = dynamic(() => import('@components/mealspage/IngredientsTable'))
	const ListItems =  dynamic(() => import('@components/ListItems/ListItems'))

	const router = useRouter();
	const { id } = router.query;
	const [isSaved, setIsSaved] = useState(false);



	const { data, isLoading, isError, error } = useSingleMeal(id);


	if (isError) {
		return <Text>{error}</Text>
	}

	useEffect(() => {
		if (localStorage.getItem('savedMeals')) {
			const savedMeals = JSON.parse(localStorage.getItem('savedMeals'));
			console.log(savedMeals);
			if (savedMeals.includes(id)) {
				setIsSaved(true);
			} else {
				setIsSaved(false);
			}
		} else {
			localStorage.setItem('savedMeals', JSON.stringify([]));
		}
	}, [id]);
	


	if (isLoading && !data) {
		return <BeatLoader color="#fff" />;
	}
    // console.log(data);
	const ingredients = Object.keys(data)
		.filter(key => key.startsWith('strIngredient'))
		.filter(key => data[key] !== '' && data[key] !== null);
    console.log(ingredients )
	const ingredientsWithMeasures = ingredients.map((key, index) => ({
		index: index + 1,
		ingredient: data[key],
		measure: data[`strMeasure${index + 1}`],
	}));
	console.log(ingredientsWithMeasures);
	const handleSaveButtonClick = async () => {
		const savedMeals = JSON.parse(localStorage.getItem('savedMeals'));
		if (!isSaved) {
			savedMeals.push(data.idMeal);
			localStorage.setItem('savedMeals', JSON.stringify(savedMeals));
			toast.success('Meals Saved');
			setIsSaved(true);
		} else {
			savedMeals.splice(savedMeals.indexOf(data.idMeal), 1);
			localStorage.setItem('savedMeals', JSON.stringify(savedMeals));
			toast.error('Meal Removed');
			setIsSaved(false);
		}
	};

	return (

		<>
		{id? (
					<Box py="10rem">
					<Flex justify="flex-start" align="flex-start" gap="5rem">
						<Box>
							<Image src={data.strMealThumb} width="300px" height="300px" />
						</Box>
						<Box>
							<Text as="h2" fontSize="3rem" color="#717171">
								{data.strMeal}
							</Text>
		
							<UnorderedList justify="center" align="center">
								<ListItems>{data.strCategory}</ListItems>
								<ListItems>{data.strArea}</ListItems>
								<ListItems>{data?.strTags?.split(',').join(', ')}</ListItems>
							</UnorderedList>
		
							<Button
								mt="2rem"
								bg="btn.primary"
								py="2rem"
								px="3rem"
								fontSize="1.8rem"
								onClick={handleSaveButtonClick}
							>
								{isSaved ? <>Remove</> : <>Save</>}
							</Button>
						</Box>
					</Flex>
		
					<Box mt="10rem">
						<IngredientsTable ingredientsWithMeasures={ingredientsWithMeasures} />
					</Box>
					<UnorderedList mt="10rem">
						<Text as="h2" mb="2rem" fontSize="3rem">
							instructions
						</Text>
						{data.strInstructions
							.split('.')
							.filter(sentence => sentence !== '')
							.map(sentence => (
								<ListItem fontSize="1rem" color="text" py="10px" key={sentence}>
									<Flex align="center" justify="flex-start">
										<ListIcon as={Circle} bg="bgPrimary" fontSize=".5rem" />
										<Box gap="1rem">{sentence}</Box>
									</Flex>
								</ListItem>
							))}
					</UnorderedList>
				</Box>
		) : (null)}

		</>
	);
}

export default SingleMealPage;
