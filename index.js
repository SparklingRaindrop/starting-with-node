import { shuffle, take } from "lodash-es";

const ingredients = [
    "Banana", 
    "Apple", 
    "Blueberries", 
    "Brocoli", 
    "Orange", 
    "Almond Milk", 
    "Spinach", 
    "Strawberries", 
    "Carrot", 
    "Ginger", 
    "Avocado", 
    "Peaches", 
    "Frozen Mango"
];

const button = document.querySelector('button');
const ul = document.querySelector('ul');

function shuffleAndRender() {
    // How can we shuffle?
    
    // Shuffle and render 5 ingredients
    const shuffledIngredients = shuffle(ingredients);
    const fiveIngredients = take(shuffledIngredients, 10);

    fiveIngredients.forEach((ingredient) => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ul.append(li);
    });

}

button.addEventListener("click", () => {
    /* This empties the list */
    ul. textContent = null;
    shuffleAndRender();
});

console.log("yooo looo smoothies");