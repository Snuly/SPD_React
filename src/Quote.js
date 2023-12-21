import React from 'react';

const Quote = ({ text, author }) => {
    return (
      <div>
        <h1>{author}</h1>
        <p>{text}</p>
      </div>
    );
  };

export default Quote;