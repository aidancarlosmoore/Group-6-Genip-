// recommendations/script.js

//import all constants from site.js
import * as default_value from "../../js/site.js";

/* obsolete data - all recipes are now found in main site.js

const recipeData = {
    happy: [
      { name: "Sushi", url: "https://www.google.com/search?q=sushi+near+me" },
      { name: "Yogurt Rice", url: "https://veganbell.com/recipes/tempered-yogurt-rice/" },
      { name: "Tom Kha Gai", url: "https://themodernproper.com/coconut-chicken-soup" },
      { name: "Black Bean Quesadillas", url: "https://www.theyummymuffin.com/single-post/black-bean-quesadilla-nachos" },
      { name: "Meat Lovers Pizza", url: "https://www.bakedbyrachel.com/meat-lovers-pizza/" },
      { name: "Margherita Pizza", url: "https://www.abeautifulplate.com/the-best-homemade-margherita-pizza/" },
      { name: "Chicken Tenders and Fries", url: "https://whereismyspoon.co/chicken-tenders-and-fries/" },
      { name: "Grilled Cheese & Tomato Soup", url: "https://simply-delicious-food.com/easy-tomato-soup-recipe/" },
      { name: "Spaghetti with Tomato Cream Sauce", url: "https://www.recipetineats.com/creamy-tomato-pasta/" },
      { name: "Udon Soup with Tofu and Kimchi", url: "https://thenewbaguette.com/sick-day-soup-vegan/" },
      { name: "Dark Chocolate Mousse", url: "https://www.allrecipes.com/recipe/235799/chef-johns-dark-chocolate-mousse/" },
      { name: "Dark Chocolate Cake", url: "https://www.allrecipes.com/recipe/7736/dark-chocolate-cake-i/" },
      { name: "Dark Chocolate Bacon Cupcakes", url: "https://www.allrecipes.com/recipe/161019/dark-chocolate-bacon-cupcakes/" },
      { name: "Chocolate Covered Strawberries", url: "https://www.allrecipes.com/gallery/favorite-dark-chocolate-desserts/" },
      { name: "Gluten-Free Dark Chocolate Cupcakes", url: "https://www.allrecipes.com/recipe/245571/gluten-free-dark-chocolate-cupcakes/" },
      { name: "Garlic Knot Chicken Breasts", url: "https://www.simplyrecipes.com/garlic-knot-chicken-breasts-recipe-8698944" },
      { name: "3-Ingredient Baked BBQ Chicken", url: "https://www.simplyrecipes.com/three-ingredient-baked-barbecue-chicken-recipe-8748801" },
      { name: "Tuscan-Style Chicken Thighs", url: "https://www.simplyrecipes.com/tuscan-style-chicken-thighs-recipe-8771558" }
    ],
    sad: [
      { name: "Grilled Cheese & Tomato Soup", url: "https://simply-delicious-food.com/easy-tomato-soup-recipe/" },
      { name: "Mac and Cheese", url: "https://www.thechunkychef.com/family-favorite-baked-mac-and-cheese/" },
      { name: "Chicken Noodle Soup", url: "https://www.foodnetwork.com/recipes/tyler-florence/chicken-noodle-soup-recipe0-1941332" },
      { name: "Ice Cream", url: "https://www.google.com/maps/search/ice+cream+near+me/" },
      { name: "Fruit Platter", url: "https://www.google.com/maps/search/fruit+market+near+me/" },
      { name: "Banana Bread w/ Chocolate Chips", url: "https://natashaskitchen.com/chocolate-chip-banana-bread/" }
    ],
    tired: [
      { name: "Ham & Potato Soup", url: "https://www.simplyrecipes.com/recipes/ham_and_potato_soup/" },
      { name: "Baked Potato", url: "https://www.simplyrecipes.com/twice-baked-potatoes-recipe-8399707" },
      { name: "Crispy Parmesan Potatoes", url: "https://www.simplyrecipes.com/crispy-parmesan-potatoes-recipe-8624794" },
      { name: "Paprika Chicken with Potatoes", url: "https://www.simplyrecipes.com/recipes/one_pan_paprika_chicken_with_potatoes_and_tomatoes/" },
      { name: "Spicy Shrimp with Rice", url: "https://www.tasteofhome.com/recipes/spicy-shrimp-with-rice/" },
      { name: "Ginger Beef Stir-Fry", url: "https://www.tasteofhome.com/recipes/ginger-beef-stir-fry/" },
      { name: "Brazilian Pork & Black Bean Stew", url: "https://www.tasteofhome.com/recipes/brazilian-pork-black-bean-stew/" }
    ],
    frustrated: [
      { name: "Egg Drop Soup", url: "https://thewoksoflife.com/egg-drop-soup/" },
      { name: "Tomato Anchovy Pasta", url: "https://bevcooks.com/2023/03/tomato-anchovy-pasta/" },
      { name: "Turkey, Strawberry, Avocado Salad", url: "https://www.bbcgoodfood.com/recipes/turkey-strawberry-avocado-salad" },
      { name: "Chipotle Turkey Grain Bowl", url: "https://www.bbcgoodfood.com/recipes/chipotle-turkey-avocado-grain-bowl" },
      { name: "Miso Salmon", url: "https://www.wellplated.com/miso-salmon/" }
    ],
    energetic: [
      { name: "Whole-Grain Spelt Salad", url: "https://www.seriouseats.com/whole-grain-spelt-salad-leeks-recipe" },
      { name: "Bulgur Salad w/ Apricots", url: "https://www.seriouseats.com/bulgur-salad-with-apricots-radicchio-herbs-walnuts-recipe" },
      { name: "Warm Couscous Salad w/ Salmon", url: "https://www.seriouseats.com/couscous-salad-salmon-mustard-dill-recipe" },
      { name: "Quinoa Salad", url: "https://www.seriouseats.com/make-ahead-quinoa-salad-cucumber-tomato-parsley-mint-recipe" },
      { name: "Fruit Platter", url: "https://www.google.com/maps/search/fruit+platter+near+me/" }
    ],
    anxious: [
      { name: "Dark Chocolate Mousse", url: "https://www.allrecipes.com/recipe/235799/chef-johns-dark-chocolate-mousse/" },
      { name: "Gluten-Free Chocolate Cupcakes", url: "https://www.allrecipes.com/recipe/245571/gluten-free-dark-chocolate-cupcakes/" },
      { name: "Quick Beef Pho", url: "https://www.foodnetwork.com/recipes/quick-beef-pho-7112948" },
      { name: "Savory Oatmeal", url: "https://www.eastewart.com/recipes-and-nutrition/savory-oatmeal-gluten-free/" }
    ],
    studious: [
      { name: "Roast Beef Lettuce Wrap", url: "https://www.eastewart.com/recipes-and-nutrition/roast-beef-lettuce-wraps/" },
      { name: "Smoked Salmon Sandwich", url: "https://www.eastewart.com/recipes-and-nutrition/smoked-salmon-sandwich/" },
      { name: "Pumpkin Hummus Wraps", url: "https://www.eastewart.com/recipes-and-nutrition/savory-spiced-pumpkin-hummus-pumpkin-hummus-veggie-wraps-food-as-medicine/" },
      { name: "Arugula Salad", url: "https://www.allrecipes.com/recipe/71600/easy-arugula-salad/" },
      { name: "Chili Lime Baked Trour", url: "https://www.mashed.com/1250928/baked-trout-with-sweet-chili-sauce-recipe/"},
      { name: "Curried spinach, eggs, and chickpeas", url: "https://www.bbcgoodfood.com/recipes/curried-spinach-eggs-chickpeas/"},
      { name: "Egg drop soup", url: "https://thewoksoflife.com/egg-drop-soup/"},
      { name: "Egg foo yung", url: "https://www.recipetineats.com/egg-foo-young/"},
      { name: "Indian chickpeas w/ poached eggs", url: "https://www.bbcgoodfood.com/recipes/indian-chickpeas-poached-eggs"},
      { name: "Summer egg salad w/ basil and peas", url: "https://www.bbcgoodfood.com/recipes/summer-egg-salad-basil-peas"},
      { name: "Tomato anchovy pasta", url: "https://bevcooks.com/2023/03/tomato-anchovy-pasta/"},
    ],
    nauseous: [
      { name: "Mashed Potatoes", url: "https://www.spendwithpennies.com/how-to-make-mashed-potatoes/" },
      { name: "Plain Baked Chicken", url: "https://www.allrecipes.com/recipe/240208/simple-baked-chicken-breasts/" },
      { name: "Greek Yogurt w/ Oats", url: "https://www.google.com/search?q=greek+yogurt+with+oats+recipe" },
      { name: "Plain Rice", url: "https://www.google.com/search?q=how+to+make+plain+rice" }
    ]
  };

    WIP recipe data - preferably, alphabetical

  // !!-- SEE SITE.JS FOR NEW LOCATION OF recipeData --!!
  
  // how to format objects:
    // each object is a recipe with a name key, url key, moods key, and allergenDiets key
    // moods value is an array of booleans that follows foods in this order: happy, sad, frustrated, tired, studious, energetic, anxious, nauseous
      // 'true' means fits in that category, which shows the item on search
    // allergenDiets value is an array that follows allergens and diets in this order: peanuts, tree nuts, dairy, gluten, eggs, soybeans, sesame, shellfish, vegan, vegetarian, pescetarian, keto, gluten-free, kosher, halal
      // 'true' for allergens means does contain that allergen, which removes the item on search
      // 'true' for diets means fits in that category, which shows the item on search

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

  // functions to sort data and get results

  // const moodsArr = ["happy", "sad", "frustrated", "tired", "studious", "energetic", "anxious", "nauseous"];
  // var moodsArrBoolean = [false, false, false, false, false, false, false, false]; */

  // grab local storage arrays
  const selectedMoods = JSON.parse(localStorage.getItem('selectedMoods')) || [];
  const selectedDiets = JSON.parse(localStorage.getItem('selected_allergens_diet')) || [];

  const outputDiv = document.getElementById('output');

  // boolean checkers
  var hasAllergen = false;
  var hasDiet = false;
  var newMood = true;
  var addRecipe = false;

  //check if there's an allergy or diet
  for (var i = 0; i < selectedDiets.length; i++) {
    if (selectedDiets[i] == true) {
      if (i < 8) {
        hasAllergen = true;
      }
      if (i >= 8) {
        hasDiet = true;
      }
    }
  }

  for (var i = 0; i < selectedMoods.length; i++) {
    default_value.recipeData.forEach(recipe => {

        // check for matching mood
        if (selectedMoods[i] && recipe.moods[i]) {

          addRecipe = true;

          if (hasAllergen) {

            //check if recipe meets allergens; any selected all
            for (var j = 0; j < 8; j++) {
              if (selectedDiets[j] && recipe.allergenDiets[j]) {
                addRecipe = false;

                //end loop
                //break;
              }
            }
          }
          
          if (hasDiet) {
            
          // check if recipe meets diets; any selected diet with a 'false' diet sets addRecipe to 'false'
            for (var j = 8; j < selectedDiets.length; j++) {
              if (selectedDiets[j] && !recipe.allergenDiets[j]) {
                addRecipe = false;

                //end loop
                //break;
              }
            }
          }
          
        }
        if (addRecipe) {

          // create new header if newMood is 'true'
          if (newMood) {
            const moods = ["Happy", "Sad", "Frustrated", "Tired", "Studious", "Energetic", "Anxious", "Nauseous"];
            const moodTitle = document.createElement('h3');
            moodTitle.textContent = `${moods[i]}:`;
            outputDiv.appendChild(moodTitle);
            newMood = false;
          }

          // add current object data as new element in HTML
          // recipeData[mood].forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `<h4>${recipe.name}</h4><a href="${recipe.url}" target="_blank">View Recipe</a>`;
            outputDiv.appendChild(card);
          // });
        }
        
        //reset checker
        addRecipe = false;
    });

    //reset checker
    newMood = true;
  };

  /* old function - not necessary anymore

  //below group of code has been slightly modified to now work with the array of booleans rather than strings
  const selectedMoods = JSON.parse(localStorage.getItem('selectedMoods')) || [];
  const outputDiv = document.getElementById('output');
  
  //bandaid code added so that changing to an arr of booleans works, code to be deleted later
  const moods = ["happy", "sad", "frustrated", "tired", "studious", "energetic", "anxious", "nauseous"];
  let temp = 0;

  moods.forEach(mood => {
    if (selectedMoods[temp]) {
      const moodTitle = document.createElement('h3');
      moodTitle.textContent = `${mood.charAt(0).toUpperCase() + mood.slice(1)}:`;
      outputDiv.appendChild(moodTitle);
  
      recipeData[mood].forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `<h4>${recipe.name}</h4><a href="${recipe.url}" target="_blank">View Recipe</a>`;
        outputDiv.appendChild(card);
      });
    }

    //part of the band-aid code
    temp++;
  });
  
  */