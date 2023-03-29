import React from "react";
import colors from "./quotes";

class Quote_box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      color: "",
    };

    this.getQuote = () => {
      fetch("https://type.fit/api/quotes").then((res) => {
        res.json().then((data) => {
          const randomIndex = Math.floor(Math.random() * data.length);
          this.setState({
            quote: data[randomIndex],
          });
        });
      });
      const allColors = colors;
      const randomColorIndex = Math.floor(Math.random() * allColors.length);
      const randomColor = allColors[randomColorIndex];
      this.setState({
        color: randomColor,
      });
    };

    this.componentDidMount = () => {
      setInterval(() => {
        this.getQuote();
      }, 10000);
    };

    this.handleClick = () => {
      this.getQuote();
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.color }} className="quote-box">
        <div style={{ color: this.state.color }} id="quote-box">
          <div id="text">
            <p>
              {this.state.quote === "" ? "Loading..." : this.state.quote.text}
            </p>
          </div>
          <div id="author">
            - {this.state.quote === "" ? "Loading..." : this.state.quote.author}
          </div>
          <div className="bottom">
            <div style={{ backgroundColor: this.state.color }} id="post">
              <a
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${this.state.quote.text}`}
              >
                <i class="fa fa-twitter"></i>
              </a>
            </div>
            <div id="quote-btn">
              <button
                style={{ backgroundColor: this.state.color }}
                onClick={this.handleClick}
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
        <p id="by">By Kevin Kagwima</p>
      </div>
    );
  }
}

export default Quote_box;
