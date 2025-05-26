//imports the global constant varibales
import * as default_values from "../../js/site.js";



// Makes it so that when you click on the "Return to Title Screen" button, you go to that page
$("#title-screen").click(function() {
  window.location.href = "index.html";
});

// Initializing all the Boolean variables of the user's emotions
// let happy = false;
// let sad = false;
// let frustrated = false;
// let tired = false;
// let studious = false;
// let energetic = false;
// let anxious = false;
// let nauseous = false;

// Initializing an array with each of the emotion Booleans so that they can be easily accessed as a group
let emotionsArray = [false, false, false, false, false, false, false, false];

// Creates an event listener that updates the emotion Booleans in the array based on user clicks, as well as the button's color
$("#happy-button").click(function() {
  if (emotionsArray[default_values.HAPPY_INDEX]) {
    emotionsArray[default_values.HAPPY_INDEX] = false;
    document.getElementById("happy-button").style.backgroundColor='#4dabf7';
  }
  else {
    emotionsArray[default_values.HAPPY_INDEX] = true;
    document.getElementById("happy-button").style.backgroundColor='#D7DA3F';
  }
});

$("#sad-button").click(function() {
  if (emotionsArray[default_values.SAD_INDEX]) {
    emotionsArray[default_values.SAD_INDEX] = false;
    document.getElementById("sad-button").style.backgroundColor='#4dabf7';
  }
  else {
    emotionsArray[default_values.SAD_INDEX] = true;
    document.getElementById("sad-button").style.backgroundColor='#0369C2';
  }
});

$("#frustrated-button").click(function() {
  if (emotionsArray[default_values.FRUSTRATED_INDEX]) {
    emotionsArray[default_values.FRUSTRATED_INDEX] = false;
    document.getElementById("frustrated-button").style.backgroundColor='#4dabf7';
  }
  else {
    emotionsArray[default_values.FRUSTRATED_INDEX] = true;
    document.getElementById("frustrated-button").style.backgroundColor='#F2393D';
  }
});

$("#tired-button").click(function() {
  if (emotionsArray[default_values.TIRED_INDEX]) {
    emotionsArray[default_values.TIRED_INDEX] = false;
    document.getElementById("tired-button").style.backgroundColor='#4dabf7';
  }
  else {
    emotionsArray[default_values.TIRED_INDEX] = true;
    document.getElementById("tired-button").style.backgroundColor='#8680C6';
  }
});

$("#studious-button").click(function() {
  if (emotionsArray[default_values.STUDIOUS_INDEX]) {
    emotionsArray[default_values.STUDIOUS_INDEX] = false;
    document.getElementById("studious-button").style.backgroundColor='#4dabf7';
  }
  else {
    emotionsArray[default_values.STUDIOUS_INDEX] = true;
    document.getElementById("studious-button").style.backgroundColor='#50B8B7';
  }
});

$("#energetic-button").click(function() {
  if (emotionsArray[default_values.ENERGETIC_INDEX]) {
    emotionsArray[default_values.ENERGETIC_INDEX] = false;
    document.getElementById("energetic-button").style.backgroundColor='#4dabf7';
  }
  else {
    emotionsArray[default_values.ENERGETIC_INDEX] = true;
    document.getElementById("energetic-button").style.backgroundColor='#FF76B4';
  }
});

$("#anxious-button").click(function() {
  if (emotionsArray[default_values.ANXIOUS_INDEX]) {
    emotionsArray[default_values.ANXIOUS_INDEX] = false;
    document.getElementById("anxious-button").style.backgroundColor='#4dabf7';
  }
  else {
    emotionsArray[default_values.ANXIOUS_INDEX] = true;
    document.getElementById("anxious-button").style.backgroundColor='#FF7F00';
  }
});

$("#nauseous-button").click(function() {
  if (emotionsArray[default_values.NAUSEOUS_INDEX]) {
    emotionsArray[default_values.NAUSEOUS_INDEX] = false;
    document.getElementById("nauseous-button").style.backgroundColor='#4dabf7';
  }
  else {
    emotionsArray[default_values.NAUSEOUS_INDEX] = true;
    document.getElementById("nauseous-button").style.backgroundColor='#4DBE46';
  }
});

// Map of moods to indices (to align with emotionsArray order)
//const moods = ["happy", "sad", "frustrated", "tired", "studious", "energetic", "anxious", "nauseous"];

// When user clicks "Submit" (make sure your button has id="submit-button")
$("#submit-button").click(function() {
  // Collect moods that are true in emotionsArray
  // let selectedMoods = [];
  // emotionsArray.forEach((selected, index) => {
  //   if (selected) {
  //     selectedMoods.push(moods[index]);
  //   }
  // });

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
