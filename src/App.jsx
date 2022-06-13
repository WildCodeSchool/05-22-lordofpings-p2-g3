import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './screen/Home';



function App() {
  return (
    <div  className="app-container">
      <Home />
   
 {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
      
          </Route>
  </Switch> */}


      

  </div>
  );
}

export default App;
