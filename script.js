document.getElementById('recipe-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const recipeName = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    const imageUpload = document.getElementById('image-upload').files[0];

    // Create recipe card
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    
    let imageHTML = '';
    const reader = new FileReader();
    reader.onload = function(e) {
        imageHTML = `<img src="${e.target.result}" alt="${recipeName}" style="width: 100%; height: auto;">`;
        recipeCard.innerHTML = `
            ${imageHTML}
            <h3>${recipeName}</h3>
            <p><strong>Ingredients:</strong></p>
            <p>${ingredients}</p>
            <p><strong>Instructions:</strong></p>
            <p>${instructions}</p>
            <button class="favorite-btn">Favorite</button>
            `;
        };
    reader.readAsDataURL(imageUpload);


    // Add recipe card to the list
    document.getElementById('recipe-list').appendChild(recipeCard);

    // // Add event listener for favorite button
    // recipeCard.querySelector('.favorite-btn').addEventListener('click', function() {
    //     this.classList.toggle('favorite');
    //     this.textContent = this.classList.contains('favorite') ? 'Unfavorite' : 'Favorite';
    // });

    // // Clear the form
    // document.getElementById('recipe-form').reset();   

});


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
