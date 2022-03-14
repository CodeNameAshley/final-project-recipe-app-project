import axios from "axios";

export default async function GetRecipeList(query) {
  try {
    if (!query) {
      return Promise.resolve([]);
    }
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&ranking=2&number=6&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        const recipeResults = response.data.map((recipe) => {
          console.log(response);
          const basicInfo = {
            cuisines: recipe.cuisine,
            dairyFree: recipe.dairyFree,
            glutenFree: recipe.glutenFree,
            id: recipe.id,
            image: recipe.image,
            pricePerServing: recipe.pricePerServing,
            readyInMinutes: recipe.readyInMinutes,
            title: recipe.title,
            vegan: recipe.vegan,
            vegetarian: recipe.vegetarian,
          };
          console.log(basicInfo);
          return basicInfo;
        });
        console.log(recipeResults);
        return recipeResults;
      });
  } catch (err) {
    console.log(err);
  }
}
