import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import userProfile from "./userProfile";
import News from "./news";
function App() {  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={News} />      
        <Route path="/user/:id" component={userProfile} />       
      </Switch>      
    </Router>
  );
}

export default App;
