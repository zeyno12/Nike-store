import React from 'react';
import './scss/style.scss';
import Hero  from './components/Hero';
import  Sales  from './components/Sales';
import { heroapi,popularsales,toprateslaes, highlight,sneaker ,footerAPI} from './data/data';
import FlexContent  from './components/FlexContent';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Card from './components/Card';
function App() {
  return (
    <>
    <Navbar/>
    <Card/>
      <main>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales}/>
        <FlexContent endpoint={highlight}/>
        <Sales endpoint={toprateslaes}/>
        <FlexContent endpoint={sneaker}/>
      </main>
      <Footer footerAPI={footerAPI} />
    </>

  );
}
export default App;
