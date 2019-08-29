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
        <p>React | StoryBook | Material Design </p>
        <p>Node.js | Golang | GraphQL | SQL | Express | Hapi.js</p>
        <p>AWS SQS, SNS, Lambda, API-Gateway</p>
        <p>Figma</p>
        <p>Stripe | Salesforce | Postmark</p>
        <p>PHP, MongoDB, Kubernetes, Docker, Ansible</p>
      </div>
    </>
  );
};

export default AboutPageTechnical;
