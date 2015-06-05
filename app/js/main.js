var Todo = function (options) {
  var args = options || {};

  this.task = args.task;
  this.status = 'Open';

};

//Task list
var storageBin = [];

//Set up submit
// On submit create a new instance/task

$('#addTask').on('submit', function (e) {

  e.preventDefault();

  var taskText = $('#taskText').val();
  var taskInstance = new Todo({task: taskText});

  storageBin.push(taskInstance);

  //Store tasks for Later

  storageBin.push(taskInstance);

  // Shows up visually
  $('#tasks').append('<li>' + taskText + '</li>');

});

// Toggle item

$('#tasks').on('click', 'li', function (e){
  e.preventDefault();

  $(this).addClass("complete");

  //grab li item clicked on
  //mark that item as completed

  var tTask = $(this).text();

  var taskToEdit = _.find(storageBin, {task: tTask});

 taskToEdit.status = 'Closed';

  console.log(taskToEdit);

});