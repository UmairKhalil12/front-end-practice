
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Analytics from './Components/Analytics/Analytics';
import appStore from './zustand/appStore';
import { useState, useEffect } from 'react';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Cards from './Components/Cards/Cards';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nav = appStore((state) => state.nav);
  console.log('mobile nav status', nav);
  return (
    <div className='App'>
      <Navbar  windowWidth ={windowWidth} />
      <Hero MobileNavStatus={nav}  windowWidth ={windowWidth} />
      <Analytics MobileNavStatus={nav} windowWidth ={windowWidth} />
      <NewsLetter MobileNavStatus={nav} windowWidth ={windowWidth} /> 
      <Cards MobileNavStatus={nav} windowWidth ={windowWidth} />
    </div>
  );
}

export default App;
