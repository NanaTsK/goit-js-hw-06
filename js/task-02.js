const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const menuIngredients = document.getElementById("ingredients");

const ingredientItems = ingredients.map((ingredient) => {
    const ingredientItem = document.createElement('li'); 
    ingredientItem.classList.add("item");
    ingredientItem.textContent = ingredient;
    return ingredientItem
});

menuIngredients.append(...ingredientItems);

