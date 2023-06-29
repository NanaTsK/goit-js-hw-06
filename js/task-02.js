const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientList = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
    const ingredientItem = document.createElement('li'); 
    ingredientItem.classList.add("item");
    ingredientItem.textContent = ingredient;
    ingridientList.append(ingredientItem);
});
