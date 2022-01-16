const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingr = document.querySelector('#ingredients');

const listItemsIngr = ingredients.map(ingredient => { 
  const nameEl = document.createElement('li');
  nameEl.textContent = ingredient;
  nameEl.classList.add('item');
  console.log(nameEl);

  return nameEl;
})

ingr.append(...listItemsIngr);
