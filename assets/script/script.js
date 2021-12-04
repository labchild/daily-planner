var dateEl = $('#currentDay');
var scheduleEl = $('#schedule');

    // add todays date to page
    dateEl.text(moment().format("dddd, MMMM Do YYYY"));

// edit task 
function handleEditTask() {
    console.log(this);
    var taskText = $(this).text().trim();
    var taskInput = $("<textarea>").addClass("form-control").val(taskText);

    // on click, focus on text area
    $(this).replaceWith(taskInput);
    taskInput.trigger("focus"); 
};

// save changes to local storage
/* function handleSaveTask() {
    var hourId = $(this).closest(".hourBlock").attr("id");
    var newTaskText = $(this).val();
    var taskText = $("<p>").addClass("col task").text(newTaskText);

    // convert back to p
    $(this).replaceWith(taskText);

    // push text area input to local storage as obj
    localStorage.setItem(hourId, newTaskText);
} */


// audit div time

    // if hour has elapsed, grey backround

    // if hour is current, red background

    // if hour is upcoming, green background

// on page load
    // populate todays date
    // populate tasks from local storage

// local storage
    // clear storage every 24 hours (9am?)
    // on save btn click, push associated task to local storage


// listeners
$(".hourBlock").on("click", ".task", handleEditTask);
$(".hourBlock").on("click", ".saveBtn", handleSaveTask);
