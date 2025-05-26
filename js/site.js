//
// TO BE USED FOR CONSTANTS
//



//--CONSTANTS:--

//EMOTIONS ARRAY OF BOOLEANS
//EACH INDEX HAS A BOOL WHICH REPRESENTS TRUE FOR IF THEY SELECTED THAT EMOTION
//[HAPPY, SAD, FRUSTRATED, TIRED, STUDIOUS, ENERGETIC, ANXIOUS, NAUSEOUS]

export const HAPPY_INDEX = 0;
export const SAD_INDEX = 1;
export const FRUSTRATED_INDEX = 2;
export const TIRED_INDEX = 3;
export const STUDIOUS_INDEX = 4;
export const ENERGETIC_INDEX = 5;
export const ANXIOUS_INDEX = 6;
export const NAUSEOUS_INDEX = 7;

//ALLERGIES AND DIET RESTRICTIONS ARRAY OF BOOLEANS
//EACH INDEX HAS A BOOL WHICH REPRESENTS TRUE FOR IF THEY HAVE THE ALLERGY, AND TRUE IF THEY HAVE THE DIET RESTRICTION
//[PEANUTS, TREE_NUTS, DAIRY, GLUTEN, EGGS, SOYBEANS, SESAME, SHELLFISH, VEGAN, VEGETARIAN, PESCETARIAN, KETO, GLUTEN_FREE, KOSHER, HALAL]

//ALLERGENS:
export const PEANUT_INDEX = 0;
export const TREE_NUT_INDEX = 1;
export const DAIRY_INDEX = 2;
export const GLUTEN_INDEX = 3;
export const EGGS_INDEX = 4;
export const SOYBEANS_INDEX = 5;
export const SESAME_INDEX = 6;
export const SHELLFISH_INDEX = 7;
//DIETS:
export const VEGAN_INDEX = 8;
export const VEGETARIAN_INDEX = 9;
export const PESCETARIAN_INDEX = 10;
export const KETO_INDEX = 11;
export const GLUTEN_FREE_INDEX = 12;
export const KOSHER_INDEX = 13;
export const HALAL_INDEX = 14;

//--END OF CONSTANTS--

//RECIPE DATA ARRAY, PREFERABLY ALPHABETICALLY SORTED
//READ THROUGHOULY BEFORE INPUTTING NEW RECIPES
  // how to format objects:
    // each object is a recipe with a name key, url key, moods key, and allergenDiets key
    // moods value is an array of booleans that follows foods in this order: happy, sad, frustrated, tired, studious, energetic, anxious, nauseous
      // 'true' means fits in that category, which shows the item on search
    // allergenDiets value is an array that follows allergens and diets in this order: peanuts, tree nuts, dairy, gluten, eggs, soybeans, sesame, shellfish, vegan, vegetarian, pescetarian, keto, gluten-free, kosher, halal
      // 'true' for allergens means does contain that allergen, which removes the item on search
      // 'true' for diets means fits in that category, which shows the item on search

    // TEMPLATE:
    //   {
    //   name: "Sample Recipe Template",
    //   url: "https://www.google.com",
    //   moods: [happy, sad, frustrated, tired, studious, energetic, anxious, nauseous],
    //   allergenDiets: [peanuts, tree nuts, dairy, gluten, eggs, soybeans, sesame, shellfish, vegan, vegetarian, pescetarian, keto, gluten-free, kosher, halal]
    // },

//temporary value, leave for now
export const recipeData = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//-- INPUT NEW RECIPES AT BOTTOM OF ARRAY HERE --
/*
const recipeData = [
    {
      name: "Sample Recipe Template",
      url: "https://www.google.com",
      moods: [happy, sad, frustrated, tired, studious, energetic, anxious, nauseous],
      allergenDiets: [peanuts, tree nuts, dairy, gluten, eggs, soybeans, sesame, shellfish, vegan, vegetarian, pescetarian, keto, gluten-free, kosher, halal]
    },
    {
      name: "Black Bean Quesadillas",
      url: "https://www.theyummymuffin.com/single-post/black-bean-quesadilla-nachos",
      moods: [true, false, false, false, false, false, false, false],
      allergenDiets: [false, false, true, false, false, false, false, false, false, true, true, false, true, true, true]
    },
    {
      name: "3-Ingredient Barbeque Chicken",
      url: "https://www.simplyrecipes.com/three-ingredient-baked-barbecue-chicken-recipe-8748801 ",
      moods: [true, false, false, false, false, true, false, false],
      allergenDiets: [false, false, true, false, false, false, false, false, false, false, false, true, true, true, true]
    },
    {
      name: "Chicken Tenders and Fries",
      url: "https://whereismyspoon.co/chicken-tenders-and-fries/",
      moods: [true, false, false, false, false, false, false, false],
      allergenDiets: [false, false, true, false, true, false, false, false, false, false, false, false, true, true, true]
    },
    {
      name: "Dark Chocolate Covered Strawberries",
      url: "https://www.allrecipes.com/gallery/favorite-dark-chocolate-desserts/",
      moods: [true, true, false, false, false, false, true, false],
      allergenDiets: [false, false, false, false, false, false, false, false, true, true, true, true, true, true, true]
    },
    {
      name: "Dark Chocolate Bacon Cupcakes",
      url: "https://www.allrecipes.com/recipe/161019/dark-chocolate-bacon-cupcakes/"
      moods: [true, true, false, false, false, false, true, false],
      allergenDiets: [false, false, true, true, true, false, false, false, false, false, false, false, false, false, false]
    },
    {
      name: "Dark Chocolate Cake",
      url: "https://www.allrecipes.com/recipe/7736/dark-chocolate-cake-i/ ",
      moods: [true, true, false, false, false, false, true, false],
      allergenDiets: [false, false, false, true, true, false, false, false, false, true, true, false, false, true, true]
    },
  ]






















*/
