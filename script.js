document.getElementById("random-recipe-btn").addEventLIstener('click', function() {
    const recipes = document.querySelectorAll('.recipe-card');
    if (recipes.length > 0) {
        cosnt randomIndex = Math.floor(Math.random() * recipes.length)
        const randomRecipe = recipes[randomIndex].cloneNode(true);
        document.getElementById('random-recipe').innerHTML = '';
        document.getElementById('random-recipe').appendChild(randomRecipe);
    }else {
        alert('No recipes available to display.');
    }
});

