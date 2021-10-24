import React, {useState, useEffect } from "react";

const Quoteurl = "https://api.quotable.io/random";

const Quotes = () => {

  const [ data, setData] = useState([]); 


  const nextQuote = () => {
    fetch(Quoteurl)
      .then((res) => res.json())
      .then((QuoteData) => setData(QuoteData));
  };

  useEffect(() => {
    nextQuote();
  }, []);

  return (
    <div className = "mainDiv">
      <div className = "QuoteContent">{data.content} </div>
      <div className = "QuoteAuthor">{data.author}</div>
      <div className = "QuoteButton">
        <button  onClick={nextQuote}> Next Quote</button>
      </div>
    </div>
  );
};


export default Quotes;
