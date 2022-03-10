import axios from "axios";

export default async function GetRecipeList(query) {
  try {
    if (!query) {
      return Promise.resolve([]);
    }
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&ranking=2&number=6&apiKey=6a3d81f73aae4b83983232ca23a0e9b1`
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
