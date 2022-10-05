import { useQueries } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import PointText from '../../components/text/PointText'
import Text from '../../components/text/Text'
import Title from '../../components/text/Title'
import classes from '../../styles/SavedMeals.module.scss'


// ******************************************

import { client } from '../../api'
const getSingleMeal = async ({ queryKey }) => {
  const { data } = await client.get(`/lookup.php?i=${queryKey[1]}`);
  return data?.meals?.[0];
};

// *******************************************

const SavedMeals = () => {

  const [savedMealsId, setSavedMealsId] = useState([])

 

  const queries = savedMealsId.map((id)=>(
   {
    queryKey : ['singleMeal', id],
    queryFn : getSingleMeal
   }
  ))

  const result = useQueries({queries})
  console.log(result);

  useEffect(() => {
    if(localStorage.getItem("savedMeals")){
      setSavedMealsId(JSON.parse(localStorage.getItem("savedMeals")))
    }
  
  }, [])

  
  return (
    <div className={classes.pageWrapper}>
      <Title variant="primary" className={classes.pageTitle}>My Saved Meal List</Title>

      
      <div className={classes.list_container}>

        {savedMealsId.length <= 0 && <Text>No seved Meals</Text>}

        {result && result.map(({data, isLoading} , index) => {
            if(isLoading) {
              return(<BeatLoader color='#fff' key={savedMealsId[index]}></BeatLoader>)
            }

            return (
              <Link href={`/meals/${data.idMeal}`} key={data.idMeal}>
     
                <a className={classes.singleMeal}>
                  <Title variant='secondary' className={classes.mealTitle}>{data.strMeal}</Title>
                  <PointText>
                  Category:
                  {' '}
                  {data.strCategory}
                </PointText>
                <PointText>
                  Area:
                  {' '}
                  {data.strArea}
                </PointText>
                </a>
              </Link>
            )
         })}


      </div>

      
    </div>
  )
}

export default SavedMeals