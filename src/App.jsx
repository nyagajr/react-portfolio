import Navbar from "./components/navbar/Navbar";
import Contact from './components/contact/Contact';
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import './app.scss';
import {useState} from 'react'


function App() {
  const[humOpen,setHumOpen] = useState(false)
  return (
    <div className="app">
     <Navbar humOpen={humOpen} setHumOpen={setHumOpen}/>
     <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Contact/>
      
     </div>
    
    </div>
  );
}

export default App;
