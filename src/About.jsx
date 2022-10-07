import React from 'react';

const About = (props) => {
  const h1style = {
    color: '#fff',
  };

  const buttonStyle = {
    color: '#fff',
    backgroundColor: '#222',
  };
  return (
    <>
      <h1 style={h1style}>about</h1>
      <button style={buttonStyle}>go main</button>
    </>
  );
};

export default About;
