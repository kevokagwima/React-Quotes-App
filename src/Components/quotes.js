import React, { useState, useEffect } from "react";
import colors from "./colors";

export default function Quote_box() {
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });
  const [color, setColor] = useState("");

  function randomColor() {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomColorIndex];
    setColor(randomColor);
  }

  function randomQuote() {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      });
    randomColor();
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      randomQuote();
      randomColor();
    }, 10000);
    return () => clearTimeout(timer);
  }, [quote]);

  return (
    <div style={{ backgroundColor: color }} className="quote-box">
      <div style={{ color: color }} id="quote-box">
        <div id="text">
          <p>{quote.text === "" ? "Loading..." : quote.text}</p>
        </div>
        <div id="author">
          {quote.author === "" ? "Loading..." : quote.author}
        </div>
        <div className="bottom">
          <div style={{ backgroundColor: color }} id="post">
            {quote.text && (
              <a
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${quote.text}`}
              >
                <i class="fa fa-twitter"></i>
              </a>
            )}
          </div>
          <div id="quote-btn">
            <button style={{ backgroundColor: color }} onClick={randomQuote}>
              New Quote
            </button>
          </div>
        </div>
      </div>
      <p id="by">By Kevin Kagwima</p>
    </div>
  );
}
