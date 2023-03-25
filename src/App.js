import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <div className='fixed top-0 w-full'>
        <Navbar/>
      </div>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
