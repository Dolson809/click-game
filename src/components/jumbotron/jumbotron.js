import React, { Component } from "react";
import "./jumbotron.css";

class jumbotron extends Component {
    render() {
        return (
            <header className="header">
                <h1>Clicky Game!</h1>
                <h2>Click on any image to earn a point! Do not click on the same image twice. Click all 12 images to win the game.</h2>
                <h3>Score: {this.props.score}</h3>
            </header>
        )
    }
}



export default jumbotron;