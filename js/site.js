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
//export const recipeData = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//-- INPUT NEW RECIPES AT BOTTOM OF ARRAY HERE --

export const recipeData = [
    // {
    //   name: "Sample Recipe Template",
    //   url: "https://www.google.com",
    //   moods: [happy, sad, frustrated, tired, studious, energetic, anxious, nauseous],
    //   allergenDiets: [peanuts, tree nuts, dairy, gluten, eggs, soybeans, sesame, shellfish, vegan, vegetarian, pescetarian, keto, gluten-free, kosher, halal]
    // },
    {
      name: "Arugula Salad",
      url: "https://www.wellplated.com/anytime-arugula-salad/",
      moods: [false, false, false, false, true, false, true, false],
      allergenDiets: [false, false, false, false, false, false, true, false, true, true, true, true, true, true, true]
    },
    {
      name: "Baked Potato",
      url: "https://www.simplyrecipes.com/twice-baked-potatoes-recipe-8399707",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, true, false, true, false, false, false, false, true, true, true, true, true, true]
    },
    {
      name: "Beef Pho",
      url: "https://www.foodnetwork.com/recipes/quick-beef-pho-7112948",
      moods: [false, false, false, true, false, false, true, false],
      allergenDiets: [false, false, false, true, false, true, false, false, false, false, false, false, false, false, false]
    },
    {
      name: "Beef Udon",
      url: "https://www.foodnetwork.com/recipes/food-network-kitchen/niku-udon-20053306",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, false, true, false, true, false, false, false, false, false, false, false, false, false]
    },
    {
      name: "Black Bean Quesadillas",
      url: "https://www.theyummymuffin.com/single-post/black-bean-quesadilla-nachos",
      moods: [true, false, false, false, false, false, false, false],
      allergenDiets: [false, false, true, false, false, false, false, false, false, true, true, false, true, true, true]
    },
    {
      name: "Brazilian Pork and Black Bean Stew",
      url: "https://www.tasteofhome.com/recipes/brazilian-pork-black-bean-stew/",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false]
    },
    {
      name: "Buckwheat Noodle Salad",
      url: "https://www.foodnetwork.com/recipes/bobby-flay/buckwheat-noodle-salad-recipe-1921056",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, false, true, false, true, true, false, false, true, true, false, false, true, true]
    },
    {
      name: "Bulgur Salad",
      url: "https://www.seriouseats.com/bulgur-salad-with-apricots-radicchio-herbs-walnuts-recipe",
      moods: [false, false, false, false, true, true, false, false],
      allergenDiets: [false, true, false, true, false, false, false, false, true, true, true, false, false, true, true]
    },
    {
      name: "Chicken Noodle Soup",
      url: "https://www.foodnetwork.com/recipes/tyler-florence/chicken-noodle-soup-recipe0-1941332",
      moods: [false, true, false, true, false, false, false, false],
      allergenDiets: [false, false, false, true, true, false, false, false, false, false, false, false, false, true, true]
    },
    {
      name: "Chicken Tenders and Fries",
      url: "https://whereismyspoon.co/chicken-tenders-and-fries/",
      moods: [true, false, false, false, false, false, false, false],
      allergenDiets: [false, false, true, false, true, false, false, false, false, false, false, false, true, true, true]
    },
    {
      name: "Chickpea and Potato Curry",
      url: "https://www.tasteofhome.com/recipes/chickpea-potato-curry/",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, false, false, false, false, false, false, true, true, true, false, true, true, true]
    },
    {
      name: "Chili Lime Baked Trout",
      url: "https://downshiftology.com/recipes/chili-lime-baked-trout/",
      moods: [false, true, true, false, true, true, false, false],
      allergenDiets: [false, false, false, false, false, false, false, false, false, false, true, true, true, true, true]
    },
    {
      name: "Chili Verde",
      url: "https://www.tasteofhome.com/recipes/easy-chili-verde/",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, false, false, false, false, false, false, false, false, false, true, true, false, false]
    },
    {
      name: "Chipotle Turkey and Avocado Grain Bowl",
      url: "https://www.bbcgoodfood.com/recipes/chipotle-turkey-avocado-grain-bowl",
      moods: [false, false, true, false, false, true, false, false],
      allergenDiets: [false, false, true, true, false, false, false, false, false, false, false, true, false, true, true]
    },
    {
      name: "Chocolate Chip Banana Bread",
      url: "https://natashaskitchen.com/chocolate-chip-banana-bread/",
      moods: [false, true, false, false, false, false, false, false],
      allergenDiets: [false, false, true, false, true, false, false, false, false, true, true, false, true, true, true]
    },
    {
      name: "Couscous Salad with Salmon and and Mustard-Dill Dressing",
      url: "https://www.seriouseats.com/couscous-salad-salmon-mustard-dill-recipe",
      moods: [false, false, false, false, true, true, false, false],
      allergenDiets: [false, false, false, true, false, false, false, false, false, false, true, false, false, false, false]
    },
    {
      name: "Curried Spinach, Eggs, and Chickpeas",
      url: "https://www.bbcgoodfood.com/recipes/curried-spinach-eggs-chickpeas",
      moods: [false, false, true, false, true, true, true, false],
      allergenDiets: [false, false, true, false, true, false, false, false, false, true, true, true, true, true, true]
    },
    {
      name: "Dark Chocolate Bacon Cupcakes",
      url: "https://www.allrecipes.com/recipe/161019/dark-chocolate-bacon-cupcakes/",
      moods: [true, true, false, false, false, false, true, false],
      allergenDiets: [false, false, true, true, true, false, false, false, false, false, false, false, false, false, false]
    },
    {
      name: "Dark Chocolate Covered Strawberries",
      url: "https://www.allrecipes.com/gallery/favorite-dark-chocolate-desserts/",
      moods: [true, true, false, false, false, false, true, false],
      allergenDiets: [false, false, false, false, false, false, false, false, true, true, true, true, true, true, true]
    },
    {
      name: "Dark Chocolate Cake",
      url: "https://www.allrecipes.com/recipe/7736/dark-chocolate-cake-i/ ",
      moods: [true, true, false, false, false, false, true, false],
      allergenDiets: [false, false, false, true, true, false, false, false, false, true, true, false, false, true, true]
    },
    {
      name: "Dark Chocolate Mousse",
      url: "https://www.allrecipes.com/recipe/235799/chef-johns-dark-chocolate-mousse/",
      moods: [true, true, false, false, false, false, true, false],
      allergenDiets: [false, false, true, false, true, false, false, false, false, true, true, false, true, true, true]
    },
    {
      name: "Egg Drop Soup",
      url: "https://thewoksoflife.com/egg-drop-soup/",
      moods: [false, false, true, false, true, true, true, false],
      allergenDiets: [false, false, false, false, true, false, false, false, false, true, true, true, true, true, true]
    },
    {
      name: "Egg Foo Yung",
      url: "https://www.bbcgoodfood.com/recipes/egg-foo-yung",
      moods: [false, false, true, false, true, true, true, false],
      allergenDiets: [false, false, false, false, true, false, false, true, false, true, true, true, true, true, true]
    },
    {
      name: "Egg Fried Noodles with Bean Sprouts",
      url: "https://www.bbcgoodfood.com/recipes/egg-fried-noodles-with-beansprouts",
      moods: [false, false, true, false, true, true, true, false],
      allergenDiets: [false, false, false, true, true, true, true, false, false, true, true, true, false, true, true]
    },
    {
      name: "Escarole, Barley, and Parmesan Soup",
      url: "https://www.seriouseats.com/hearty-escarole-barley-parmesan-soup-recipe",
      moods: [false, false, false, false, true, true, false, false],
      allergenDiets: [false, false, true, true, false, true, false, false, false, true, true, false, false, true, true]
    },
    {
      name: "Farro Salad with Blue Cheese, Pine Nuts, and Tomatoes",
      url: "https://www.seriouseats.com/farro-salad-with-blue-cheese-pine-nuts-and-tomatoes-recipe",
      moods: [false, false, false, false, true, true, false, false],
      allergenDiets: [false, true, true, true, false, false, false, false, false, true, true, false, false, true, true]
    },
    {
      name: "Four-Ingredient Chicken Salad",
      url: "https://www.simplyrecipes.com/four-ingredient-chicken-salad-recipe-8774599",
      moods: [false, false, false, false, false, true, false, false],
      allergenDiets: [false, false, true, false, false, false, false, false, false, true, true, true, true, true, true]
    },
    {
      name: "Fruit Platter",
      url: "https://www.ediblearrangements.com/fruit-trays-near-me?srsltid=AfmBOooCkDjPHh8bdcHMWuTFJdLEGDtmIppH_4MK6hLtteHRZ0R7A9ft",
      moods: [false, true, false, false, false, true, false, false],
      allergenDiets: [false, false, false, false, false, false, false, false, true, true, true, false, true, true, true]
    },
    {
      name: "Garlic Knot Chicken Breasts",
      url: "https://www.simplyrecipes.com/garlic-knot-chicken-breasts-recipe-8698944",
      moods: [true, false, false, false, false, true, false, false],
      allergenDiets: [false, false, true, false, false, false, false, false, false, false, false, true, true, true, true]
    },
    {
      name: "Ginger Beef Stir Fry",
      url: "https://www.tasteofhome.com/recipes/ginger-beef-stir-fry/",
      moods: [false, false, false, true, false, false, true, false],
      allergenDiets: [false, false, false, false, false, true, false, false, false, false, false, true, true, false, false]
    },
    {
      name: "Gluten-Free Dark Chocolate Cupcakes",
      url: "https://www.allrecipes.com/recipe/245571/gluten-free-dark-chocolate-cupcakes/",
      moods: [true, true, false, false, false, false, true, false],
      allergenDiets: [false, false, true, false, true, false, false, false, false, true, true, false, true, false, false]
    },
    {
      name: "Grilled Cheese and Tomato Soup",
      url: "https://simply-delicious-food.com/easy-tomato-soup-recipe/",
      moods: [true, true, true, false, false, false, false, false],
      allergenDiets: [false, false, true, false, true, false, false, false, false, true, true, false, true, true, true]
    },
    {
      name: "Ham and Potato Soup",
      url: "https://www.simplyrecipes.com/recipes/ham_and_potato_soup/",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, true, false, false, false, false, false, false, false, false, true, true, false, false]
    },
    {
      name: "Honey Soy Chicken",
      url: "https://www.simplyrecipes.com/honey-soy-chicken-recipe-8698321",
      moods: [false, false, false, false, false, true, false, false],
      allergenDiets: [false, false, false, true, true, true, false, false, false, false, false, false, false, true, true]
    },
    {
      name: "Ice Cream",
      url: "https://www.santacruz.org/blog/best-ice-cream-in-santa-cruz-county/",
      moods: [false, true, false, false, false, false, false, false],
      allergenDiets: [false, false, true, false, false, false, false, false, true, true, true, false, true, true, true]
    },
    {
      name: "Indian Chickpeas with Poached Eggs",
      url: "https://www.bbcgoodfood.com/recipes/indian-chickpeas-poached-eggs",
      moods: [false, false, true, false, true, true, true, false],
      allergenDiets: [false, false, false, false, true, false, false, false, false, true, true, true, true, true, true]
    },
    {
      name: "Lemon Pepper Chicken Breasts",
      url: "https://www.simplyrecipes.com/lemon-pepper-chicken-breasts-recipe-6828643",
      moods: [false, false, false, false, false, true, false, false],
      allergenDiets: [false, false, true, false, false, false, false, false, false, false, false, true, false, true, true]
    },
    {
      name: "Lentil Turkey Lettuce Wrap",
      url: "https://www.eastewart.com/recipes-and-nutrition/healthy-lentil-turkey-lettuce-wraps/",
      moods: [false, false, false, false, true, false, false, false],
      allergenDiets: [false, false, false, true, false, true, false, false, false, false, false, false, false, false, false]
    },
    {
      name: "Mac and Cheese",
      url: "https://www.thechunkychef.com/family-favorite-baked-mac-and-cheese/",
      moods: [false, true, true, false, false, false, false, false],
      allergenDiets: [false, false, true, false, false, false, false, false, false, true, true, false, true, true, true]
    },
    {
      name: "Margherita Pizza",
      url: "https://www.abeautifulplate.com/the-best-homemade-margherita-pizza/",
      moods: [true, false, false, false, false, false, false, false],
      allergenDiets: [false, false, true, true, false, false, false, false, false, true, true, false, false, true, true]
    },
        {
      name: "Mashed Potatoes",
      url: "https://www.spendwithpennies.com/how-to-make-mashed-potatoes/",
      moods: [false, false, false, false, false, false, false, true],
      allergenDiets: [false, false, true, false, false, false, false, false, false, true, true, false, true, true, true]
    },
    {
      name: "Meat Lover's Pizza",
      url: "https://www.bakedbyrachel.com/meat-lovers-pizza/",
      moods: [true, false, false, false, false, false, false, false],
      allergenDiets: [false, false, true, true, false, false, false, false, false, false, false, false, false, true, true]
    },
    {
      name: "Mediterranean Potato Salad",
      url: "https://www.simplyrecipes.com/recipes/mediterranean_potato_salad/",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, false, false, false, false, false, false, true, true, true, true, true, true, true]
    },
    {
      name: "Miso Salmon",
      url: "https://www.wellplated.com/miso-salmon/",
      moods: [false, true, true, false, true, false, true, false],
      allergenDiets: [false, false, false, false, false, false, false, false, false, false, true, true, true, true, true]
    },
    {
      name: "Oven Roasted Mackerel",
      url: "https://www.themediterraneandish.com/oven-roasted-spanish-mackerel/",
      moods: [false, true, true, false, true, true, false, false],
      allergenDiets: [false, false, false, false, false, false, false, false, false, false, true, true, true, true, true]
    },
    {
      name: "Pancit Bihon",
      url: "https://www.foodnetwork.com/recipes/food-network-kitchen/pancit-bihon-19783953",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, false, true, false, true, false, true, false, false, true, false, false, false, false]
    },
    {
      name: "Paprika Chicken with Potatoes and Tomatoes",
      url: "https://www.simplyrecipes.com/recipes/one_pan_paprika_chicken_with_potatoes_and_tomatoes/",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, false, false, false, false, false, false, false, false, false, true, true, true, true]
    },
    {
      name: "Parmesan Potatoes",
      url: "https://www.simplyrecipes.com/crispy-parmesan-potatoes-recipe-8624794",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, true, false, true, false, false, false, false, true, true, true, true, true, true]
    },
    {
      name: "Plain Baked Chicken",
      url: "https://www.allrecipes.com/recipe/240208/simple-baked-chicken-breasts/",
      moods: [false, false, false, false, false, false, false, true],
      allergenDiets: [false, false, true, false, false, false, false, false, false, false, true, true, true, true, true]
    },
    {
      name: "Pumpkin Hummus Collard Wraps",
      url: "https://www.eastewart.com/recipes-and-nutrition/savory-spiced-pumpkin-hummus-pumpkin-hummus-veggie-wraps-food-as-medicine/",
      moods: [false, false, false, false, true, false, false, false],
      allergenDiets: [false, false, false, false, false, false, false, false, true, true, true, false, true, true, true]
    },
    {
      name: "Quinoa Salad with Cucumber, Tomato, and Herbs",
      url: "https://www.seriouseats.com/make-ahead-quinoa-salad-cucumber-tomato-parsley-mint-recipe",
      moods: [false, false, false, false, true, true, false, false],
      allergenDiets: [false, false, false, false, false, false, false, false, true, true, true, false, true, true, true]
    },
    {
      name: "Ramen",
      url: "https://thecozycook.com/homemade-ramen/",
      moods: [false, false, true, false, false, false, false, false],
      allergenDiets: [false, false, true, true, true, true, true, false, false, false, true, false, false, true, true]
    },
    {
      name: "Ricotta, Broccoli, and New Potato Frittata",
      url: "https://www.bbcgoodfood.com/recipes/ricotta-broccoli-new-potato-frittata",
      moods: [false, false, true, false, true, true, true, false],
      allergenDiets: [false, false, true, false, true, false, false, false, false, true, true, true, true, true, true]
    },
    {
      name: "Roast Beef Lettuce Wrap",
      url: "https://www.eastewart.com/recipes-and-nutrition/roast-beef-lettuce-wraps/",
      moods: [false, false, false, false, true, false, true, false],
      allergenDiets: [false, false, true, true, true, true, false, false, false, false, false, true, true, false, false]
    },
    {
      name: "Salmon Muffins",
      url: "https://hungryhappens.net/killer-crack-salmon-muffins/",
      moods: [false, true, true, false, true, true, true, false],
      allergenDiets: [false, false, false, false, false, true, true, false, false, false, true, true, true, true, true]
    },
    {
      name: "Savory Oatmeal with Arugula, Eggs, Tomato, and Avocado",
      url: "https://www.eastewart.com/recipes-and-nutrition/savory-oatmeal-gluten-free/",
      moods: [false, false, false, false, true, false, true, false],
      allergenDiets: [false, false, false, false, true, true, false, false, false, true, true, false, true, true, true]
    },
    {
      name: "Smoked Salmon and Leafy Greens Sandwich",
      url: "https://www.eastewart.com/recipes-and-nutrition/smoked-salmon-sandwich/",
      moods: [false, false, false, false, true, false, true, false],
      allergenDiets: [false, false, false, false, false, true, false, false, false, false, true, true, true, false, false]
    },
    {
      name: "Sour Cream Noodle Bake",
      url: "https://www.foodnetwork.com/recipes/sour-cream-noodle-bake0-2145182",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, true, true, true, false, false, false, false, false, false, false, false, false, false]
    },
    {
      name: "Soy Sauce Chow Shrimp Egg Noodles",
      url: "https://www.foodnetwork.com/recipes/soy-sauce-chow-shrimp-egg-noodles-12165632",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, false, true, true, true, true, true, false, false, true, false, false, false, false]
    },
    {
      name: "Spaghetti with Tomato Cream Sauce",
      url: "https://www.recipetineats.com/creamy-tomato-pasta/",
      moods: [true, false, false, false, false, false, false, false],
      allergenDiets: [false, false, true, true, true, false, false, false, false, true, true, false, false, true, true]
    },
    {
      name: "Spicy Kale and Swiss Chard Saute",
      url: "https://www.eastewart.com/recipes-and-nutrition/migraine-diet-plan-kale-chard-saute/",
      moods: [false, false, false, false, true, false, true, false],
      allergenDiets: [false, false, false, false, false, false, true, false, true, true, true, true, true, true, true]
    },
    {
      name: "Spicy Peanut Noodles",
      url: "https://www.foodnetwork.com/recipes/food-network-kitchen/spicy-peanut-noodles-11933499",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [true, true, false, true, false, true, true, false, false, true, true, false, false, true, true]
    },
    {
      name: "Spicy Shrimp with Rice",
      url: "https://www.tasteofhome.com/recipes/spicy-shrimp-with-rice/",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, false, false, false, false, false, true, false, false, true, true, true, false, false]
    },
    {
      name: "Summer Egg Salad with Basil and Peas",
      url: "https://www.bbcgoodfood.com/recipes/summer-egg-salad-basil-peas",
      moods: [false, false, true, true, true, true, true, false],
      allergenDiets: [false, false, false, false, true, false, false, false, false, true, true, true, true, true, true]
    },
    {
      name: "Tempered Yogurt Rice",
      url: "https://veganbell.com/recipes/tempered-yogurt-rice/",
      moods: [true, false, false, false, false, false, false, false],
      allergenDiets: [false, false, false, false, false, false, false, false, true, true, true, false, true, true, true]
    },
    {
      name: "Three-Ingredient Barbeque Chicken",
      url: "https://www.simplyrecipes.com/three-ingredient-baked-barbecue-chicken-recipe-8748801 ",
      moods: [true, false, false, false, false, true, false, false],
      allergenDiets: [false, false, true, false, false, false, false, false, false, false, false, true, true, true, true]
    },
    {
      name: "Tomato Anchovy Pasta",
      url: "https://bevcooks.com/2023/03/tomato-anchovy-pasta/",
      moods: [false, true, true, false, true, true, false, false],
      allergenDiets: [false, false, true, false, false, false, false, false, false, false, true, true, false, false, false]
    },
    {
      name: "Tom Kha Gai (Coconut Chicken Soup)",
      url: "https://themodernproper.com/coconut-chicken-soup",
      moods: [true, false, false, false, false, false, false, false],
      allergenDiets: [false, false, false, false, false, false, false, false, false, false, false, true, true, false, false]
    },
    {
      name: "Tropical Sweet and Spicy Pork Tenderloin",
      url: "https://www.tasteofhome.com/recipes/tropical-sweet-and-spicy-pork-tenderloin/",
      moods: [false, false, false, true, false, false, false, false],
      allergenDiets: [false, false, false, false, false, true, false, false, false, false, false, false, true, false, false]
    },
    {
      name: "Turkey, Strawberry, and Avocado Salad",
      url: "https://www.bbcgoodfood.com/recipes/turkey-strawberry-avocado-salad",
      moods: [false, false, true, false, false, true, false, false],
      allergenDiets: [false, false, false, false, false, false, false, false, false, false, false, true, true, true, true]
    },
    {
      name: "Turkey Tabbouleh",
      url: "https://www.bbcgoodfood.com/recipes/turkey-tabbouleh",
      moods: [false, false, true, false, false, true, false, false],
      allergenDiets: [false, false, true, true, false, false, false, false, false, false, false, true, false, true, true]
    },
    {
      name: "Tuscan-Style Chicken Thighs",
      url: "https://www.simplyrecipes.com/tuscan-style-chicken-thighs-recipe-8771558",
      moods: [true, false, false, false, false, true, false, false],
      allergenDiets: [false, false, true, false, false, false, false, false, false, false, false, true, true, true, true]
    },
    {
      name: "Udon Vegan Soup",
      url: "https://thenewbaguette.com/sick-day-soup-vegan/",
      moods: [true, false, false, false, false, false, false, false],
      allergenDiets: [false, false, false, false, false, true, true, false, true, true, true, false, true, true, true]
    },
    {
      name: "Ultimate Quiche Lorraine",
      url: "https://www.bbcgoodfood.com/recipes/ultimate-quiche-lorraine",
      moods: [false, false, true, false, true, true, true, false],
      allergenDiets: [false, false, true, true, true, false, false, false, false, false, false, true, false, false, false]
    },
    {
      name: "Whole-Grain Spelt Salad with Leeks and Marinated Mushrooms",
      url: "https://www.seriouseats.com/whole-grain-spelt-salad-leeks-recipe",
      moods: [false, false, false, false, true, true, false, false],
      allergenDiets: [false, false, true, false, false, false, false, true, true, true, true, false, false, true, true]
    }

  ]























