import * as default_value from "../../js/site.js";
console.log(default_value.recipeData);

let generated_array=[];

let randomFood = function(){
    // console.log("generating random number "+generated_array);

    let rand = Math.floor(Math.random()*default_value.recipeData.length);
    
    //console.log("rand "+rand);

    if(generated_array.length < default_value.recipeData.length)
    {
        let found = false;
        for(let i = 0; i < generated_array.length; i++)
        {
            if(rand == generated_array[i])
            {
                found = true;
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
    else 
    {
        return null;
    }
    
};

let randomize = function()
{
    let ret = randomFood();
    if(ret === null)
    {
        console.log("You've looked through all the foods lol");
    }
    else
    {
        console.log(ret);
    }

};

$(".surprise-again-button").click(randomize);