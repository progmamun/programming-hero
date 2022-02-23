const searchFood = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // console.log(searchText);
  searchField.value = '';
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals));
};

const displaySearchResult = meals => {
  const searchResult = document.getElementById('search-result');
  meals.forEach(meal => {
    console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
  <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="${
      meal.strMeal
    }">
  <div class="card-body">
    <h4 class="card-title">${meal.strMeal}</h4>
    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
  </div>
</div>
    `;
    searchResult.appendChild(div);
  });
};
