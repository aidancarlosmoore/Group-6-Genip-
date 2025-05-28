//imports the global constant varibales
import * as default_values from "../../js/site.js";

// Some code here has been commented out and reimplemented so that it works with boolean array output
//
//
//

// Makes it so that when you click on the "Return to Title Screen" button, you go to that page
$("#title-screen").click(function() {
  window.location.href = "index.html";
});

// Initializing all the Boolean variables of the user's emotions
/*
let happy = false;
let sad = false;
let frustrated = false;
let tired = false;
let studious = false;
let energetic = false;
let anxious = false;
let nauseous = false;
*/

// Initializing an array with each of the emotion Booleans so that they can be easily accessed as a group
let emotionsArray = [false, false, false, false, false, false, false, false];

//new function implemented to replace redundant code
let inverse = function(index, id, color){
  //console.log("clicked on " + id + " in state: " + emotionsArray[index])

  //flips color
  if(emotionsArray[index])
  {
    document.getElementById(id).style.backgroundColor="#4dabf7";
  }
  else
  {
    document.getElementById(id).style.backgroundColor=color;
  }

  //flips value of what was stored
  emotionsArray[index] = !emotionsArray[index];
  ;
};

// Creates an event listener that updates the emotion Booleans in the array based on user clicks, as well as the button's color by calling inverse()
$("#happy-button").click(function() {
  inverse(default_values.HAPPY_INDEX, "happy-button","#D7DA3F");
});

$("#sad-button").click(function() {
  inverse(default_values.SAD_INDEX,"sad-button","#0369C2");
});

$("#frustrated-button").click(function() {
  inverse(default_values.FRUSTRATED_INDEX,"frustrated-button","#F2393D");
});

$("#tired-button").click(function() {
  inverse(default_values.TIRED_INDEX,"tired-button","#8680C6");
});

$("#studious-button").click(function() {
  inverse(default_values.STUDIOUS_INDEX,"studious-button","#50B8B7");
});

$("#energetic-button").click(function() {
  inverse(default_values.ENERGETIC_INDEX,"energetic-button","#FF76B4");
});

$("#anxious-button").click(function() {
  inverse(default_values.ANXIOUS_INDEX,"anxious-button","#FF7F00");
});

$("#nauseous-button").click(function() {
  inverse(default_values.NAUSEOUS_INDEX,"nauseous-button","#4DBE46");
});

// Map of moods to indices (to align with emotionsArray order)
//const moods = ["happy", "sad", "frustrated", "tired", "studious", "energetic", "anxious", "nauseous"];

// When user clicks "Submit" (make sure your button has id="submit-button")
$("#submit-button").click(function() {
  //See if user has selected any moods
  if (JSON.stringify(emotionsArray) === JSON.stringify([false, false, false, false, false, false, false, false])) {
    alert("Please select at least one mood before submitting.");
    return;
  }

  // Save selected moods to localStorage
  localStorage.setItem('selectedMoods', JSON.stringify(emotionsArray));
  console.log(localStorage.getItem('selectedMoods'));
  
  // Redirect to recommendations page (adjust path if needed)
  window.location.href = "../recommendations/index.html";
});
