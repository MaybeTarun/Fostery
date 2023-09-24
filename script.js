const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

const getStartedButton = document.getElementById("source-link");
const expandCircle = document.getElementById("expand-circle");
const clickSound = document.getElementById("click-sound");

getStartedButton.addEventListener("click", function(event) {
  event.preventDefault();
  clickSound.play();

  expandCircle.style.width = "500%";
  expandCircle.style.height = "1000%";

  setTimeout(function() {
    window.location.href = "login.html";
  }, 500);
});
