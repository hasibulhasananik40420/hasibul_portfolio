"use client";
import Hero from './components/section/Hero';
import About from './components/section/About';
import Portfolio from './components/section/Portfolio';
import Serrvice from './components/section/Serrvice';
import Blog from './components/section/Blog';
import Contact from './components/section/Contact';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Portfolio />
      <Serrvice />
      <Blog />
      <Contact />
    </div>
  )
}

export default Home;