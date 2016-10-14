import React from 'react';
import Menu from './../component/menu';
import Footer from './../component/footer';
import './../../public/styles/style.scss';
export default function Layout(props) {

  return (
    <main id="main" style= { { 'display':'none' } } >
      <Menu/>
      {props.children}
      <Footer/>
    </main>
  );
};
