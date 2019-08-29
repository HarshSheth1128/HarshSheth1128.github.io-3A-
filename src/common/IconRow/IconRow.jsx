import React from 'react';
import EmailIcon from '../../assets/email.svg';
import FacebookIcon from '../../assets/facebook.svg';
import GithubIcon from '../../assets/github.svg';
import InstagramIcon from '../../assets/instagram.svg';
import PhoneIcon from '../../assets/phone.svg';
import LinkedinIcon from '../../assets/linkedin.svg';
import './IconRow.scss';

const IconRow = () => {
  return (
    <div className="IconWrapper">
      <img className="Icon" alt="EmailIcon" src={EmailIcon} />
      <img className="Icon" alt="FacebookIcon" src={FacebookIcon} />
      <img className="Icon" alt="GithubIcon" src={GithubIcon} />
      <img className="Icon" alt="InstagramIcon" src={InstagramIcon} />
      <img className="Icon" alt="PhoneIcon" src={PhoneIcon} />
      <img className="Icon" alt="LinkedinIcon" src={LinkedinIcon} />
    </div>
  );
};

export default IconRow;
