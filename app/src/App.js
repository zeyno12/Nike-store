import React from 'react';
import './scss/style.scss';
import Hero  from './components/Hero';
import { heroapi } from './data/data';
function App() {
  return (
    <>
      <main>
        <Hero heroapi={heroapi}/>
      </main>
    </>

  );
}
export default App;
