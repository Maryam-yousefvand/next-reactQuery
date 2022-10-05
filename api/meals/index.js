
import {client} from '../index'


const getCategories = async () => {
    const { data } = await client.get('/categories.php');
    return data?.categories || [];
};


const getMeals = async ({queryKey}) => {
    const { data } = await client.get(`filter.php?c=${queryKey[1]}`);
   
    return data?.meals || [];
};
  
const getQueriedMeals = async ({queryKey}) => {
    const { data } = await client.get(`search.php?s=${queryKey[1]}`);
    // console.log(data);
    return data?.meals || [];
};

const getSingleMeal = async ({ queryKey }) => {
    const { data } = await client.get(`/lookup.php?i=${queryKey[1]}`);
    return data?.meals?.[0];
};


export{
    getCategories,
    getMeals,
    getQueriedMeals,
    getSingleMeal
   
    
}

