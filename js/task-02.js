const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = ingredients.map((element) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = element;
  ingredientEl.classList.add("item");
  return ingredientEl;
});

console.log(ulList);
const list = document.querySelector("#ingredients");
list.append(...ulList);

