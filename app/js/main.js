// (function(){

//   "use strict";

  // CREATE TASK CONSTRUCTOR

  var Todo = function (options) {
  var args = options || {};

  this.task = args.task;
  this.status = 'Open';
  this.timestamp = moment().format();

  };

  // CREATE EMPTY ARRAY.

  var storageBin = [];

  // WHEN ADDTASK BUTTON IS PRESSED:

  $('#addTask').on('submit', function (e) {

    e.preventDefault();

    // PULL OUT THE VALUE OF THE INPUT FIELD...

    var taskText = $('#taskText').val();

    // ...VAR TASK INSTANCE EQUALS A NEW TASK WITH THE NAME OF WHAT WAS INPUT...

    var taskInstance = new Todo({task: taskText});

    //...PUSH TASKS TO OUR STORAGE...

    storageBin.push(taskInstance);

    // ...AND FINALLY APPEND THE TEXT THAT WAS INPUT TO THE #TASKS UL.

    $('#tasks').append('<li class="">' + taskText + '</li>');

  });

  // ON THE CLICK OF AN LI INSTIDE OF THE #TASKS UL:

  $('#tasks').on('click', 'li', function (e){
    e.preventDefault();

    // CREATE A VARIABLE EQUAL TO THE TEXT OF THE LI INSIDE OF #TASK...

    var tTask = $(this).text();

    // ...CREATE A VARIABLE THAT LOOKS WITHIN OUR STORAGE FOR THE TASK WITH THE SAME TITLE AS TTASK...
    
    var taskToEdit = _.find(storageBin, {task: tTask});

    // ...REDEFINE OUR TASK'S STATUS TO CLOSED...

    taskToEdit.status = 'Closed';

    // IF THE TASK IS CLOSED, APPEND IT TO THE TASKS DONE UL AND...

    if (taskToEdit.status === 'Closed') {

      // ...APPEND FINISHED TASKS TO THE DONE UL WITH A CSS CLASS THAT WILL PULL IN STYLES...

      $('#tasksDone').append('<li class="complete">' + tTask + '</li>');

      // ...REMOVE THE TASK FROM THE #TASK UL.

      $('#tasks').remove(tTask); 
    }
  });

// }());