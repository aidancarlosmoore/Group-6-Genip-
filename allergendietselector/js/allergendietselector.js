import * as default_value from "../../js/site.js";
console.log(default_value.PEANUT_INDEX);


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



