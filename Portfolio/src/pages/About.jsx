import React from 'react';
import './About.css'; // Make sure to create an About.css file for styling

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        Hello! I'm John, a passionate front-end developer with a love for creating
        beautiful and functional web applications. With a keen eye for design and
        a commitment to clean, efficient code, I strive to deliver exceptional digital
        experiences.
      </p>
      <p>
        I specialize in React and have experience working with a variety of modern
        web technologies. When I'm not coding, you can find me exploring the great
        outdoors or tinkering with the latest tech gadgets.
      </p>
      {/* Add more personal details, experiences, or a professional photo if you like */}
    </div>
  );
}

export default About;
