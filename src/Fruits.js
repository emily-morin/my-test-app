import React, { Component } from "react";
import "./Fruits.css";

class Fruits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: []
        }
    }

    fruits = [ '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍒', '🍓', '🥝', '🍅', '🥑' ];

    chooseFruit = (e) => {
        let chosenFruit = e.target.value;

        // alert(`You clicked ${chosenFruit} !`);

        let newChoices = [chosenFruit, ...this.state.choices];

        this.setState({
            choices: newChoices
        });
    }

    // removeFruit = (e) => {}
    // function to remove a fruit from the list of chosen fruits
    // design JSX to show an X the user can click to trigger this function

    foodOptions = this.fruits.map((fruit, index) => {
        return (
                <button onClick={this.chooseFruit} key={index} value={fruit} className="Fruits-button">{fruit}</button>
        );
    }
    );

    render() {
    return (
        <div className="Fruits-container">
            <h2>Choose a fruit:</h2>
            <div className="Fruits-options">
                {this.foodOptions}
            </div>
            <div className="Fruits-choices">
                <h2>{this.state.choices ? "You have chosen:" : ""}</h2>
                {this.state.choices}
            </div>
        </div>
    );
    }
}

export default Fruits;