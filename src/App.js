import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Line from './common/Line';
import NavBar from './common/NavBar/NavBar';
import AboutPage from './AboutPage/AboutPage';
import ProjectsPage from './ProjectsPage/ProjectsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Line margins="50px" />
        <Route path="/" exact component={MainPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/projects" exact component={ProjectsPage} />
        <Line margins="50px" style={{ marginBottom: '100px' }} />
      </Router>
    </div>
  );
}

export default App;
