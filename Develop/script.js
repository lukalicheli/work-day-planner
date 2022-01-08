
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

// This is so once you leave page and come back, whatever was stored in the local storage to be 
// on the page.
function display() {
    $(".hour").each(function() {
        var hour = $(this).text();
        var description = localStorage.getItem(hour);
        if(description !== null) {
            $(this).siblings(".description").val(description);
        }
    });
}
display();

// This code is to put the right color for the hours
function color() {
    var hourMoment = moment().hours();
    $(".time-block").each(function() {
        var hour = parseInt($(this).attr("id"));
        if (hour > hourMoment) {
            $(this).addClass("future");
        } else if (hour === hourMoment) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
color();

// Add event listener on save button
saveBtn.on("click", saveInput);