document.getElementById('recipe-form').addEventListener('submit',function(e) {
    e.preventDefault();

    // Get form data
    const recipeName = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('recipe-name').value;
    const instructions = document.getElementById('recipe-name').value;
    const imageUpload = document.getElementById('recipe-name').files[0];

    // Add Recipe Card
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-name');

    let imageHTML = ' ';
    const reader = new FileReader();
    reader.onload = function(e) {
        imageHTML = `<image src = "${e.target.result}" alt="${recipeName}" style = "width: 100%; height: auto;>`
        recipeCard.innerHTML = `
        ${ImageHTML}
        <h3>${recipeName}</h3>
        <p><strong>Ingredients:</strong><p>
        <p>${ingredients}</p>
        <p><strong>Instructions:</strong><p>
        <p>${instructions}</p>
        <button class = "favourite-btn">Favourite</button>
        `;
    };
reader.readAsDataURL(imageUpload);


// Add recipe card to the list
document.getElementById('recipe-list').appendChild(recipeCard);

// Add event listener to the favourite button
recipeCard.querySelector('.favourtie-btn').addEventListener('click', function(){ 
    this.classList.toggle('favourite');
    this.textContent = this.classList.contains('favourite')? 'Unfavourite' : 'Favourite'
});
})
