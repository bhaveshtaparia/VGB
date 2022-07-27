
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Help from './components/Help';
import AndroidDev from './components/AndroidDev';
import WebDev from './components/WebDev';


import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dsa from './components/Dsa';
import AppDev from './components/AndroidDev';
function App() {
  return (
    <>
   
    <Router>
    <Navbar/>
    

      <Routes>
      
      {/* <Route path="/" component={<Navbar/>} /> */}
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/help" element={<Help/>} />
      <Route exact path="/dsa" element={<Dsa/>} />
      <Route exact path="/appdev" element={<AndroidDev/>} />
      <Route exact path="/webdev" element={<WebDev/>} />
      
        </Routes>
      </Router>
     
        </>
 );
}

export default App;
