// For button press

var numberofdrum = document.querySelectorAll(".drum").length;

for (i = 0; i < numberofdrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var hello = this.innerHTML;

    makesound(hello);

    });
};
     //For key press

document.addEventListener("keypress", function(event) {
    
    makesound(event.key);
});

//NOte you can put anything in switch and function

 function makesound(g) {


    switch (g) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
audio.play();
            break;
    
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
audio.play();
                    break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
audio.play();  
         break;

        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
audio.play();
          break;
        case "j":// For button press

var numberofdrum = document.querySelectorAll(".drum").length;

for (i = 0; i < numberofdrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var hello = this.innerHTML;

    makesound(hello);
    buttonAnimation(hello);

    });
};
     //For key press

document.addEventListener("keypress", function(event) {
    
    makesound(event.key);
    buttonAnimation(event.key);
});

//NOte you can put anything in switch and function

 function makesound(g) {


    switch (g) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
audio.play();
            break;
    
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
audio.play();
                    break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
audio.play();  
         break;

        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
audio.play();
          break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
audio.play();
      break;

      case "k":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
audio.play();
break;
    }

 }

 function buttonAnimation(currentkey) {

    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){ activeButton.classList.remove("pressed"); }, 1000);
 }
            var audio = new Audio('sounds/tom-2.mp3');
audio.play();
      break;

      case "k":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
audio.play();
break;
    }

 }

