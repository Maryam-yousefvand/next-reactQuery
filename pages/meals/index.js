import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import SearchBar from '../../components/mealspage/SearchBar';
import PointText from '../../components/text/PointText';
import classes from './meals.module.scss';
import Categories from '../../components/categories/Categories';
import SingleMealCard from '../../components/mealspage/SingleMealCard';

const override = {
  display: 'inline-block',
  margin: '0 auto',
};

const getCategories = async () => {
  const { data } = await axios.get('/categories.php');

  return data.categories;
};

const getMeals = async ({ queryKey }) => {
  const { data } = await axios.get(`filter.php?c=${queryKey[1]}`);
  return data?.meals || [];
};

const getQueriedMeals = async ({ queryKey }) => {
  const { data } = await axios.get(`search.php?s=${queryKey[1]}`);
  return data?.meals || [];
};

function Meals() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');
  const {
    data: categories,
    isLoading: categoriesIsLoading,
    isError: categoriesIsError,
  } = useQuery(['categories'], getCategories);

  const { data, isLoading, isError } = useQuery(['mealsByCategory', selectedCategory], getMeals);

  const {
    data: queriedData, isLoading: queriedIsLoading, isError: queriedIsError,
  } = useQuery(['mealsByCategory', query], getQueriedMeals);

  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0].strCategory);
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
          setSelectedCategory(categories[0].strCategory);
        }
      }
    }, 300);
    return () => {
      setQuery('');
      clearTimeout(timeout);
    };
  }, [searchText, categories]);

  return (
    <div className={classes.meals__page}>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <PointText>search meals or select categories from below</PointText>
      <Categories
        categories={categories}
        categoriesIsLoading={categoriesIsLoading}
        categoriesIsError={categoriesIsError}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setQuery={setQuery}

      />

      {isLoading || categoriesIsLoading ? (
        <div className={classes.loadingSpinner}>
          <BeatLoader
            color="#fff"
            loading={isLoading || categoriesIsLoading}
            cssOverride={override}
            size="20"
          />
        </div>
      ) : (null)}

      <div className={classes.meals__container}>
        {!isLoading && !isError && data && data.map((meal) => (
          <SingleMealCard meal={meal} key={meal.idMeal} />
        ))}

        {queriedIsLoading ? (
          <div className={classes.loadingSpinner}>
            <BeatLoader
              color="#fff"
              loading={queriedIsLoading}
              cssOverride={override}
              size="20"
            />
          </div>
        ) : (null)}

        {!queriedIsLoading && !queriedIsError && queriedData
         && queriedData.map((meal) => (
           <SingleMealCard meal={meal} key={meal.idMeal} />
         ))}
      </div>
    </div>
  );
}

export default Meals;
