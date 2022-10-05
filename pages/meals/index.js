
import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import SearchBar from '../../components/mealspage/SearchBar';
import PointText from '../../components/text/PointText';
import classes from '../../styles/meals.module.scss';
import Categories from '../../components/categories/Categories';
import SingleMealCard from '../../components/mealspage/SingleMealCard';

import {useAllCategories,useSelectedCategory,useQueryMeals} from '../../hooks/meals'


const override = {
  display: 'inline-block',
  margin: '0 auto',
};



function Meals() {


  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');

  const {data:categories, isLoading:categoriesIsLoading, isError:categoriesIsError} = useAllCategories()
  const { data, isLoading, isError } = useSelectedCategory(selectedCategory);
  const {data: queriedData, isLoading: queriedIsLoading, isError: queriedIsError} = useQueryMeals(query);


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
