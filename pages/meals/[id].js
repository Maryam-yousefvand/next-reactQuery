
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import IngredientsTable from '../../components/mealspage/IngredientsTable';
import PointText from '../../components/text/PointText';
import Text from '../../components/text/Text';
import Title from '../../components/text/Title';
import classes from '../../styles/meals.module.scss';
import { Button } from '../../components/button/Button';
import toast from 'react-hot-toast';
import { useSingleMeal } from '../../hooks/meals';


function SingleMealPage() {
  const router = useRouter();
  const { id } = router.query;
  const [isSaved, setIsSaved] = useState(false);


  const {data, isLoading, isError, error,} = useSingleMeal(id)

  useEffect(() => {
    if (localStorage.getItem('savedMeals')) {
      const savedMeals = JSON.parse(localStorage.getItem('savedMeals'));
      if (savedMeals.includes(id)) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
      }
    } else {
      localStorage.setItem('savedMeals', JSON.stringify([]));
    }
  }, [id]);

  if (isError) {
    return <Text>{error}</Text>;
  }

  if (isLoading && !data) {
    return <BeatLoader color="#fff" />;
  }

  const ingredients = Object.keys(data).filter((key) => key.startsWith('strIngredient'))
    .filter((key) => data[key] !== '' && data[key] !== null);



  const ingredientsWithMeasures = ingredients.map((key, index) => ({
    index: index + 1,
    ingredient: data[key],
    measure: data[`strMeasure${index + 1}`],
  }));

  const handleSaveButtonClick = async () => {
  const savedMeals = JSON.parse(localStorage.getItem('savedMeals'))
  if(!isSaved){
    savedMeals.push(data.idMeal)
    localStorage.setItem('savedMeals', JSON.stringify(savedMeals))
    toast.success("Meals Saved")
    setIsSaved(true)
  }else{
     savedMeals.splice(savedMeals.indexOf(data.idMeal), 1)
     localStorage.setItem("savedMeals", JSON.stringify(savedMeals))
     toast.error('Meal Removed')
     setIsSaved(false)
  }
  };



  return (
    <div className={classes.pageWrapper}>
      <div className={classes.topContainer}>
        <div className={classes.img}>
          <Image src={data.strMealThumb} width={300} height={300} />
        </div>
        <div className={classes.info}>
          <Title variant="primary">{data.strMeal}</Title>
          <PointText className={classes.infoText}>
            Category:
            {' '}
            {data.strCategory}
          </PointText>

          <PointText className={classes.infoText}>
            Area:
            {' '}
            {data.strArea}
          </PointText>
          <PointText className={classes.infoText}>
            Tags:
            {' '}
            {data?.strTags?.split(',').join(', ')}
          </PointText>

          <Button
           variant="primary" className={classes.saveButton} onClick={handleSaveButtonClick}>
          
           {isSaved? (<>Remove</>) : (<>Save</>)}

          </Button>

        </div>
      </div>
      <div className={classes.ingredientsTable}>
        <IngredientsTable ingredientsWithMeasures={ingredientsWithMeasures} />
      </div>
      <div className={classes.instructions}>
        <Title>instructions</Title>
        {data.strInstructions.split('.').filter((sentence) => (
          sentence !== '')).map((sentence) => (
            <PointText key={sentence}>
              {sentence}
            </PointText>
        ))}
      </div>

    </div>
  );
}

export default SingleMealPage;
