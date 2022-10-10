import { Link, Text } from '@chakra-ui/react';
import Image from 'next/image';

import React from 'react';


function SingleMealCard({ meal }) {
  return (

    <>
    {meal? (
       <Link href={`/meals/${meal.idMeal}`} >
      
       <Image src={meal.strMealThumb} height="200" width="300" />
       <Text as='h2' fontSize='1.8rem' color='textLight' textTransform='capitalize'>
         {meal.strMeal}
       </Text>
    
   </Link>
    ) : (null)}
    </>

   
  );
}

export default SingleMealCard;
