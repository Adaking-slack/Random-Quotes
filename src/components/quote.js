import React from "react";
import quoteData from "../quoteData.js";

export default function Quote() {

  const [quotesArray, setQuote] = React.useState({
    randomText: "",
    author: ""
  })


  function handleClick() {
    const quotesArray = quoteData.data.quotes
    const randomQuotes = Math.floor(Math.random() * quotesArray.length)
    const text = quotesArray[randomQuotes].text
    const author = quotesArray[randomQuotes].author
    setQuote({
      randomText: text,
      author: author

    })
  }

  return (
    <>
      <main>
        <header>
          <h1>Generate Quote</h1>
        </header>

        <div className="quote-box">
          <blockquote className="quotes">{quotesArray.randomText}
                    <p className="author">~{quotesArray.author}</p>

          
          </blockquote>
        </div>

        <div className='btn'>
          <button onClick={handleClick}>Generate quote</button>
        </div>

      </main>
    </>
  )
}