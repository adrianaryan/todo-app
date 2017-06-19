var tasks = [];

window.onload = function() {
  console.log("it's working!");
}

function addTask() {
  console.log("Added Task!");
  event.preventDefault();
  var form = document.querySelector("form");
  var newTask = {
                who: form.who.value,
                taskName: form.task.value,
                difficulty: form.difficulty.value};
  tasks.push(newTask);
  sortTaskOwner();
  form.reset();
}

function sortTaskOwner() {
  var adrianaListContainer = document.getElementById("todo-list-adriana"); //parents
  var brodyListContainer = document.getElementById("todo-list-brody");
  var bellaListContainer = document.getElementById("todo-list-bella");
  var alexListContainer = document.getElementById("todo-list-alex");

 adrianaListContainer.innerHTML = "";
 brodyListContainer.innerHTML = "";
 bellaListContainer.innerHTML = "";
 alexListContainer.innerHTML = "";

  var ulAdrianaList = document.createElement("ul");
  var ulBrodyList = document.createElement("ul");
  var ulBellaList = document.createElement("ul");
  var ulAlexList = document.createElement("ul");

  for (var i =0; i < tasks.length; i++) {

    var currentTask = tasks[i].taskName;
    var who = tasks[i].who;
    var difficulty = tasks[i].difficulty;
    var li = document.createElement("li");

    if (who === "Adriana") {
      if (difficulty === "easy") {
        li.classList.add("easy");
        li.innerHTML = currentTask + " " + " (" + difficulty +") ";

      } else if (difficulty === "normal") {
        li.classList.add("normal");
        li.innerHTML = currentTask + " " + " (" + difficulty +") ";;
      } else if (difficulty === "hard"){
        li.classList.add("hard");
        li.innerHTML = currentTask + " " + " (" + difficulty +") ";;
      } else{
          li.innerHTML = currentTask;
      }

      ulAdrianaList.appendChild(li);
      // adrianaList.appendChild(ulMyList);
    } else if (who === "Brody") {
      if (difficulty === "easy") {
        li.classList.add("easy");
        li.innerHTML = currentTask + " " + " (" + difficulty +") ";;
      } else if (difficulty === "normal") {
        li.classList.add("normal");
        li.innerHTML = currentTask + " " + " (" + difficulty +") ";;
      } else if (difficulty === "hard"){
        li.classList.add("hard");
        li.innerHTML = currentTask + " " + " (" + difficulty +") ";;
      } else{
          li.innerHTML = currentTask;
      }

      ulBrodyList.appendChild(li);

    } else if (who === "Bella") {
      if (difficulty === "easy") {
        li.classList.add("easy");
        li.innerHTML = currentTask + " " + " (" + difficulty +") ";;
      } else if (difficulty === "normal") {
        li.classList.add("normal");
        li.innerHTML = currentTask + " " + " (" + difficulty +") ";;
      } else if (difficulty === "hard"){
        li.classList.add("hard");
        li.innerHTML = currentTask + " " + " (" + difficulty +") ";;
      } else{
          li.innerHTML = currentTask;
      }

      ulBellaList.appendChild(li);

    } else {
      if (difficulty === "easy") {
        li.classList.add("easy");
        li.innerHTML = currentTask + " " + " (" + difficulty +") ";;
      } else if (difficulty === "normal") {
        li.classList.add("normal");
        li.innerHTML = currentTask + " " + " (" + difficulty +") ";;
      } else if (difficulty === "hard"){
        li.classList.add("hard");
        li.innerHTML = currentTask + " " + " (" + difficulty +") ";;
      } else{
          li.innerHTML = currentTask;
      }

      ulAlexList.appendChild(li);
    }
  }
  adrianaListContainer.appendChild(ulAdrianaList);
  brodyListContainer.appendChild(ulBrodyList);
  bellaListContainer.appendChild(ulBellaList);
  alexListContainer.appendChild(ulAlexList);
}
