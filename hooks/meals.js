import {
	getCategories,
	getMeals,
	getQueriedMeals,
	getSingleMeal,
} from '../api/meals';
import { useQuery } from '@tanstack/react-query';



const useAllCategories = () => {
	return useQuery(['categories'], getCategories);
};

const useSelectedCategory = queryKey => {
	return useQuery(['mealsByCategory', queryKey], getMeals);
};

const useQueryMeals = queryKey => {
	return useQuery(['mealsByCategory', queryKey], getQueriedMeals);
};

const useSingleMeal = queryKey => {
	return useQuery(['singleMeal', queryKey], getSingleMeal);
};

export { useAllCategories, useSelectedCategory, useQueryMeals, useSingleMeal };
