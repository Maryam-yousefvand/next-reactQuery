import Image from 'next/image';
import React from 'react';
import Text from '../text/Text';
import classes from './HeroSection.module.scss';
import HeroImg from '../../images/hero_img.jpg';

import ButtonWithLink from '../button/Button';

function HeroSection() {
  return (
    <section className={classes.hero__section}>
      <div className={classes.hero__container}>
        <div className={classes.hero__info}>
          <h1 className={classes.hero__title}>
            <span>meal recipe</span>
            for you
          </h1>
          <Text>a listing website of meal recipe</Text>
          <div className={classes.hero__buttons}>
            <ButtonWithLink link="/meals" variant="primary">Explore Meals</ButtonWithLink>
            <ButtonWithLink link="sevedMeals">Saved Meals</ButtonWithLink>
          </div>
        </div>
        <div className={classes.hero__img}>
          <Image src={HeroImg} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
