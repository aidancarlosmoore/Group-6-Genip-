// recommendations/script.js

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
      { name: "Banana Bread w/ Chocolate Chips", url: "https://natashaskitchen.com/chocolate-chip-banana-bread/" },
      { name: "Tomato Anchovy Pasta", url: "https://bevcooks.com/2023/03/tomato-anchovy-pasta/" },
      { name: "Oven Roasted Mackerel", url: "https://www.themediterraneandish.com/oven-roasted-spanish-mackerel/" },
      { name: "Chili Lime Baked Trout", url: "https://downshiftology.com/recipes/chili-lime-baked-trout/" },
      { name: "Killer Crack Salmon Muffins", url: "https://hungryhappens.net/killer-crack-salmon-muffins/" }
    ],
    tired: [
      { name: "Ham & Potato Soup", url: "https://www.simplyrecipes.com/recipes/ham_and_potato_soup/" },
      { name: "Baked Potato", url: "https://www.simplyrecipes.com/twice-baked-potatoes-recipe-8399707" },
      { name: "Crispy Parmesan Potatoes", url: "https://www.simplyrecipes.com/crispy-parmesan-potatoes-recipe-8624794" },
      { name: "Paprika Chicken with Potatoes", url: "https://www.simplyrecipes.com/recipes/one_pan_paprika_chicken_with_potatoes_and_tomatoes/" },
      { name: "Spicy Shrimp with Rice", url: "https://www.tasteofhome.com/recipes/spicy-shrimp-with-rice/" },
      { name: "Ginger Beef Stir-Fry", url: "https://www.tasteofhome.com/recipes/ginger-beef-stir-fry/" },
      { name: "Brazilian Pork & Black Bean Stew", url: "https://www.tasteofhome.com/recipes/brazilian-pork-black-bean-stew/" },
      { name: "Chili Verde", url: "https://www.tasteofhome.com/recipes/easy-chili-verde/" },
      { name: "Ginger Beef Stir-Fry", url: "https://www.tasteofhome.com/recipes/ginger-beef-stir-fry/" },
      { name: "Brazilian Pork and Black Bean Stew", url: "https://www.tasteofhome.com/recipes/brazilian-pork-black-bean-stew/" },
      { name: "Tropical Sweet and Spicy Pork Tenderloin", url: "https://www.tasteofhome.com/recipes/tropical-sweet-and-spicy-pork-tenderloin/" },
      { name: "Chicken Noodle Soup", url: "https://www.foodnetwork.com/recipes/tyler-florence/chicken-noodle-soup-recipe0-1941332" },
      { name: "Soy Sauce Chow Shrimp Egg Noodles", url: "https://www.foodnetwork.com/recipes/soy-sauce-chow-shrimp-egg-noodles-12165632" }
    ],
    frustrated: [
      { name: "Egg Drop Soup", url: "https://thewoksoflife.com/egg-drop-soup/" },
      { name: "Tomato Anchovy Pasta", url: "https://bevcooks.com/2023/03/tomato-anchovy-pasta/" },
      { name: "Turkey, Strawberry, Avocado Salad", url: "https://www.bbcgoodfood.com/recipes/turkey-strawberry-avocado-salad" },
      { name: "Chipotle Turkey Grain Bowl", url: "https://www.bbcgoodfood.com/recipes/chipotle-turkey-avocado-grain-bowl" },
      { name: "Miso Salmon", url: "https://www.wellplated.com/miso-salmon/" },
      { name: "Ramen Soup", url: "https://thecozycook.com/homemade-ramen/" },
      { name: "Summer Egg Salad with Basil and Peas", url: "https://www.bbcgoodfood.com/recipes/summer-egg-salad-basil-peas" },
      { name: "Curried Spinach, Eggs and Chickpeas", url: "https://www.bbcgoodfood.com/recipes/curried-spinach-eggs-chickpeas" },
      { name: "Ultimate Quiche Lorraine", url: "https://www.bbcgoodfood.com/recipes/ultimate-quiche-lorraine" },
      { name: "Egg Fried Noodles with Bean Sprouts", url: "https://www.bbcgoodfood.com/recipes/egg-fried-noodles-with-beansprouts" },
      { name: "Ricotta, Broccoli and New Potato Frittata", url: "https://www.bbcgoodfood.com/recipes/ricotta-broccoli-new-potato-frittata" },
      { name: "Egg Foo Yung", url: "https://www.bbcgoodfood.com/recipes/egg-foo-yung" },
      { name: "Indian Chickpeas with Poached Eggs", url: "https://www.bbcgoodfood.com/recipes/indian-chickpeas-poached-eggs" }
    ],
    energetic: [
      { name: "Whole-Grain Spelt Salad", url: "https://www.seriouseats.com/whole-grain-spelt-salad-leeks-recipe" },
      { name: "Bulgur Salad w/ Apricots", url: "https://www.seriouseats.com/bulgur-salad-with-apricots-radicchio-herbs-walnuts-recipe" },
      { name: "Warm Couscous Salad w/ Salmon", url: "https://www.seriouseats.com/couscous-salad-salmon-mustard-dill-recipe" },
      { name: "Quinoa Salad", url: "https://www.seriouseats.com/make-ahead-quinoa-salad-cucumber-tomato-parsley-mint-recipe" },
      { name: "Fruit Platter", url: "https://www.google.com/maps/search/fruit+platter+near+me/" },
      { name: "Turkey, Strawberry and Avocado Salad", url: "https://www.bbcgoodfood.com/recipes/turkey-strawberry-avocado-salad" },
      { name: "Chipotle Turkey and Avocado Grain Bowl", url: "https://www.bbcgoodfood.com/recipes/chipotle-turkey-avocado-grain-bowl" },
      { name: "Turkey Tabbouleh", url: "https://www.bbcgoodfood.com/recipes/turkey-tabbouleh" },
      { name: "Garlic Knot Chicken Breasts", url: "https://www.simplyrecipes.com/garlic-knot-chicken-breasts-recipe-8698944" },
      { name: "3-Ingredient Baked BBQ Chicken", url: "https://www.simplyrecipes.com/three-ingredient-baked-barbecue-chicken-recipe-8748801" },
      { name: "Tuscan-Style Chicken Thighs", url: "https://www.simplyrecipes.com/tuscan-style-chicken-thighs-recipe-8771558" },
      { name: "4-Ingredient Chicken Salad", url: "https://www.simplyrecipes.com/four-ingredient-chicken-salad-recipe-8774599" },
      { name: "Honey-Soy Chicken", url: "https://www.simplyrecipes.com/honey-soy-chicken-recipe-8698321" },
      { name: "Lemon Pepper Chicken Breasts", url: "https://www.simplyrecipes.com/lemon-pepper-chicken-breasts-recipe-6828643" }
      
    ],
    anxious: [
      { name: "Dark Chocolate Mousse", url: "https://www.allrecipes.com/recipe/235799/chef-johns-dark-chocolate-mousse/" },
      { name: "Gluten-Free Chocolate Cupcakes", url: "https://www.allrecipes.com/recipe/245571/gluten-free-dark-chocolate-cupcakes/" },
      { name: "Quick Beef Pho", url: "https://www.foodnetwork.com/recipes/quick-beef-pho-7112948" },
      { name: "Savory Oatmeal", url: "https://www.eastewart.com/recipes-and-nutrition/savory-oatmeal-gluten-free/" },
      { name: "Arugula Salad", url: "https://www.wellplated.com/anytime-arugula-salad/" },
      { name: "Summer Egg Salad with Basil and Peas", url: "https://www.bbcgoodfood.com/recipes/summer-egg-salad-basil-peas" },
      { name: "Curried Spinach, Eggs and Chickpeas", url: "https://www.bbcgoodfood.com/recipes/curried-spinach-eggs-chickpeas" },
      { name: "Ultimate Quiche Lorraine", url: "https://www.bbcgoodfood.com/recipes/ultimate-quiche-lorraine" },
      { name: "Egg Fried Noodles with Bean Sprouts", url: "https://www.bbcgoodfood.com/recipes/egg-fried-noodles-with-beansprouts" },
      { name: "Ricotta, Broccoli and New Potato Frittata", url: "https://www.bbcgoodfood.com/recipes/ricotta-broccoli-new-potato-frittata" },
      { name: "Egg Foo Yung", url: "https://www.bbcgoodfood.com/recipes/egg-foo-yung" },
      { name: "Indian Chickpeas with Poached Eggs", url: "https://www.bbcgoodfood.com/recipes/indian-chickpeas-poached-eggs" },
      { name: "Egg Drop Soup", url: "https://thewoksoflife.com/egg-drop-soup/" }
    ],
    studious: [
      { name: "Roast Beef Lettuce Wrap", url: "https://www.eastewart.com/recipes-and-nutrition/roast-beef-lettuce-wraps/" },
      { name: "Smoked Salmon Sandwich", url: "https://www.eastewart.com/recipes-and-nutrition/smoked-salmon-sandwich/" },
      { name: "Pumpkin Hummus Wraps", url: "https://www.eastewart.com/recipes-and-nutrition/savory-spiced-pumpkin-hummus-pumpkin-hummus-veggie-wraps-food-as-medicine/" },
      { name: "Savory Oatmeal with Arugula, Eggs, Tomato, and Avocado", url: "https://www.eastewart.com/recipes-and-nutrition/savory-oatmeal-gluten-free/" },
      { name: "Spicy Kale and Swiss Chard Saute", url: "https://www.eastewart.com/recipes-and-nutrition/migraine-diet-plan-kale-chard-saute/" },
      { name: "Smoked Salmon and Leafy Greens Sandwich", url: "https://www.eastewart.com/recipes-and-nutrition/smoked-salmon-sandwich/" },
      { name: "Whole-Grain Spelt Salad with Leeks and Marinated Mushrooms", url: "https://www.seriouseats.com/whole-grain-spelt-salad-leeks-recipe" },
      { name: "Bulgur Salad with Apricots, Radicchio, Herbs, and Walnuts", url: "https://www.seriouseats.com/bulgur-salad-with-apricots-radicchio-herbs-walnuts-recipe" },
      { name: "Warm Couscous Salad with Salmon and Mustard-Dill Dressing", url: "https://www.seriouseats.com/couscous-salad-salmon-mustard-dill-recipe" },
      { name: "Farro Salad with Blue Cheese, Pine Nuts, and Tomatoes", url: "https://www.seriouseats.com/farro-salad-with-blue-cheese-pine-nuts-and-tomatoes-recipe" }

    ],
    nauseous: [
      { name: "Mashed Potatoes", url: "https://www.spendwithpennies.com/how-to-make-mashed-potatoes/" },
      { name: "Plain Baked Chicken", url: "https://www.allrecipes.com/recipe/240208/simple-baked-chicken-breasts/" },
      { name: "Greek Yogurt w/ Oats", url: "https://www.google.com/search?q=greek+yogurt+with+oats+recipe" },
      { name: "Plain Rice", url: "https://www.google.com/search?q=how+to+make+plain+rice" },
      { name: "Fruit Jello", url:"https://www.yalemedicine.org/nutrition/fruity-gelatin"},
      { name: "Green Tea", url:"https://www.vegrecipesofindia.com/green-tea-green-tea-with-tulsi/"},
      { name: "Banana"}

    ]
  };

  /* WIP recipe data - preferably, alphabetical
  
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
      allergenDiets: [true, true, false, false, false, false, true, true, true, true, false, true, true, true]
    },
    {
      name: ""Chicken Tenders and Fries",
      url: "https://whereismyspoon.co/chicken-tenders-and-fries/",
      moods: [true, false, false, false, false, false, false, false],
      allergenDiets: [false, false, true, false, true, false, false, false, false, false, false, false, false, true, true]
    },
    {
      name: "Chocolate Covered Strawberries",
      url: "https://www.allrecipes.com/gallery/favorite-dark-chocolate-desserts/",
      moods: [happy, sad, frustrated, tired, studious, energetic, anxious, nauseous],
      allergenDiets: [peanuts, tree nuts, dairy, gluten, eggs, soybeans, sesame, shellfish, vegan, vegetarian, pescetarian, keto, gluten-free, kosher, halal]
    },
  ]

  // functions to sort data and get results

  const moodsArr = ["happy", "sad", "frustrated", "tired", "studious", "energetic", "anxious", "nauseous"];
  var moodsArrBoolean = [false, false, false, false, false, false, false, false];

  var hasDiet = false;
  var allergenDietsArrBoolean = [false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  var addRecipe = false;

  selectedMoods.forEach(mood => {
    for (i = 0; i < moodsArr.length; i++) {
      if (mood == moodsArr) {
        moodsArrBoolean[i] = true;
      }
    }
  });

  // insert loop here to check for input allergens and diets, any diets changed to 'true' chances hasDiet to 'true'

  for (i = 0; i < moodsArrBoolean.length; i++) {
      recipeData.forEach((element) => {
        if (this.moods[i] == true) {
          if (hasDiet == true) {
            // check if recipe meets diets, if yes, set addRecipe to 'true'
          }
          else {
            addRecipe = true;
          }
          for (j = 0; j < 8; j++) {
            if (allergenDietsArrBoolean[j] && this.allergenDiets[j]) {
              addRecipe = false;
            }
          }
        }
        if (addRecipe = true) {
          // add current object data as new element in HTML
        }
        
        addRecipe = false;
      })
  };

  */

  const selectedMoods = JSON.parse(localStorage.getItem('selectedMoods')) || [];
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = ''; 
  
  if (selectedMoods.length === 0) {
    outputDiv.innerHTML = '<p>No moods selected. Please go back and select your mood.</p>';
  } else {
    selectedMoods.forEach(mood => {
      if (recipeData[mood]) {
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
    });
  }
  
  