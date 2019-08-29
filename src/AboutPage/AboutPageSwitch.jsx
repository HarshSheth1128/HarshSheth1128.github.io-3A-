import React from 'react';
import './AboutPageSwitch.scss';

const AboutPageSwitch = ({ index, setPageState }) => {
  console.log(index);
  return (
    <div className="AboutPageSwitch">
      <div
        className={index == 0 ? 'ActiveSwitch' : 'InactiveSwitch'}
        onClick={() => setPageState('index', 0)}
      >
        <p>Personal</p>
      </div>
      <div
        className={index == 1 ? 'ActiveSwitch' : 'InactiveSwitch'}
        onClick={() => setPageState('index', 1)}
      >
        <p>Technical</p>
      </div>
    </div>
  );
};

export default AboutPageSwitch;
