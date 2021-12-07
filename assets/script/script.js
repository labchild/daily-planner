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
    var taskText = $("<p>").addClass("col description border border-dark").text(taskInput.val().trim());
    // console.log(taskText);

    // convert back to p
    taskInput.replaceWith(taskText);

    // push text area input to local storage as obj
    localStorage.setItem(hourId, taskInput.val());
};


// audit div time
function updateColor() {
    // timefromtask is now.diff(hourid)
    var now = JSON.parse(moment().format("HH"));
    console.log(now);
    
    $(".time-block").each( function() {
        
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

function updateTimer () {
    // get min of current time
    var min = moment().format('mm');
    if (min == 0) {
        updateColor();
    }
}


// on page load
    // populate todays date
    // populate tasks from local storage

// local storage
    // clear storage every 24 hours (9am?)
    // on save btn click, push associated task to local storage


// listeners
$(".time-block").on("click", ".description", handleEditTask);
$(".time-block").on("click", ".saveBtn", handleSaveTask);
updateColor();
setInterval(updateTimer, 1000 * 10)
