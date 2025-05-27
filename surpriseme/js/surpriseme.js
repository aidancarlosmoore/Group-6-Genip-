
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
        $("#output").html(`<br><div>${ret}</div><br><div><strong>${generated_array.length}</strong> / ${default_value.recipeData.length} recipes shown</div>`);
    }

};

//randomize when the user first loads here
randomize();

//randomize when the user pushes the button
$(".surprise-again-button").click(randomize);