const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.children;
const itemsCount = categoriesList.children.length;
console.log(`Number of categories: ${itemsCount}`);

Array.from(categoryItems).forEach(category => {
  const categoryName = category.firstElementChild.textContent; 
  const categoryElements = category.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});



