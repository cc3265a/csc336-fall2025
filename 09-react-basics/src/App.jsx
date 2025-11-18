import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from './Home.jsx';
import About from './About.jsx';
import Space from './Space.jsx';

function App() {
  return(
  <BrowserRouter>
    <nav>
        <NavLink to="/">Book Tracker |  </NavLink>
        <NavLink to="/about">About | </NavLink>
        <NavLink to="/space">Space!</NavLink>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/space" element={<Space/>}/>
    </Routes>

  </BrowserRouter>
  )
}


export default App