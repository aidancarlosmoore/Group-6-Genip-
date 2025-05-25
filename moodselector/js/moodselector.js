// Makes it so that when you click on the "Return to Title Screen" button, you go to that page
$(".title_screen").click(function() {
  window.location.href = "site.html";
});

// Initializing all the Boolean variables of the user's emotions
let happy = False;
let sad = False;
let tired = False;
let studious = False;
let energetic = False;
let anxious = False;
let nauseous = False;

// Creates an event listener that changes the happy variable based on user clicks, as well as its color
$("#happy-button").click(function() {
  if (happy == True) {
    happy = False;
  }
  else {
    happy = True;
    document.getElementById("happy-button").style.color='#D7DA3F';
    document.getElementById("happy-button").style.backgroundColor='#D7DA3F';
  }
});

$("#sad-button").click(function() {
  let sad = True
});

$("#sad-button").click(function() {
  let sad = True
});