import React, { useState, useEffect } from "react";

function Quote() {
  const [quotes, setQuotes] = useState([]);

  const getQuotes = () => {
    fetch("https://programming-quotes-api.herokuapp.com/Quotes/random")
      .then((response) => response.json())
      .then((response) => setQuotes(response));
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="quote-wrapper">
      <h1 className="title">Quotes</h1>
      <div className="quote">{JSON.stringify(quotes.en)}</div>
      <div className="author">Author: {JSON.stringify(quotes.author)}</div>
      <div className="btn-wrapper">
        <button onClick={getQuotes} className="btn">
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
