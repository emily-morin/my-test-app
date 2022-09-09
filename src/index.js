import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// -------- FRUITS MODULES EX --------
import { choice, remove } from "./helpers";
import foods from "./foods";

console.log(`We have ${foods.length} mouth-watering fruits.`);

const randomFruit = choice(foods);

// console.log(`I'd like one ${randomFruit}, please!`);
// console.log(`Here you go: ${randomFruit}`);
// console.log("Delicious! May I have another?");

remove(foods, randomFruit);

// console.log(`I'm sorry, we're all out. We have ${foods.length} fruits left.`);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
        <p>We have {foods.length} mouth-watering fruits.</p>
        <p>I'd like one {randomFruit}, please!</p>
        <p>Here you go: {randomFruit}</p>
        <p>We have {foods.length} fruits left.</p>
    </div>
   </React.StrictMode>
);