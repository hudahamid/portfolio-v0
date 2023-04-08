import React from 'react';
import Navbar from './component/navbar/Navbar';
import Intro from './component/intro/Intro';
import Services from './component/Servicess/Services';


function App() {
  return (
    <div className="App">
     <Navbar/>
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
