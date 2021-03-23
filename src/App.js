import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header/Header';
import AboutMe from './components/About/About';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience'


function App() {
  return (
    <>
      <Particles 
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area:900
              }
            },
            shape: {
              type: "star",
              stroke:{
                width:6,
                color:"#c3073f"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />  
    </>
  
  );
}

export default App;
