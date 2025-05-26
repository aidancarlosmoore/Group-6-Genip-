//import statement not needed for this one specifically, but imports all constants
import * as default_value from "../../js/site.js";
//console.log(default_value.PEANUT_INDEX);

//initialize variable
let selected_allergens_diet;

//funct to be ran once user clicks the submit button
let allergenDietSubmit = function(){
    //console.log("click");

    //since we know specific indexes for allergens/diets, we can make the array equal to wether or not the box is checked, making each a true/false value
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
    
    //console.log(selected_allergens_diet);
    
    //save selected allergens and diets locally
    localStorage.setItem('selected_allergens_diet', JSON.stringify(selected_allergens_diet));
    console.log(localStorage.getItem('selected_allergens_diet'));

};

//when button is clicked
$(".allergen-diet-button").click(allergenDietSubmit);



