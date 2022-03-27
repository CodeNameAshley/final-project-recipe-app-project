import axios from "axios";

export default async function GetRecipeList(ingredients) {
  try {
    if (!ingredients) {
      return Promise.resolve([]);
    }
    return axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(
          ",+"
        )}&ranking=2&number=30&apiKey=${process.env.REACT_APP_MY_API_KEY}`
      )
      .then((response) => {
        const recipeResults = response.data.filter((recipe) => {
          return (
            recipe.usedIngredientCount >= Math.floor(ingredients.length / 2)
          );
        });
        const filteredResults = recipeResults.map((recipe) => {
          const basicInfo = {
            image: recipe.image,
            id: recipe.id,
            missedIngredientCount: recipe.missedIngredientCount,
            title: recipe.title,
            usedIngredientCount: recipe.usedIngredientCount,
          };
          return basicInfo;
        });
        return filteredResults;
      });
  } catch (err) {
    console.log(err);
  }
}
