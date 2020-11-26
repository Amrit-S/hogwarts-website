import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import ClassesPage from './pages/ClassesPage';
import FoundersPage from './pages/FoundersPage';
import GalleryPage from './pages/GalleryPage';



class App extends React.Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <HomePage {...props}/>}/>
          <Route path="/classes" exact render={(props) => <ClassesPage {...props}/>}/>
          <Route path="/founders" exact render={(props) => <FoundersPage {...props}/>}/>
          <Route path="/gallery" exact render={(props) => <GalleryPage {...props}/>}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
