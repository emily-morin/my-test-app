// -------- FRUITS MODULES EX --------
import { choice, remove } from "./helpers";

const foods = [ '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍒', '🍓', '🥝', '🍅', '🥑' ];

console.log(`We have ${foods.length} mouth-watering fruits.`);

const randomFruit = choice(foods);

// console.log(`I'd like one ${randomFruit}, please!`);
// console.log(`Here you go: ${randomFruit}`);
// console.log("Delicious! May I have another?");

remove(foods, randomFruit);

// console.log(`I'm sorry, we're all out. We have ${foods.length} fruits left.`);

// export default foods;