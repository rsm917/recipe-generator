function generateRecipe(event) {
  event.preventDefault();
  let recipeBox = document.querySelector("#recipe");
  new Typewriter("#recipe", {
    strings: "generating recipe..",
    autoStart: true,
    delay: 1,
  });
}
let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener("submit", generateRecipe);
