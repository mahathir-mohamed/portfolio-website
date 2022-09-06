const bar = document.getElementById("bar").addEventListener("click", myFunction);
const Icon = document.getElementById("icon");

function myFunction() {
  var element = document.getElementById('show');
  element.classList.toggle("show");
  var grid = document.getElementById("grid-item2");
  grid.classList.toggle("menu");
  Icon.classList.toggle("fa-undo");

}



