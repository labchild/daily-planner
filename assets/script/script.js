var dateEl = $('#currentDay');
var tasks = [];
// var scheduleEl = $('#schedule');

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
    var taskInput = $(this).siblings(".task");
    var hourId = $(this).closest(".time-block").attr("id");
    var taskText = $("<p>")
        .addClass("col description border border-dark")
        .text(taskInput.val());
    var taskObj = {
        time: hourId,
        description: taskInput.val().trim(),
        date: dateEl.text()
    }

    // send task obj to tasks arr
    tasks = tasks.push(taskObj);
    console.log(tasks);
    // convert back to p
    taskInput.replaceWith(taskText);
    updateColor();

    // save new task description to local storage
    localStorage.setItem("tasks", tasks);
};


// audit div time
function updateColor() {

    var now = JSON.parse(moment().format("HH"));

    $(".time-block").each(function () {

        var hourId = $(this).attr("id");

        // if hour has elapsed, red backround for description
        if (hourId == now) {
            $(this).children(".description").addClass("present");
        }
        // if hour is current, grey background
        if (hourId < now) {
            $(this).children(".description").addClass("past");
        }
        // if hour is upcoming, green background
        if (hourId > now) {
            $(this).children(".description").addClass("future");
        }
    })
}

function updateTimer() {
    // get min of current time, if on the hour, color code
    var min = moment().format('mm');
    if (min == 0) {
        updateColor();
    }
}


// on page load
function pageLoad() {
    // add todays date to page
    dateEl.text(moment().format("dddd, MMMM Do YYYY"));

    // populate tasks from local storage
    handleStoredTasks();
    updateColor();
}



// local storage to page
function handleStoredTasks() {
    console.log("hi!");
    // clear storage every 24 hours (9am?)
    // if today is after date value in obj then remove
    // else print to page on load, push to tasks array

}




// listeners
$("document").ready(pageLoad);
$(".time-block").on("click", ".description", handleEditTask);
$(".time-block").on("click", ".saveBtn", handleSaveTask);

setInterval(updateTimer, 1000 * 10)
