var buttons = document.querySelectorAll(".drum");
for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
    var buttonIn = this.innerHTML;
    makeSound(buttonIn);
    buttonAnimation(buttonIn);
  });
}

document.addEventListener("keydown", function(e){
  makeSound(event.key);
  buttonAnimation(event.key);
})
function makeSound(key){
  switch (key) {
    case "s":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
      break;
      case "o":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
        break;
      case "p":
       var snare = new Audio("sounds/snare.mp3");
        snare.play();
          break;
      case "h":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "i":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "a":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "e":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    default:console.log('key was clicked');
}
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")

   setTimeout(function(){
   activeButton.classList.remove("pressed")
   }, 100);
   }
