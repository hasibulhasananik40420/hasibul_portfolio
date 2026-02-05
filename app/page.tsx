"use client";
import Hero from './components/section/Hero';
import About from './components/section/About';
import Portfolio from './components/section/Portfolio';
import Experience from './components/section/Experience';
import Contact from './components/section/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  )
}

export default Home;