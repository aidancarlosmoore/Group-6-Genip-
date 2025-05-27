
//import all constants from site.js
import * as default_value from "../../js/site.js";
//console.log(default_value.recipeData);

//initialize an array to store what indexies have been printed
let generated_array=[];

//function for getting a random food
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

const allergenDietArr = ["Peanuts", "Tree Nuts", "Dairy", "Gluten", "Eggs", "Soybeans", "Sesame", "Shellfish", "Vegan", "Vegetarian", "Pescetarian", "Keto", "Gluten-Free", "Kosher", "Halal"]
let parseAllergensDiet = function(arr)
{
    let ret = "";
    for(let i = 0; i < default_value.VEGAN_INDEX; i++)
    {
        if(arr[i])
        {
            if(!ret)
            {
                ret += "May contain these allergens: "+allergenDietArr[i];
            }
            else
            {
                ret += ", "+allergenDietArr[i];
            }
            
        }
    }
    if(!ret)
    {
        ret+="May be allergen-free!"
    }
    let diet = false;
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
    return ret;
}

//function for getting random food and printing it
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

//randomize when the user first loads here
randomize();

//randomize when the user pushes the button
$(".surprise-again-button").click(randomize);