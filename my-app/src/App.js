// Importing all components to use in App.js
import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Jumbotron from "./components/Jumbotron";
import character from "./cards.json";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

class App extends Component {
  // Setting the initial state. I am using the array of artwork images that is imported from cards.json.
  state = {
    character,
    clickedCharacters: [],
    score: 0,
    goal: 12,
    message: ""
  };
  // The shuffleCharacters method compares the id of the clicked image with one that is stored in the clickedCharacters array.
  shuffleCharacters = id => {
    let clickedCharacters = this.state.clickedCharacters;

    // If the id of the clicked artwork ...
    if(clickedCharacters.includes(id)) {
      this.setState({ clickedCharacters: [], score: 0, message:  "Oops - Try Again!" });
      return;
    } else {
      clickedCharacters.push(id)

      if(clickedCharacters.length === 12) {
        this.setState({score: 12, message: "You Won!", clickedCharacters: []});
        console.log('You Win');
        return;
      }

      this.setState({ character, clickedCharacters, score: clickedCharacters.length, message: "" });

      // Fisher-Yates Shuffling Algorithm for shuffling items in my character array
      const shuffle = character => {
        var i,
            j,
            temp;
        for (i = character.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = character[i];
            character[i] = character[j];
            character[j] = temp;
        }
         
      };
      shuffle(character);
    }
  }

// Renders the imported Navbar with the current score and message, the Jumbotron,
// the Wrapper, and the Footer. When rendering the Wrapper, it maps over this.state.character and renders a Card component for each character object.
render() {
  return (
    
    <div>
      <Navbar 
      score={this.state.score}
      message={this.state.message} 
      />
      <Jumbotron />
      <Wrapper>
        {this.state.character.map(item => (
              <Card
                shuffleCharacters={this.shuffleCharacters}
                id={item.id}
                key={item.name}
                image={item.image}
              />
        ))}
      </Wrapper>
      <Footer />
    </div>
        
  );
}
}

export default App;
