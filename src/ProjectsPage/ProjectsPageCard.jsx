import React from 'react';
import './ProjectsPageCard.scss';
import ProjectPancake from '../assets/Project-Pancake.jpg';

const ProjectsPageCard = ({ title, image, link }) => {
  return (
    <div
      className="CardWrapper"
      onClick={() => {
        window.location.href = link;
      }}
    >
      <img style={{ height: '100%' }} src={image} />
      <p className="CardTitle">{title}</p>
    </div>
  );
};

export default ProjectsPageCard;
