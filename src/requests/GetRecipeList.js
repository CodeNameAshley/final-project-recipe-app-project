import axios from "axios";

// export default async function GetRecipeList(query) {
//   try {
//     if (!query) {
//       return Promise.resolve([]);
//     }
//     axios
//       .get(
//         `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&ranking=2&number=6&apiKey=5fbf7e36479c4617a499259980928117`
//       )
//       .then((response) => {
//         const recipeResults = response.data.map((recipe) => {
//           // console.log(response);
//           const basicInfo = {
//             cuisines: recipe.cuisine,
//             dairyFree: recipe.dairyFree,
//             glutenFree: recipe.glutenFree,
//             id: recipe.id,
//             image: recipe.image,
//             pricePerServing: recipe.pricePerServing,
//             readyInMinutes: recipe.readyInMinutes,
//             title: recipe.title,
//             vegan: recipe.vegan,
//             vegetarian: recipe.vegetarian,
//           };
//           // console.log(basicInfo);
//           return basicInfo;
//         });
//         console.log(recipeResults);
//         return recipeResults;
//       });
//   } catch (err) {
//     console.log(err);
//   }
// }

export default async function GetRecipeList(ingredients) {
  try {
    if (!ingredients) {
      return Promise.resolve([]);
    }
    return axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(
          ",+"
        )}&ranking=2&number=30&apiKey=5fbf7e36479c4617a499259980928117`
      )
      .then((response) => {
        const recipeResults = response.data.filter(
          (recipe) =>
            recipe.usedIngredientCount >= Math.floor(ingredients.length / 2)
        );
        const filteredResults = recipeResults.map((recipe) => {
          const basicInfo = {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            usedIngredientCount: recipe.usedIngredientCount,
            cuisines: recipe.cuisine,
            dairyFree: recipe.dairyFree,
            glutenFree: recipe.glutenFree,
            pricePerServing: recipe.pricePerServing,
            readyInMinutes: recipe.readyInMinutes,
            vegan: recipe.vegan,
            vegetarian: recipe.vegetarian,
          };
          return basicInfo;
        });
        return filteredResults;
      });
  } catch (err) {
    console.log(err);
  }
}
