var dateEl = $('#currentDay');
var scheduleEl = $('#schedule');

    // add todays date to page
    dateEl.text(moment().format("dddd, MMMM Do YYYY"));

// edit task 
function handleEditTask() {
    var taskText = $(this).text().trim();
    var taskInput = $("<textarea>").addClass("col task form-control").val(taskText);

    // change p to textarea for input, focus on text area
    $(this).replaceWith(taskInput);
    taskInput.trigger("focus"); 
};

// save changes to local storage
function handleSaveTask() {
    // console.log(this);
    var taskInput = $(this).siblings(".task");
    var hourId = $(this).closest(".time-block").attr("id");
    // console.log(hourId);
    // var newTaskText = taskInput.val();
    var taskText = $("<p>").addClass("col description").text(taskInput.val().trim());
    // console.log(taskText);

    // convert back to p
    taskInput.replaceWith(taskText);

    // push text area input to local storage as obj
    localStorage.setItem(hourId, taskInput.val());
};


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
$(".time-block").on("click", ".description", handleEditTask);
$(".time-block").on("click", ".saveBtn", handleSaveTask);
