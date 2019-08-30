import React from 'react';

const AboutPagePersonal = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        Hi there!&nbsp;
        <span role="img" aria-label="hand">
          👋🏽
        </span>
      </h1>
      <div className="AboutTextContent">
        <p>My name is Harsh Sheth</p>
        <p>I am a student at the University of Waterloo in my third year</p>
        <p>
          I am obsessed with technological design and have a dream of someday
          designing something that millions of people love to use around the
          world
        </p>
        <p>
          Whether its UI/UX, creating a scalable Front-End, or creating an
          efficient change resilient API. I am always trying to get more
          productivity and utility out of anything I make
        </p>
        <p>
          I am looking for a internship for Winter 2019 where I will be able to
          help create a product with a passionate team that people love to use
        </p>
        <p>
          In my free time I love to read books, watch sports and movies, play my
          guitar and bore my friends with my obsession over Apple
        </p>
      </div>
    </>
  );
};

export default AboutPagePersonal;
