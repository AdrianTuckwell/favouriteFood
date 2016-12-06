var setSpanText = function(text){
  var span = document.querySelector('#fav-food')
  span.innerText = text;
}

var handleButtonClick = function(){
  var input = document.querySelector('input');
  setSpanText(input.value);
  // localStorage... two methods of doing this...
  // localStorage.setItem("selection",input.value)
  localStorage.selection = input.value;
  input.value = "";
};

var app = function(){
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;
  // localStorage... two methods of doing this...
  // var saved = localStorage.getItem("selection");
  var saved = localStorage.selection;
  setSpanText(saved);
}

window.onload = app;
