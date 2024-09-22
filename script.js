 // Add this event listener to the search input
document.getElementById('search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    document.querySelectorAll('#recipe-list .recipe-card').forEach(card => {
        const recipeName = card.querySelector('h3').textContent.toLowerCase();
        if (recipeName.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});


// Random Recipe Generator
document.getElementById('random-recipe-btn').addEventListener('click', function() {
    const recipes = document.querySelectorAll('.recipe-card');
    if (recipes.length > 0) {
        const randomIndex = Math.floor(Math.random() * recipes.length);
        const randomRecipe = recipes[randomIndex].cloneNode(true);
        document.getElementById('random-recipe').innerHTML = '';
        document.getElementById('random-recipe').appendChild(randomRecipe);
    } else {
        alert('No recipes available to display.');
    }
});
