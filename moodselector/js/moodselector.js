// Makes it so that when you click on the "Return to Title Screen" button, you go to that page
$("#title-screen").click(function() {
  window.location.href = "site.html";
});

// Initializing all the Boolean variables of the user's emotions
let happy = false;
let sad = false;
let frustrated = false;
let tired = false;
let studious = false;
let energetic = false;
let anxious = false;
let nauseous = false;

// Initializing an array with each of the emotion Booleans so that they can be easily accessed as a group
let emotionsArray = [happy, sad, frustrated, tired, studious, energetic, anxious, nauseous];

// Creates an event listener that updates the emotion Booleans in the array based on user clicks, as well as the button's color
$("#happy-button").click(function() {
  if (emotionsArray[0] == true) {
    emotionsArray[0] = false;
    document.getElementById("happy-button").style.backgroundColor='#F0F0F0';
  }
  else {
    emotionsArray[0] = true;
    document.getElementById("happy-button").style.backgroundColor='#D7DA3F';
  }
});

$("#sad-button").click(function() {
  if (emotionsArray[1] == true) {
    emotionsArray[1] = false;
    document.getElementById("sad-button").style.backgroundColor='#F0F0F0';
  }
  else {
    emotionsArray[1] = true;
    document.getElementById("sad-button").style.backgroundColor='#0369C2';
  }
});

$("#frustrated-button").click(function() {
  if (emotionsArray[2] == true) {
    emotionsArray[2] = false;
    document.getElementById("frustrated-button").style.backgroundColor='#F0F0F0';
  }
  else {
    emotionsArray[2] = true;
    document.getElementById("frustrated-button").style.backgroundColor='#F2393D';
  }
});

$("#tired-button").click(function() {
  if (emotionsArray[3] == true) {
    emotionsArray[3] = false;
    document.getElementById("tired-button").style.backgroundColor='#F0F0F0';
  }
  else {
    emotionsArray[3] = true;
    document.getElementById("tired-button").style.backgroundColor='#8680C6';
  }
});

$("#studious-button").click(function() {
  if (emotionsArray[4] == true) {
    emotionsArray[4] = false;
    document.getElementById("studious-button").style.backgroundColor='#F0F0F0';
  }
  else {
    emotionsArray[4] = true;
    document.getElementById("studious-button").style.backgroundColor='#50B8B7';
  }
});

$("#energetic-button").click(function() {
  if (emotionsArray[5] == true) {
    emotionsArray[5] = false;
    document.getElementById("energetic-button").style.backgroundColor='#F0F0F0';
  }
  else {
    emotionsArray[5] = true;
    document.getElementById("energetic-button").style.backgroundColor='#FF76B4';
  }
});

$("#anxious-button").click(function() {
  if (emotionsArray[6] == true) {
    emotionsArray[6] = false;
    document.getElementById("anxious-button").style.backgroundColor='#F0F0F0';
  }
  else {
    emotionsArray[6] = true;
    document.getElementById("anxious-button").style.backgroundColor='#FF7F00';
  }
});

$("#nauseous-button").click(function() {
  if (emotionsArray[7] == true) {
    emotionsArray[7] = false;
    document.getElementById("nauseous-button").style.backgroundColor='#F0F0F0';
  }
  else {
    emotionsArray[7] = true;
    document.getElementById("nauseous-button").style.backgroundColor='#4DBE46';
  }
});

// Map of moods to indices (to align with emotionsArray order)
const moods = ["happy", "sad", "frustrated", "tired", "studious", "energetic", "anxious", "nauseous"];

// When user clicks "Submit" (make sure your button has id="submit-button")
$("#submit-button").click(function() {
  // Collect moods that are true in emotionsArray
  let selectedMoods = [];
  emotionsArray.forEach((selected, index) => {
    if (selected) {
      selectedMoods.push(moods[index]);
    }
  });

  if (selectedMoods.length === 0) {
    alert("Please select at least one mood before submitting.");
    return;
  }

  // Save selected moods to localStorage
  localStorage.setItem('selectedMoods', JSON.stringify(selectedMoods));

  // Redirect to recommendations page (adjust path if needed)
  window.location.href = "recommendations/index.html";
});
