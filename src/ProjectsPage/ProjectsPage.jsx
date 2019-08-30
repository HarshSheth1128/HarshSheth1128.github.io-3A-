import React, { Component } from 'react';
import ProjectsPageCard from './ProjectsPageCard';
import './ProjectsPage.scss';
import ProjectPancake from '../assets/Project-Pancake.jpg';
import Grow from '../assets/grow.jpg';
import Tetris from '../assets/tetris.jpg';
import NPM from '../assets/npm.png';
import Focus from '../assets/focus.png';
import Laughing from '../assets/laughing.png';
import Reddit from '../assets/reddit.jpg';
import Weather from '../assets/weather.jpg';
import Pong from '../assets/pong.png';
import Waterloo from '../assets/waterloo.jpg';
import Android from '../assets/android.jpg';

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ProjectsContainer">
        <ProjectsPageCard image={ProjectPancake} title="Movie Buddy" />
        <ProjectsPageCard image={Grow} title="Grow" />
        <ProjectsPageCard image={Tetris} title="Two Player Tetris" />
        <ProjectsPageCard image={NPM} title="Nutritionalize" />
        <ProjectsPageCard image={Focus} title="Focus" />
        <ProjectsPageCard image={Laughing} title="Jokes Extension" />
        <ProjectsPageCard image={Reddit} title="Reddit Quick Posts" />
        <ProjectsPageCard image={Weather} title="Weather App" />
        <ProjectsPageCard image={Pong} title="Pong" />
        <ProjectsPageCard image={Waterloo} title="Track Courses" />
        <ProjectsPageCard image={Android} title="Android Applications" />
      </div>
    );
  }
}

export default ProjectsPage;
