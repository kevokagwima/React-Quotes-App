import React from "react";
import Quotes, { colors } from "./quotes";

class Quote_box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      color: "",
    };
  }
  render() {
    const allQuotes = Quotes;
    const allColors = colors;
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    const randomColorIndex = Math.floor(Math.random() * allColors.length);
    const randomQuote = allQuotes[randomIndex];
    const randomColor = allColors[randomColorIndex];

    const handleClick = () => {
      this.setState({
        quote: randomQuote,
        color: randomColor,
      });
    };

    return (
      <div style={{ backgroundColor: this.state.color }} className="quote-box">
        <div style={{ color: this.state.color }} id="quote-box">
          <div id="text">
            <p>
              {this.state.quote === ""
                ? randomQuote.text
                : this.state.quote.text}
            </p>
          </div>
          <div id="author">
            -{" "}
            {this.state.quote === ""
              ? randomQuote.author
              : this.state.quote.author}
          </div>
          <div className="bottom">
            <div id="post">
              <a
                target="_blank"
                href="twitter.com/intent/tweet/{this.state.quote}"
              >
                Twitter
              </a>
            </div>
            <div id="quote-btn">
              <button
                style={{ backgroundColor: this.state.color }}
                onClick={handleClick}
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote_box;
