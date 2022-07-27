
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
      <Route exact path="VGB/" element={<Home/>} />
      <Route exact path="VGB/home" element={<Home/>} />
      <Route exact path="VGB/about" element={<About/>} />
      <Route exact path="VGB/help" element={<Help/>} />
      <Route exact path="VGB/dsa" element={<Dsa/>} />
      <Route exact path="VGB/appdev" element={<AndroidDev/>} />
      <Route exact path="VGB/webdev" element={<WebDev/>} />
      
        </Routes>
      </Router>
     
        </>
 );
}

export default App;
