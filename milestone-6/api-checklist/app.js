function loadSingleUser() {
  fetch()
    .then(res => res.json())
    .then(data => displaySingleUser(data.results[0]));
}
loadSingleUser();

const displaySingleUser = user => {
  console.log(user);
};

// meal db
const toggleSpinner = displayStyle => {
  document.getElementById('spinner').style.display = displayStyle;
};
const toggleSearchResult = displayStyle => {
  document.getElementById('meals').style.display = displayStyle;
};
const searchMeal = () => {
  const searchText = document.getElementById('search-field').value;

  // display spinner
  toggleSpinner('block');

  loadMeals(searchText);
  document.getElementById('search-field').value = '';
};

const loadMeals = searchText => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
};
const displayMeals = meals => {
  const container = document.getElementById('meals');
  container.textContent = '';
  if (!meals) {
    return alert`Sorry! this is not valid meals name.`;
  }
  meals?.forEach(meal => {
    console.log(meal);
    const div = document.createElement('div');
    div.innerHTML = `
    <h1>${meal.strMeal}</h1>
    <p>${meal.strIngredient18 ? meal.strIngredient18 : ''}</p>
    <button onclick="loadMealDetail('${meal.strMeal}')">click me </button>
    `;
    container.appendChild(div);
  });
  toggleSpinner('none');
  toggleSearchResult('block');
};

loadMeals('fish');

const loadMealDetail = mealName => {
  console.log(mealName);
};
