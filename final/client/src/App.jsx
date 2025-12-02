import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from './Home.jsx';
import Secrets from './Secrets.jsx';



function App() {

  const [fromServer, setFromServer] = useState({something: 0});

  useEffect(() => {
    fetch("http://localhost:3000/api/data")
      .then(result => result.json())
      .then(data => setFromServer(data));

    
  }, []);

  return (
    <>
      {fromServer.something }
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
  </>
  );
}

export default App;