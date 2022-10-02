import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import classes from './Button.module.scss';

function ButtonWithLink({ link = '/', children, variant = 'secondry' }) {
  return (
    <Link href={link}>
      <a
        type="button"
        className={clsx(classes.button, classes[`variant__${variant}`])}
      >
        {children}

      </a>

    </Link>
  );
}

function Button({
  children, variant = 'secondry',  className, onClick,
}) {
  return (

    <button
      type="button"
      className={clsx(classes.button, className, classes[`variant__${variant}`])}
      onClick={onClick}
    >
      {children}

    </button>

  );
}

export default ButtonWithLink;
export { Button };
