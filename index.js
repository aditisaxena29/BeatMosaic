function makeSound(key){
  switch(key)
  {
      case 'w':
          let crash = new Audio("sounds/crash.mp3");
          crash.play();
        break;
      case 'a':
          let tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;
      case 's':
          let tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;
      case 'd':
          let tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
        break;
      case 'j':
          let tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
        break;
      case 'k':
          let kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
        break;
      case 'l':
          let snare = new Audio("sounds/snare.mp3");
          snare.play();
        break;
      default:
          console.log(key);
  }
}

function buttonAnimation(key){
  let activeButton = document.getElementsByClassName(key)[0];
  console.log(activeButton);
  activeButton.classList.add("pressed");
  setTimeout(()=>activeButton.classList.remove("pressed"),100);
}

let numberOfButtons = document.getElementsByClassName("drum").length;
for(let i=0;i<numberOfButtons;i++)
{
    document.getElementsByClassName("drum")[i].addEventListener("click",event => {
        let buttonInnerHTML = event.target.innerHTML;
        makeSound(buttonInnerHTML); 
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown",event=>{
  makeSound(event.key);
  buttonAnimation(event.key);
});