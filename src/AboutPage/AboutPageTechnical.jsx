import React from 'react';

const AboutPageTechnical = () => {
  return (
    <>
      <h1>
        The real important stuff
        <span role="img" aria-label="hand">
          😎
        </span>
      </h1>
      <div className="AboutTextContent">
        <p className="CategoryTitle">Front-End</p>
        <p>React | StoryBook | Material Design </p>
        <p className="CategoryTitle">Back-End</p>
        <p>Node.js | Golang | GraphQL | SQL | Express | Hapi.js</p>
        <p className="CategoryTitle">Architecture</p>
        <p>AWS SQS, SNS, Lambda, API-Gateway</p>
        <p className="CategoryTitle">Design</p>
        <p>Figma</p>
        <p className="CategoryTitle">Integrations</p>
        <p>Stripe | Postmark</p>
        <p className="CategoryTitle">Have used but am not proficient with</p>
        <p>PHP, MongoDB, Kubernetes, Docker, Ansible</p>
      </div>
    </>
  );
};

export default AboutPageTechnical;
