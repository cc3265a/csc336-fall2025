import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from './Home.jsx';
import Secrets from './Secrets.jsx';



function App() {

  const [fromServer, setFromServer] = useState({something: 0});

  useEffect(() => {
    fetch("/api/data")
      .then(result => result.json())
      .then(data => setFromServer(data));

    
  }, []);

  return (
    <>
      {fromServer.something }
        <BrowserRouter>
          <nav id="routerCSS">
              <NavLink to="/">Home |  </NavLink>
              <NavLink to="/secrets" style={
                ({ isActive }) =>
                  isActive
                    ? {
                        color: '#000000ff',
                        background: '#f0f0f0'
                      }
                    : { color: '#545e6f', background: '#c6c6c6ff' }
              }>
                Secrets |  
                </NavLink>
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