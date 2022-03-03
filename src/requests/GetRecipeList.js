/* eslint-disable */
import axios from 'axios';

export default function GetRecipeList(query) {
  if (!query) {
    return Promise.resolve([]);
  }
  return axios
    .get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&ranking=2&number=6&apiKey=6a3d81f73aae4b83983232ca23a0e9b1`)
    .then((response) => {

      console.log(response)
      const recipeResults = response.data.map(recipe => {
       const basicInfo = {title: recipe.title,
        image: recipe.image,
        }
        return basicInfo;
      });
      console.log(recipeResults)
    })
    .catch((err) => {
      console.log(err);
    });
}
