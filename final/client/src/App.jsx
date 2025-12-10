import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from './Home.jsx';
import Secrets from './Secrets.jsx';

import * as fs from 'fs';
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

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
              <NavLink to="/secrets">
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