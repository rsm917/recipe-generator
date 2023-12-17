function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}
function generateRecipe(event) {
  event.preventDefault();
  let recipeInput = document.querySelector("#recipe-question");

  let apiKey = "393aa3ab02bfb9bf0et3b4b7c32oea88";
  let prompt = `Please generate a recipe for ${recipeInput.value}`;
  let context =
    " you are a helpful AI Assistant who knows many recipes. Make sure to generate answer in basic HTML and separate each line with a <br/>.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context${context}&key=${apiKey}`;

  console.log("generating recipe..");
  console.log(`Prompt: ${prompt}`);

  axios.get(apiUrl).then(displayRecipe);
}
let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener("submit", generateRecipe);
