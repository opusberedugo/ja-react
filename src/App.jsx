// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './global.css'
import Hero from './components/hero';	
import Navbar from './components/navbar';

function App() {
  
  return(
    <>
    <Navbar brandName={"JESUS ARMY"}/>  
      <Hero 
        title="Welcome to Jesus Army" 
        lead="This is a simple hero component" 
        cta="Join the Ranks" /> 
    </>
    
  );
}

export default App
