import React from "react";

function Fruits() {
    const foods = [ '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍒', '🍓', '🥝', '🍅', '🥑' ];

    let foodOptions = document.createElement('div');

    for (let f of foods) {
        let fruitButton = document.createElement('button');
        fruitButton.classList.add("fruit-button");
        fruitButton.innerHTML = f;
        foodOptions.appendChild(fruitButton);
    }

    return (
        <div>
            {foodOptions}
        </div>
    );

}

const foods = [ '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍒', '🍓', '🥝', '🍅', '🥑' ];

let foodOptions = document.createElement('div');

for (let f of foods) {
    let fruitButton = document.createElement('button');
    fruitButton.classList.add("fruit-button");
    fruitButton.innerHTML = f;
    foodOptions.appendChild(fruitButton);
}

export default Fruits;