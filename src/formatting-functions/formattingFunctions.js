/* eslint-disable array-callback-return */

const formatCuisines = (cuisine) => {
  let formattedCuisines;
  if (cuisine.length >= 1) {
    formattedCuisines = `🗺️cuisines: ${cuisine.join(", ")}`;
  } else if (cuisine.length < 1) {
    formattedCuisines = null;
  }
  return formattedCuisines;
};

const formatDiets = (diet) => {
  let formattedDiets;
  if (diet) {
    formattedDiets = `🥗 diets: ${diet.join(", ")}`;
  } else {
    formattedDiets = null;
  }
  return formattedDiets;
};

const formatDishTypes = (dishArray) => {
  let formattedDishTypes;

  if (dishArray.length === 1) {
    formattedDishTypes = `🍽️dish type: ${dishArray.toString()}`;
  } else if (dishArray.length > 1) {
    formattedDishTypes = `🍽️dish type: ${dishArray.join(", ")}`;
  } else {
    formattedDishTypes = null;
  }

  return formattedDishTypes;
};

const formatMissedIngredients = (missedIngredient) => {
  let formattedIngredient;
  if (missedIngredient > 1) {
    formattedIngredient = `🛒missed ingredient: ${missedIngredient} items`;
  } else if (missedIngredient === 1) {
    formattedIngredient = `🛒missed ingredient: ${missedIngredient} item`;
  } else {
    formattedIngredient = null;
  }

  return formattedIngredient;
};

const formatOccasions = (occasionsArray) => {
  let formattedOccasion;
  if (occasionsArray.length >= 1) {
    formattedOccasion = `🎉 occasion: ${occasionsArray.join(", ")}`;
  } else if (occasionsArray.length < 1) {
    formattedOccasion = null;
  }
  return formattedOccasion;
};

const formatPairingDescription = (wineString) => {
  let formattedPairingDesc;
  if (wineString) {
    formattedPairingDesc = `📝pairing description: ${wineString}`;
  } else {
    formattedPairingDesc = null;
  }
  return formattedPairingDesc;
};

const formatPairingMatch = (matchObjArray) => {
  let formattedPairingMatch;
  if (matchObjArray) {
    matchObjArray.map((match) => {
      const matchInfo = {
        description: match.description,
        price: match.price,
        title: match.title,
      };
      formattedPairingMatch = `🍷title: ${matchInfo.title} 🏷️price: ${matchInfo.price} 📖description: ${matchInfo.description}`;
    });
  } else {
    formattedPairingMatch = null;
  }
  return formattedPairingMatch;
};

const formatPairedWines = (winesArray) => {
  let formattedWines;
  if (winesArray && winesArray.length === 1) {
    formattedWines = `🍾paired wines: ${winesArray.toString()}`;
  } else if (winesArray && winesArray.length > 1) {
    formattedWines = `🍾paired wines: ${winesArray.join(", ")}`;
  } else {
    formattedWines = null;
  }
  return formattedWines;
};

const formatPrice = (price) => {
  const finalPrice = Math.round(price);
  let formattedPrice;
  if (finalPrice > 99) {
    formattedPrice = `💰 price: £${(finalPrice / 100).toFixed(2)}/serving`;
  } else if (finalPrice <= 99 && finalPrice !== 0) {
    formattedPrice = `💰 price: 0.${finalPrice}p/serving`;
  } else {
    formattedPrice = null;
  }
  return formattedPrice;
};

const formatServings = (serving) => {
  let formattedServings;
  if (serving > 1) {
    formattedServings = `👨‍👩‍👧‍👦 serves: ${serving} people`;
  } else if (serving === 1) {
    formattedServings = `👨‍👩‍👧‍👦 serves: ${serving} person`;
  } else {
    formattedServings = null;
  }
  return formattedServings;
};

const formatTime = (time) => {
  const hours = time / 60;
  const timeInHours = Math.floor(hours);
  const minutes = (hours - timeInHours) * 60;
  const timeInMinutes = Math.round(minutes);

  let servingTime;

  if (timeInHours === 0 && timeInMinutes) {
    servingTime = `⏲️ready in: ${timeInMinutes} mins`;
  } else if (timeInMinutes === 0 && timeInHours === 1) {
    servingTime = `⏲️ready in: ${timeInHours} hour`;
  } else if (timeInMinutes === 0 && timeInHours) {
    servingTime = `⏲️ready in: ${timeInHours} hours`;
  } else if (timeInHours > 0 && timeInMinutes > 0) {
    servingTime = `⏲️ready in: ${timeInHours} hours and ${timeInMinutes} mins`;
  } else {
    servingTime = null;
  }

  return servingTime;
};

const formatUnit = (unit) => {
  let formattedUnit;
  if (unit > 1) {
    formattedUnit = "pieces";
  } else if (unit === 1) {
    formattedUnit = "piece";
  } else {
    formattedUnit = null;
  }

  return formattedUnit;
};

const formatUsedIngredients = (usedIngredient) => {
  let formattedIngredient;
  if (usedIngredient > 1) {
    formattedIngredient = `🍳used ingredient: ${usedIngredient} items`;
  } else if (usedIngredient === 1) {
    formattedIngredient = `🍳used ingredient: ${usedIngredient} item`;
  } else {
    formattedIngredient = null;
  }
  return formattedIngredient;
};

const removeTags = (string) => {
  return string
    .replace(/<[^>]*>/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
};

export {
  formatCuisines,
  formatDiets,
  formatDishTypes,
  formatMissedIngredients,
  formatOccasions,
  formatPairingDescription,
  formatPairingMatch,
  formatPairedWines,
  formatPrice,
  formatServings,
  formatTime,
  formatUnit,
  formatUsedIngredients,
  removeTags,
};
