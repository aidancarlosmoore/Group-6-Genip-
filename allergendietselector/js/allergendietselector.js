//--CONSTANTS:--

//EMOTIONS ARRAY OF BOOLEANS
//EACH INDEX HAS A BOOL WHICH REPRESENTS TRUE FOR IF THEY SELECTED THAT EMOTION
//[HAPPY, SAD, FRUSTRATED, TIRED, STUDIOUS, ENERGETIC, ANXIOUS, NAUSEOUS]

const HAPPY_INDEX = 0;
const SAD_INDEX = 1;
const FRUSTRATED_INDEX = 2;
const TIRED_INDEX = 3;
const STUDIOUS_INDEX = 4;
const ENERGETIC_INDEX = 5;
const ANXIOUS_INDEX = 6;
const NAUSEOUS_INDEX = 7;

//ALLERGIES AND DIET RESTRICTIONS ARRAY OF BOOLEANS
//EACH INDEX HAS A BOOL WHICH REPRESENTS TRUE FOR IF THEY HAVE THE ALLERGY, AND TRUE IF THEY HAVE THE DIET RESTRICTION
//[PEANUTS, TREE_NUTS, DAIRY, GLUTEN, EGGS, SOYBEANS, SESAME, SHELLFISH, VEGAN, VEGETARIAN, PESCETARIAN, KETO, GLUTEN_FREE, KOSHER, HALAL]

//ALLERGENS:
const PEANUT_INDEX = 0;
const TREE_NUT_INDEX = 1;
const DAIRY_INDEX = 2;
const GLUTEN_INDEX = 3;
const EGGS_INDEX = 4;
const SOYBEANS_INDEX = 5;
const SESAME_INDEX = 6;
const SHELLFISH_INDEX = 7;
//DIETS:
const VEGAN_INDEX = 8;
const VEGETARIAN_INDEX = 9;
const PESCETARIAN_INDEX = 10;
const KETO_INDEX = 11;
const GLUTEN_FREE_INDEX = 12;
const KOSHER_INDEX = 13;
const HALAL_INDEX = 14;

//--END OF CONSTANTS--

let selected_allergens_diet;


let allergenDietSubmit = function(){
    console.log("click");

    //allergies:
    selected_allergens_diet = [
        $(".peanuts-allergen").is(':checked'),
        $(".tree-nuts-allergen").is(':checked'),
        $(".dairy-allergen").is(':checked'),
        $(".gluten-allergen").is(':checked'),
        $(".eggs-allergen").is(':checked'),
        $(".soybeans-allergen").is(':checked'),
        $(".sesame-allergen").is(':checked'),
        $(".shellfish-allergen").is(':checked'),
        $(".vegan-diet").is(':checked'),
        $(".vegetarian-diet").is(':checked'),
        $(".pescetarian-diet").is(':checked'),
        $(".keto-diet").is(':checked'),
        $(".gluten-free-diet").is(':checked'),
        $(".kosher-diet").is(':checked'),
        $(".halal-diet").is(':checked')];
    
    console.log(selected_allergens_diet);
    
    localStorage.setItem('selected_allergens_diet', JSON.stringify(selected_allergens_diet));
    console.log(localStorage.getItem('selected_allergens_diet'));

};

$(".mood-selector-button").click(allergenDietSubmit);



