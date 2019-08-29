import React, { Component } from 'react';
import './MainPage.scss';
import IconRow from '../common/IconRow/IconRow';
import Me from '../assets/me.png';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="MainPageContentWrapper">
        <img className="MeImage" height="300" alt="me" src={Me} />
        <p className="TitleText">Harsh Sheth</p>
        <h2 className="SubtitleText">
          I like making things that people will love to use
        </h2>
        <IconRow />
        <p> Welcome to my little corner of the internet</p>
      </div>
    );
  }
}

export default MainPage;
