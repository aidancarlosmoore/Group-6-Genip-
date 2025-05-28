
//import all constants from site.js
import * as default_value from "../../js/site.js";
//console.log(default_value.recipeData);

//CONSTANTS 
//initialize a constant for the word translation of what the boolean array represents, for use in parseAllergensDiet
const allergenDietArr = ["Peanuts", "Tree Nuts", "Dairy", "Gluten", "Eggs", "Soybeans", "Sesame", "Shellfish", "Vegan", "Vegetarian", "Pescetarian", "Keto", "Gluten-Free", "Kosher", "Halal"]

//VARIABLES
//initialize an array to store what indexies have been printed
let generated_array=[];


//FUNCTIONS
//function for getting a random food
//call with randomFood()
//takes in no parameters and returns a food object from recipeData[]
let randomFood = function(){

    // console.log("generating random number "+generated_array);

    //generate a random value from 0 to len-1 of recipe data
    let rand = Math.floor(Math.random()*default_value.recipeData.length);
    //console.log("rand "+rand);
    
    //if the amount of things we have generated is less than the total amount of foods we have, we can look for another random food
    if(generated_array.length < default_value.recipeData.length)
    {
        //initialize a found variable so we can determine if we have already randomized to this element.
        let found = false;

        //loop through the arr of what we have already generated, if its not there we will return that value, if it is, we will generate a new value.
        for(let i = 0; i < generated_array.length; i++)
        {
            if(rand == generated_array[i])
            {
                found = true;
                break;
            }
        }
        if(found)
        {
            
            return randomFood();
        }
        else{
            generated_array.push(rand);
            return default_value.recipeData[rand];
        }
        
    }
    //else we have no more elements to randomize to, we return null
    else 
    {
        return null;
    }
    
};


//given an arr of booleans, this will return a text-based representation of what allergens and diets the food fits/doesnt fit
//call with parseAllergensDiet(input_array) where input_array is an array of booleans exactly 15 in length
//returns a string with a list of allergens and diets that the input_array corresponds to, formatted to fit html
let parseAllergensDiet = function(arr)
{
    //similar to fizzbuzz, initialize an empty string
    let ret = "";
    //each time we find an allergen, we add it to the list
    for(let i = 0; i < default_value.VEGAN_INDEX; i++)
    {
        if(arr[i])
        {
            //if its the first allergen we find, we add some text
            if(!ret)
            {
                ret += "May contain these allergens: "+allergenDietArr[i];
            }
            //if its not the first, we just apppend the next allergen
            else
            {
                ret += ", "+allergenDietArr[i];
            }
            
        }
    }

    //if theres no allergens, add that text accordingly
    if(!ret)
    {
        ret+="May be allergen-free!"
    }

    //bool tracker, as we cant use the emptiness of the string anymore
    let diet = false;

    //loop through each diet and if it matches, we print as such
    for(let j = default_value.VEGAN_INDEX; j < arr.length; j++)
    {
        if(arr[j])
        {
            if(!diet)
            {
                diet = true;
                ret += "<br>May fit these dietary restrictions: "+allergenDietArr[j];
            }
            else
            {
                ret += ", "+allergenDietArr[j];
            }
            
        }
    }
    if(!diet)
    {
        ret+="<br>May not fit most dietary restrictions.";
    }

    //return our completed string
    return ret;
};


//function for getting random food and printing it
//call with randomize()
//returns nothing, but changes the html of the site to show the food we randomized
let randomize = function()
{   
    //randomize to a food
    let ret = randomFood();
    //if there is specifically null, we know there are no foods left to find
    if(ret === null)
    {
        console.log("You've looked through all the foods lol");
        $("#output").html("<br><div>You've looked through all the foods lol</div><br>");
    }
    else
    {
        console.log(ret);
        $("#output").html(ret.name+"<br>Recipe: <a href="+"\""+ret.url+"\">"+ret.url+"</a><br>"+parseAllergensDiet(ret.allergenDiets)+"<br>Make sure to double check for allergens and dietary restrictions or needs!");
        //$("#output").html(`<br><div>${ret}</div><br><div><strong>${generated_array.length}</strong> / ${default_value.recipeData.length} recipes shown</div>`);
    }

};

//CODE:
//randomize when the user first loads here
randomize();

//randomize when the user pushes the button
$(".surprise-again-button").click(randomize);