
// I wanted to save the save button as a variable to be able to later use it as a event listener.
var saveBtn = $(".saveBtn");

// This is to put current date on the page
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// What the click on the save buttons do
// Saves the user input into the local storage so when I leave and come
// back I can see what was written in previously.
function saveInput() {
    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();
    localStorage.setItem(time, description);
};


// Add event listener on save button
saveBtn.on("click", saveInput);