import React, { Component } from 'react';
import ContentSwitch from '../common/ContentSwitch';
import AboutPagePersonal from './AboutPagePersonal';
import './AboutPage.scss';
import AboutPageTechnical from './AboutPageTechnical';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: new URLSearchParams(props.location.search).get('index')
    };
  }

  componentWillMount() {
    console.log(this.state.index);
  }

  render() {
    return (
      <div className="AboutContentWrapper">
        <ContentSwitch index={this.state.index}>
          <AboutPagePersonal />
          <AboutPageTechnical />
        </ContentSwitch>
      </div>
    );
  }
}

export default AboutPage;
