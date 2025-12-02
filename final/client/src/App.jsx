import { useState } from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from './Home.jsx';
import Secrets from './Secrets.jsx';



function App() {
  return (
    <BrowserRouter>
    <nav>
        <NavLink to="/">Home |  </NavLink>
        <NavLink to="/secrets">Secrets |  </NavLink>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/secrets" element={<Secrets/>}/>
      </Routes>

  </BrowserRouter>
  );
}

export default App;