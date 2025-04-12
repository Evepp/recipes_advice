const recipes=[
{
    name: "Vegan Croissants",
    ingredients: ["Whole wheat flour", "Coconut milk","Coconut sugar", "maple syrup", "vegan butter", "instant yeast"], 
    advice: "Use cacao for more flavor!"
},
{
  name: "Avocado Toast",
  ingredients: ["avocado", "bread", "lemon"],
  advice: "Add chili flakes for a spicy kick!"
},
{
  name: "Peanut Butter Smoothie",
  ingredients: ["banana", "peanut butter", "milk"],
  advice: "Use frozen banana for better texture."
}
];

function findRecipes() {
    // input from the document to get the ingridients in lower case 
    let input = document.getElementById("ingredientInput").value.toLowerCase()
    // filter by the function of ingredients including input 
    const results= recipes.filter( recipe => recipe.ingredients.includes(input))
  

    // display, finds where is the div to show the results 
    let display = document.getElementById("recipeResults")
    // Important! clears any previous search in the 'recipeResults are'
    display.innerHTML=""

    if (results.length === 0) {
      display.innerHTML = `<p>No recipes found with "${input}"</p>`;
      return;
    }

  
    results.forEach(recipe => {
      const item = document.createElement("div");
      item.innerHTML = `<h3>${recipe.name}</h3>
                        <body>${recipe.ingredients}</body> 
                        <p><strong>Advice:</strong> ${recipe.advice}</p>`;
      display.appendChild(item);
    });
  }
  