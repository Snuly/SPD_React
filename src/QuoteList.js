// src/components/QuoteList.js
import React, { useEffect, useState } from 'react';
import Quote from './Quote';

const QuoteList = () => {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
            const response = await fetch('https://dummyjson.com/quotes');
            const data = await response.json();
          
            setQuotes(data.quotes);
    };

    fetchQuotes();
  }, []);

  const listStyle = {
    padding: 0
  };

  return (
    <div>
      <h1>Quotes</h1>
      {quotes !== null && Array.isArray(quotes) ? (
        <ul style={listStyle}>
          {quotes.map((quote) => (
            <Quote text={quote.quote} author={quote.author} />
          ))}
        </ul>
      ) : (null)}
    </div>
  );
};

export default QuoteList;
