import React, { Component } from 'react';
import ContentSwitch from '../common/ContentSwitch';
import AboutPagePersonal from './AboutPagePersonal';
import './AboutPage.scss';
import AboutPageTechnical from './AboutPageTechnical';
import AboutPageSwitch from './AboutPageSwitch';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: new URLSearchParams(props.location.search).get('index')
    };
  }

  setPageState = (property, value) => {
    this.setState({ [property]: value });
  };

  render() {
    return (
      <div className="AboutContentWrapper">
        <ContentSwitch index={this.state.index}>
          <AboutPagePersonal />
          <AboutPageTechnical />
        </ContentSwitch>
        <AboutPageSwitch
          index={this.state.index}
          setPageState={this.setPageState}
        />
      </div>
    );
  }
}

export default AboutPage;
