// (function(){

//   "use strict";

  // CREATE TASK CONSTRUCTOR

  var Todo = function (options) {
  var args = options || {}

  this.task = args.task;
  this.status = 'Open';
  this.timestamp = moment().format();

  };

  // create empty array.

  var storageBin = [];

  // when addtask button is pressed, pull out the value of the input field. var task instance equals a new task with the name of what was input. push tasks to our storage; and finally append the text that was input to the #tasks ul.

  $('#addTask').on('submit', function (e) {

    e.preventDefault();

    var taskText = $('#taskText').val();

    var taskInstance = new Todo({task: taskText});

    storageBin.push(taskInstance);

    $('#tasks').append('<li class="open">' + taskText + '</li>');

    this.reset();

  });

  // on the click of an li inside of the #tasks ul: create a variable equal to the text of the li inside of #task. create a variable that looks within our storage for the task with the same title as ttask. redefine this task's status to closed.

  $('#tasks').on('click', 'li', function (e){
    e.preventDefault();
    var tTask = $(this).text();
    
    var taskToEdit = _.find(storageBin, {task: tTask});

    taskToEdit.status = 'Closed';

    $(this).addClass('closed');
    $(this).removeClass('open');
  });

  // the same as above, except remove class closed and add class open. do the same to the data.


    $('#tasks').on('click', '.closed', function (e){
    
    e.preventDefault();

    var tTask = $(this).text();
    
    var taskToEdit = _.find(storageBin, {task: tTask});

    taskToEdit.status = 'Open';

    $(this).removeClass('closed');
    $(this).addClass('open');

  });


    $('#deleteButton').on('click', function (e){
    
    e.preventDefault();

    var tClass = $('.closed');
    
    var closedTasks = _.find(storageBin, {status: 'Closed'});

    console.log(closedTasks);

  });

  

  // if (taskToEdit.status === 'Closed') {

  //   // ...APPEND FINISHED TASKS TO THE DONE UL WITH A CSS CLASS THAT WILL PULL IN STYLES...

  //   $('#tasks li').addClass('closed');

  //   $('#tasksDone').append('<li class="closed">' + tTask + '</li>');
  // }

  // ON THE CLICK OF AN LI INSIDE OF THE #TASKSDONE UL:

  // $('#tasksDone').on('click', 'li', function (e){
  //   e.preventDefault();

  //   var tTask = $(this).text();

  //   // ...CREATE A VARIABLE THAT LOOKS WITHIN OUR STORAGE FOR THE TASK WITH THE SAME TITLE AS TTASK...
    
  //   var taskToEdit = _.find(storageBin, {task: tTask});

  //   // ...REDEFINE OUR TASK'S STATUS TO OPEN...

  //   // THE TASK IS CLOSED AND WE WANT TO MOVE IT BACK, SO...

  //   if (taskToEdit.status === 'Closed') {
  //     taskToEdit.status = 'Open';

  //     $('#tasksDone').empty();

  //     $('#tasksDone li').addClass('closed');

  //     $('#tasks').append('<li class="open">' + tTask + '</li>');

  //     $('#tasksDone').remove(tTask);
  //   }

  // });


// }());