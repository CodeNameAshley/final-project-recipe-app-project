import axios from "axios";

export default async function GetRecipeList(query) {
  try {
    if (!query) {
      return Promise.resolve([]);
    }
    return axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&ranking=2&number=6&apiKey=d6a7928ebad041768568adf130dbde42`
      )
      .then((response) => {
        const recipeResults = response.data.map((recipe) => {
          const basicInfo = {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
          };
          return basicInfo;
        });
        return recipeResults;
      });
  } catch (err) {
    console.log(err);
  }
}
