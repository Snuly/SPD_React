import React from 'react';

const Quote = ({ text, author }) => {
    return (
      <div>
        <h2>{author}</h2>
        <p>{text}</p>
      </div>
    );
  };

export default Quote;