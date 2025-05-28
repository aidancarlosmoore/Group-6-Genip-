//import statement not needed for this one specifically, but imports all constants
import * as default_value from "../../js/site.js";
//console.log(default_value.PEANUT_INDEX);

let on_allergen_tab = true;
let on_diet_tab = false;


//initialize variable
let selected_allergens_diet;

//funct to be ran once user clicks the submit button
//run with allergenDietSubmit()
//returns nothing but saves selected allergens and diets to storage.
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


//added tab switching functionality to the allergen/diet selector
//call with tabSwitcher(boolean) the boolean describes wether or not the button pushed was the allergen button
//returns nothing, but hides and shows appropriate checkboxes
let tabSwitcher = function(is_allergen_button)
{
    //console.log("clicked tab button with values alltab: "+on_allergen_tab+" and diettab: "+on_diet_tab);
    if(on_allergen_tab && !is_allergen_button)
    {
        $(".allergen-checkboxes").hide();
        $(".diet-checkboxes").show();
        on_allergen_tab = false;
        on_diet_tab = true;
    }
    else if(on_diet_tab && is_allergen_button)
    {
        $(".diet-checkboxes").hide();
        $(".allergen-checkboxes").show();
        on_allergen_tab = true;
        on_diet_tab = false;
    }
    else
    {
        //console.log("clicked same tab");
    }
    
};

//initialize diet as being hidden
$(".diet-checkboxes").hide();

//when submit button is clicked
$(".allergen-diet-button").click(allergenDietSubmit);

//when either tab switcher button is clicked
$(".allergen-tab-button").click(function(){
    tabSwitcher(true);
});
$(".diet-tab-button").click(function(){
    tabSwitcher(false);
});


