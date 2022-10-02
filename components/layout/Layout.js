import React from 'react';
import Footer from './Footer';
import classes from './Layout.module.scss';
import NavBar from './NavBar';

function Layouts({ children }) {
  return (
    <div className={classes.container}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layouts;
