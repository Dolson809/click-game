import React, { Component } from 'react';
import './App.css';
import FriendCard from './components/FriendCard';
import Footer from './components/Footer/Footer';
import Jumbotron from './components/jumbotron';
import Food from "./Food.json";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    Food,
    clickedFood: [],
    score: 0
  };

  imageClick = event => {
    const currnetFood = event.target.alt;
    const FoodClickedAlready = this.state.clickedFood.indexOf(currnetFood) > -1;

    if (FoodClickedAlready) {
      this.setState({
        Food: this.state.Food.sort(function ()  {
          return 0.5 - Math.random();
        }),
        clickedFood: [],
        score: 0
      });
      alert("Game Over.");
    } else {
      this.setState({
        Food: this.state.Food.sort(function () {
          return 0.5 - Math.random();
        }),
        clickedFood: this.state.clickedFood.concat(
          currnetFood
        ),
        score: this.state.score + 1
      },
        () => {
          if (this.state.score === 12) {
            alert("You Win!");
            this.setState({
              car: this.state.Food.sort(function (a, b) {
                return 0.5 - Math.random()
              }),
              clickedFood: [],
              score: 0
            });
          }
        }
      );
    }
  }

  render() {
    return (

      <div>

        <Navbar />

        <Jumbotron score={this.state.score} />
        <div className="wrapper">
          {this.state.Food.map(Food => (
            <FriendCard
              imageClick={this.imageClick}
              id={Food.id}
              key={Food.id}
              image={Food.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
};






export default App;
