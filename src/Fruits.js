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

        let newChoices = [chosenFruit, ...this.state.choices];

        this.setState({
            choices: newChoices
        });
    }

    foodOptions = this.fruits.map((f) => {
        return (
            <button onClick={this.chooseFruit} key={f} className="Fruits-button">{f}</button>
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