import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import classes from './NavBar.module.scss';
import Logo from '../../images/meal_khuj_logo.png';

function NavBar() {
  return (
    <nav className={classes.navbar}>
      <Link href="/">
        <a className={classes.logo}>
          <Image src={Logo} />
        </a>
      </Link>

      <ul className={classes.navLinks}>
        <li>
          <Link href="/meals">Meals</Link>

        </li>
        <li><Link href="/SavedMeals">Saved List</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
