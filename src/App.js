
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Analytics from './Components/Analytics/Analytics';
import appStore from './zustand/appStore';
import { useState, useEffect } from 'react';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';


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
      <Hero  />
      <Analytics  />
      <NewsLetter /> 
      <Cards  />
      <Footer />
    </div>
  );
}

export default App;
