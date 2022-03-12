import axios from "axios";

export default async function GetRecipeList(ingredients) {
  try {
    if (!ingredients) {
      return Promise.resolve([]);
    }

    return axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(",+")}&ranking=2&number=30&apiKey=d6a7928ebad041768568adf130dbde42`
      )
      .then((response) => {
        const recipeResults = response.data.filter((recipe) => recipe.usedIngredientCount >= Math.floor(ingredients.length / 2)
        );
        const filteredResults = recipeResults.map((recipe) => {
          const basicInfo = {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
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
